export default function Header() {
  return <div className="flex justify-between items-center bg-white rounded-lg py-3 px-5 border shadow mb-3 md:mb-7">
    <div></div>
    <div className="flex items-center gap-2">
      <div className="flex flex-col items-end">
        <span className="font-bold leading-5">Agung Ardiyanto</span>
        <span className="text-xs text-gray-500">Frontend Developer</span>
      </div>
      <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">AA</div>
    </div>
  </div>;
}