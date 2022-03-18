
import './ProductImage.scss'
import { Error } from '../errors/Error'
import React from 'react'

type Image = {
    id: string;
    url: string;
    filename: string;
};

export const ProductImages: React.FC<{
    imageList: Image[];
}> = (props) => {

    const [currentImage, setCurrentImage] = React.useState<Image | undefined>(() => props.imageList[0]);

    // React.useEffect(() => {
    //     setCurrentImage(props.imageList[0]);
    // }, [props.imageList[0]]);
    // console.log(props)

    const onImageClick = React.useCallback((event: React.MouseEvent<HTMLImageElement>) => {
        const dataIndex: string | null = event.currentTarget.getAttribute("data-index") || null;
        if (dataIndex) {
            const index: number = Number.parseInt(dataIndex || "0");
            setCurrentImage(props.imageList[index]);
        }
    }, [setCurrentImage]);

    return (<div className='products-images'>
        {currentImage && <img src={currentImage.url}  className="main"/>}
        <div className='gallery' >
        {
            props.imageList?.map((image: Image, index) => {
                return (
                    <img
                        key={`${image.id}.${index}`}
                        data-index={index}
                        src={image.url}
                        alt={image.filename}
                        onClick={onImageClick}
                        className={`${image.url === currentImage.url ? 'active' : null}`}
                    />
                )
            })
        }
        </div>
    </div>
    )
}
