import Card from "@/components/Card";


import Button from "@/components/Button";

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <div className="flex flex-col gap-4 mt-8">
        <Button title="Small Rounded-sm" styles="text-xs rounded-sm" />
        <Button title="Medium Rounded-md" styles="text-base rounded-md" />
        <Button title="Large Rounded-full" styles="text-lg rounded-full" />
      </div>
    </div>
  )
}
export default Landing;
