
interface InputProps {
    id: string;
    type: string;
    placeholder: string;
}
export default function Input({ id, type, placeholder }: InputProps) {

    return (
      <>
      <input type={type} id={id} className="block w-full p-4 ps-10 text-sm text-brown-50 rounded-full focus:outline-none" placeholder={placeholder} />
      </>
    );
  }