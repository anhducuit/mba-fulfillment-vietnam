import { cn } from "@/lib/utils";

interface LogoProps {
    className?: string; // For the outer container
    textClassName?: string; // For "MBA FULFILLMENT" text
    subTextClassName?: string; // For "Viet Nam" text
}

const Logo = ({ className }: LogoProps) => {
    return (
        <div className={cn("flex flex-col leading-none", className)}>
            <div className="flex items-baseline font-bold text-[18px] md:text-[24px]">
                <span className="text-[#c59d5f] font-['Playfair_Display'] italic text-[24px] md:text-[32px] tracking-normal mr-1">MBA</span>
                <span className="text-[#4a5568] font-['Exo_2'] tracking-[0.1em]">FULFILLMENT</span>
            </div>
            <div className="flex items-baseline font-black tracking-tighter text-[14px] md:text-[18px] -mt-1 font-['Montserrat']">
                <span className="text-[#5dade2]">Viet</span>
                <span className="text-[#75b865]">Nam</span>
            </div>
        </div>
    );
};

export default Logo;
