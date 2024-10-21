import MobileMockup from "@/app/components/ui/MobileMockup";
import { useEffect, useState } from "react";

const MobileMockupWrapper = (): JSX.Element | null => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return <MobileMockup />;
};

export default MobileMockupWrapper;