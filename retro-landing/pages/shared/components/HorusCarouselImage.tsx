import Image from 'next/image';
import { ImageLink } from "../interfaces/ImageLink";

export const HorusCarouselImage: React.FC<ImageLink> = ({link, alt}) => {
    return (
        <div>
            <Image
            src={link}
            alt={alt}
            layout="responsive"
            width={1366}
            height={450}
            />
        </div>
    );
};