interface ButtonProps {
  label: string;
  secondary?: boolean;
  fullWidth?: boolean;
  large?: boolean;
  onClick: () => void;
  disabled?: boolean;
  outline?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  label, 
  secondary, 
  fullWidth, 
  onClick, 
  large, 
  disabled, 
  outline 
}) => {
  return ( 
<button
  disabled={disabled}
  onClick={onClick}
  className={`
    disabled:cursor-not-allowed
    rounded-full
    font-medium
    hover:opacity-80
    transition
    border-2
    ${fullWidth ? 'w-full' : 'w-auto'} 
    ${secondary ? 'bg-white' : 'bg-orange-500'}
    ${secondary ? 'text-black' : 'text-white'}
    ${secondary ? 'border-black' : 'border-orange-500'}
    ${large ? 'text-xl' : 'text-md'}
    ${large ? 'px-5' : 'px-4'}
    ${large ? 'py-3' : 'py-2'}
    ${outline ? 'bg-transparent' : ''}
    ${outline ? 'border-white' : ''}
    ${outline ? 'text-white' : ''}
    relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-orange-600 transition duration-300 ease-out border-2 rounded-full shadow-md group
  `}
>
  <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-600 group-hover:translate-x-0 ease">
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
  </span>
  <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease"></span>
  <span className="relative invisible"></span>
  {label}
</button>

   );
}
 
export default Button;