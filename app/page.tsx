import Image from "next/image";

export default function Home() {
  return (
    <center>
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <h1> Hei, jeg heter Tan </h1>
        <p> Jeg studerer Datateknologi på Universitetet i Bergen </p>
        <p> Dette er vennen min Haron </p>
        <Image
          className="dark:invert"
          src="../public/haron.jpg"
          alt=""
          width={100}
          height={20}
          priority
        />
      </div>
    </center>
  );
}
