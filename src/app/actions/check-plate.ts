"use server";

interface ViolationResponse {
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

const validatePlateNumber = (plateNumber: string): boolean => {
  // Check formats with separators:
  // 1. 75F2-17051 (5 digits after hyphen)
  // 2. 75F2-170.51 (3 digits, dot, 2 digits)
  const withSeparatorsPattern = /^\d{2}[A-Z][0-9]?-(\d{5}|\d{3}\.\d{2})$/;
  
  // Check format without separators:
  // 1. 75F217051 (no separators)
  const withoutSeparatorsPattern = /^\d{2}[A-Z][0-9]?\d{5}$/;

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
    });

    if (!response.ok) {
      throw new Error(`Server responded with status: ${response.status}`);
    }

    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error("Error fetching violation data:", error);
    throw new Error("Không thể kết nối đến máy chủ");
  }
};

export async function checkPlateNumber(plateNumber: string) {
  try {
    if (!plateNumber) {
      throw new Error("Vui lòng nhập biển số xe");
    }

    const normalizedPlate = plateNumber.trim();

    if (!validatePlateNumber(normalizedPlate)) {
      throw new Error("Định dạng biển số không hợp lệ");
    }

    // Format plate number before sending to API
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
