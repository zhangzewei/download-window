import React, { useEffect } from "react";
import { Progress } from "@nextui-org/react";

export default function Loading({
    onFinished = () => { }
}) {
    const [value, setValue] = React.useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setValue((v) => {
                if (v >= 100) {
                    clearInterval(interval);
                    onFinished && onFinished()
                    return 100;
                }
                return v + 10;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Progress
            aria-label="Downloading..."
            size="md"
            value={value}
            color="success"
            showValueLabel={true}
            className="max-w-md"
        />
    );
}
