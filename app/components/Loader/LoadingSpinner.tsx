import Image from "@/node_modules/next/image";

export default function LoadingSpinner() {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
            <div className="loader rounded-full p-4 shadow-xl flex flex-col justify-center items-center" style={{ background: 'linear-gradient(180deg, #040e19, rgb(85 78 126 / 12%) 50%, #040e19 100%)' }}>
                <Image alt="" src={'/images/logo-icon.png'} width={'60'} height={'60'} />
            </div>
        </div>
    );
}