import ImageComponent from "@/components/ImageComponent";


const Logo = ({size}) => (
  <>
  <div className="logo" style={{ width: size, height: size }}>
    <ImageComponent />
  </div>
    
  <style jsx>{`
      .logo {
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      @media (max-width: 768px) {
        .logo {
          display: none;  
        }
  `}</style>
</>
)
     
export default Logo;
