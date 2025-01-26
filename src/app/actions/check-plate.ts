"use server";

export interface ViolationResponse {
  plateNumber: string;
  plateColor: string;
  vehicleType: string;
  violationTime: string;
  violationLocation: string;
  violationBehavior: string;
  detectionUnit: string;
  resolutionPlace: string[] | string;
  status: string;
}

// Add this interface for the raw API response
interface RawViolationResponse {
  "Biển kiểm soát": string;
  "Màu biển": string;
  "Loại phương tiện": string;
  "Thời gian vi phạm": string;
  "Địa điểm vi phạm": string;
  "Hành vi vi phạm": string;
  "Đơn vị phát hiện vi phạm": string;
  "Nơi giải quyết vụ việc": string[] | string;
  "Trạng thái": string;
}

// Update the type guard
const isViolationResponse = (data: unknown): data is RawViolationResponse => {
  return (
    typeof data === "object" &&
    data !== null &&
    "Biển kiểm soát" in data &&
    "Màu biển" in data &&
    "Loại phương tiện" in data &&
    "Thời gian vi phạm" in data &&
    "Địa điểm vi phạm" in data &&
    "Hành vi vi phạm" in data &&
    "Đơn vị phát hiện vi phạm" in data &&
    "Nơi giải quyết vụ việc" in data &&
    "Trạng thái" in data
  );
};

// Update the transform function
const transformViolationData = (data: RawViolationResponse): ViolationResponse => {
  if (!isViolationResponse(data)) {
    throw new Error("Invalid response format");
  }

  return {
    plateNumber: data["Biển kiểm soát"],
    plateColor: data["Màu biển"],
    vehicleType: data["Loại phương tiện"],
    violationTime: data["Thời gian vi phạm"],
    violationLocation: data["Địa điểm vi phạm"],
    violationBehavior: data["Hành vi vi phạm"],
    detectionUnit: data["Đơn vị phát hiện vi phạm"],
    resolutionPlace: data["Nơi giải quyết vụ việc"],
    status: data["Trạng thái"],
  };
};

const validatePlateNumber = (plateNumber: string): boolean => {
  // Check formats with separators:
  // 1. 11H1-1111 (4 digits after hyphen)
  // 2. 11H1-11111 (5 digits after hyphen)
  const withSeparatorsPattern = /^\d{2}[A-Z][0-9]?-\d{4,5}$/;
  
  // Check format without separators:
  // 1. 11H11111 (4 or 5 digits, no separators)
  const withoutSeparatorsPattern = /^\d{2}[A-Z][0-9]?\d{4,5}$/;

  return withSeparatorsPattern.test(plateNumber) || withoutSeparatorsPattern.test(plateNumber);
};

const formatPlateNumber = (plateNumber: string): string => {
  // Remove all separators (-, ., and spaces)
  return plateNumber.replace(/[-. ]/g, "");
};

const fetchViolationData = async (plateNumber: string): Promise<ViolationResponse[]> => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/phatnguoi`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
      body: new URLSearchParams({ bienso: plateNumber }),
      next: {
        revalidate: 86400,
        tags: [`violations-${plateNumber}`],
      },
    });

    if (!response.ok) {
      throw new Error(`Server responded with status: ${response.status}`);
    }

    const data = await response.json();
    return (data.data || []).map(transformViolationData);
  } catch (error) {
    console.error("Error fetching violation data:", error);
    throw new Error("Không thể kết nối đến máy chủ");
  }
};

export interface CheckPlateResult {
  success: boolean;
  data?: ViolationResponse[];
  error?: string;
}

export async function checkPlateNumber(plateNumber: string): Promise<CheckPlateResult> {
  try {
    if (!plateNumber) {
      throw new Error("Vui lòng nhập biển số xe");
    }

    const normalizedPlate = plateNumber.trim();

    if (!validatePlateNumber(normalizedPlate)) {
      throw new Error("Định dạng biển số không hợp lệ");
    }

    const formattedPlate = formatPlateNumber(normalizedPlate);
    const violations = await fetchViolationData(formattedPlate);
    return { success: true, data: violations };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Đã xảy ra lỗi không xác định",
    };
  }
}
