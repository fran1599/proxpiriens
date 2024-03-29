
import Link from 'next/link';


const ImageComponent = () => (
  <>
    <div className="image-container">
    <Link href="/"><img src="/LogoNightBakground.png" alt="logo proxpiriens" className='logo-image' /></Link>
      
    </div>

   <style jsx>{`
      .image-container {
        width: 30px; 
        height: 30px; 
      }

      .logo-image {
        width: 100%;
        height: 100%;
        object-fit: contain; 
      }
    `}</style>
  </>
);

export default ImageComponent;