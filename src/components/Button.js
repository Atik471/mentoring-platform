import Link from 'next/link';

export default function Button({
    children,
    href,
    onClick,
    variant = 'primary',
    size = 'md',
    className = '',
    ...props
}) {
    const baseStyles = 'font-semibold transition-all duration-150 inline-block text-center rounded-full cursor-pointer relative overflow-hidden';

    const variants = {
        primary: 'text-white border border-[#076899]',
        secondary: 'bg-white text-gray-800 hover:bg-gray-50 shadow-md hover:shadow-lg border border-gray-200',
        outline: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-3 text-base',
    };

    const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    // Primary button specific styles
    const primaryStyles = variant === 'primary' ? {
        background: 'radial-gradient(142.81% 89.58% at 13.38% 0%, #0eabd6 0%, #076899 100%)',
    } : {};

    // If href is provided, render as Link
    if (href) {
        return (
            <Link href={href} className={buttonClasses} style={primaryStyles} {...props}>
                {variant === 'primary' && (
                    <span
                        className="absolute top-0 left-0 right-0 h-[40%] pointer-events-none"
                        style={{
                            background: 'linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%)',
                            borderRadius: '9999px 9999px 50% 50%'
                        }}
                    />
                )}
                <span className="relative z-10">{children}</span>
            </Link>
        );
    }

    // Otherwise render as button
    return (
        <button onClick={onClick} className={buttonClasses} style={primaryStyles} {...props}>
            {variant === 'primary' && (
                <span
                    className="absolute top-0 left-0 right-0 h-[40%] pointer-events-none"
                    style={{
                        background: 'linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%)',
                        borderRadius: '9999px 9999px 50% 50%'
                    }}
                />
            )}
            <span className="relative z-10">{children}</span>
        </button>
    );
}
