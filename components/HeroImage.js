// HeroImage.js
import Image from "next/image";

const HeroImage = () => {
    return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <Image
                src="/images/hero-img-assurance-1.png"
                alt="Hero Image"
                layout="fill"
                objectFit="contain"
            />
        </div>
    );
}

export default HeroImage;
