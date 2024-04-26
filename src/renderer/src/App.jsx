import { Button, Image, useDisclosure } from "@nextui-org/react";
import { useState } from "react";
import Loading from './components/Loading'
import Modal from './components/Modal'
function App() {
	const [start, setStart] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const onFinished = () => { setIsOpen(true) }
	return (
		<div className="font-bold flex justify-center flex-col items-center h-screen space-y-8">
			<Image
				width={500}
				height={500}
				className="object-contain"
				src="src/assets/images/app.jpeg"
			/>
			{start && <Loading onFinished={onFinished} />}
			<Button
				color="success"
				className="text-white"
				disabled={start}
				onClick={() => setStart(true)}
			>
				{start ? '安装中...' : '开始安装'}
			</Button>
			<Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
		</div>
	)
}
export default App

