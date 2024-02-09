interface CardProps {
    src: string;
}
export default function CardImg({ src }: CardProps) {
  
    return (
    <>
     <div className="recipe__img">
        <img src={src} alt="recipe-img" />
     </div>
    </>
    );
  }