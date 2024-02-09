interface CardProps {
    title: string;
}
export default function CardTitle({ title }: CardProps) {
  
    return (
    <>
    <h1 className="recipe__title">
      <span>{title}</span>
    </h1>
    </>
    );
  }