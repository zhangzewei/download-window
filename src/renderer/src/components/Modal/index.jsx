import React from "react";
import { Modal, Image, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Link } from "@nextui-org/react";

export default function MyModal({
    isOpen,
    onClose
}) {
    return (
        <Modal isOpen={isOpen}>
            <ModalContent>
                <ModalHeader className="flex flex-col gap-1 text-black">扫码即可立即获取</ModalHeader>
                <ModalBody className="text-black flex items-center">
                    <Image
                        width={500}
                        height={500}
                        className="object-contain"
                        src="src/assets/images/pay.jpeg"
                    />
                    <Link target="_blank" href="https://affim.baidu.com/unique_44581136/chat?siteId=20446631&userId=44581136&siteToken=80471226551efc5c8a1daa7ae2baa00b">如有疑问，请联系客服</Link>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={onClose}>
                        取消
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
