import { forwardRef } from 'react';

const variants = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
  secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500',
  success: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500',
  danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
  warning: 'bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-500',
  info: 'bg-cyan-500 text-white hover:bg-cyan-600 focus:ring-cyan-500',
  light: 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-100 focus:ring-gray-500',
  dark: 'bg-gray-800 text-white hover:bg-gray-900 focus:ring-gray-500',
  link: 'bg-transparent text-blue-600 hover:text-blue-800 hover:underline focus:ring-blue-500',
};

const sizes = {
  sm: 'py-1 px-2 text-sm',
  md: 'py-2 px-4 text-base',
  lg: 'py-2 px-6 text-lg',
  xl: 'py-3 px-8 text-xl',
};

const Button = forwardRef(({
  children,
  type = 'button',
  className = '',
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  loading = false,
  loadingText = 'Loading...',
  icon = null,
  iconPosition = 'left',
  onClick,
  ...props
}, ref) => {
  const variantClasses = variants[variant] || variants.primary;
  const sizeClasses = sizes[size] || sizes.md;
  const widthClass = fullWidth ? 'w-full' : '';
  
  return (
    <button
      ref={ref}
      type={type}
      className={`
        inline-flex items-center justify-center rounded-md
        font-medium focus:outline-none focus:ring-2 focus:ring-offset-2
        transition-colors duration-200 ease-in-out
        ${disabled || loading ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'}
        ${variantClasses}
        ${sizeClasses}
        ${widthClass}
        ${className}
      `}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading ? (
        <>
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          {loadingText}
        </>
      ) : (
        <>
          {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
          {children}
          {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
        </>
      )}
    </button>
  );
});

Button.displayName = 'Button';

export default Button; 