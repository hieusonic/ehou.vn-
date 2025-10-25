import { Box, Flex, Text, CloseButton } from "@chakra-ui/react";
import { FormWrapper } from "./FormWrapper";

export default function FormPopup({ onClose }: { onClose: () => void }) {
  return (
    <Flex
      position="fixed"
      inset={0}
      bg="blackAlpha.600"
      justify="center"
      align="center"
      zIndex={99999}
      style={{ isolation: "isolate" }}
    >
      <Box
        bg="white"
        p={6}
        rounded="xl"
        w="430px"
        maxW="90vw"
        position="relative"
        zIndex={100000}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Nút đóng */}
        <CloseButton
          position="absolute"
          top={4}
          right={4}
          size="lg"
          color="gray.500"
          _hover={{ color: "gray.700" }}
          onClick={onClose}
        />

        <Box textAlign="center" mb={4}>
          <Text fontSize="lg" fontWeight="bold" color="blue.700">
            🎓 ĐĂNG KÝ SỚM
          </Text>
          <Text fontSize="md" fontWeight="semibold" color="orange.500">
            NHẬN TƯ VẤN NGAY
          </Text>
          <Text fontSize="sm" color="gray.600" mt={2}>
            Đăng ký để nhận tư vấn miễn phí <br />
            <Text as="span" fontSize="xs" color="gray.500">
              (Thông tin chương trình học, lịch khai giảng...)
            </Text>
          </Text>
        </Box>
        <FormWrapper type="form-poup" />
        <Text fontSize="xs" color="gray.500" textAlign="center" mt={2}>
          * Chúng tôi cam kết bảo mật thông tin theo quy định của EHOU
        </Text>
      </Box>
    </Flex>
  );
}
