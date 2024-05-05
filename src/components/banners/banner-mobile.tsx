import Image from "next/image";

type BannerMobileProps = {
  bg?: string;
  children?: React.ReactNode;
};

const BannerMobile: React.FC<BannerMobileProps> = ({ bg, children }) => {
  return (
    <section className="p-0 m-0 relative top-0 left-0 align-top max-h-max">
      <div className="bg-yoi-blue-4 dark:bg-yoi-blue-1">
        <div className="container flex flex-1 flex-col items-center justify-top pt-8 h-max text-center space-y-4 w-screen pb-10">
          <div className="relative w-screen">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent from-80% to-yoi-blue-4 dark:to-yoi-blue-1 rounded-t-xl" />
            <Image
              alt="Hero"
              className="mx-auto aspect-[2/1] overflow-hidden object-cover"
              height={400}
              src={bg ?? ""}
              width={800}
            />
          </div>
          <div className="space-y-2">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default BannerMobile;
