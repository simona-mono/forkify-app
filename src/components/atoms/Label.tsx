
interface LabelProps {
    text: string;
    inputId: string;
}
export default function Label({ text, inputId }: LabelProps) {
  
    return (
    <>
    <label htmlFor={inputId} className={`label__${inputId}`}>
       {text}
    </label>
    </>
    );
  }