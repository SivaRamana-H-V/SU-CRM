import { forwardRef } from 'react';

const Card = forwardRef(({
  children,
  className = '',
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={`
        bg-white rounded-lg border border-gray-200 shadow
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
});

const CardHeader = forwardRef(({
  children,
  className = '',
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={`
        flex flex-col space-y-1.5 p-6
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
});

const CardTitle = forwardRef(({
  children,
  className = '',
  ...props
}, ref) => {
  return (
    <h3
      ref={ref}
      className={`
        text-lg font-semibold leading-none tracking-tight
        ${className}
      `}
      {...props}
    >
      {children}
    </h3>
  );
});

const CardDescription = forwardRef(({
  children,
  className = '',
  ...props
}, ref) => {
  return (
    <p
      ref={ref}
      className={`
        text-sm text-muted-foreground
        ${className}
      `}
      {...props}
    >
      {children}
    </p>
  );
});

const CardContent = forwardRef(({
  children,
  className = '',
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={`
        p-6 pt-0
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
});

const CardFooter = forwardRef(({
  children,
  className = '',
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={`
        flex items-center p-6 pt-0
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card';
CardHeader.displayName = 'CardHeader';
CardTitle.displayName = 'CardTitle';
CardDescription.displayName = 'CardDescription';
CardContent.displayName = 'CardContent';
CardFooter.displayName = 'CardFooter';

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
};