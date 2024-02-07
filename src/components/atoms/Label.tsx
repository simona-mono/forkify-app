
interface LabelProps {
    text: string;
    inputId: string;
}
export default function Label({ text, inputId }: LabelProps) {
  
    return (
    <>
    <label htmlFor={inputId} className="mb-2 text-sm font-medium text-gray-900">
       {text}
    </label>
    </>
    );
  }