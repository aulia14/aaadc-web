export default function BasicInfo() {
  return (<>
    <div className="border-b flex py-7">
      <div className="w-1/3 flex flex-col">
        <p className="mb-2 font-semibold">Personal Data</p>
        <span className="text-xs text-gray-400">Your email address is your identity on Talenta is used to log in.</span>
      </div>
      <div className="w-1/3">
        <div className="grid grid-cols-2 text-sm gap-5">
          <div className="font-semibold">Full name</div>
          <div>Agung Ardiyanto</div>
          <div className="font-semibold">Mobile phone</div>
          <div>082179099557</div>
          <div className="font-semibold">Email</div>
          <div>agungd3v@gmail.com</div>
          <div className="font-semibold">Phone</div>
          <div>-</div>
          <div className="font-semibold">Birthdate</div>
          <div>14 Dec 1996</div>
          <div className="font-semibold">Gender</div>
          <div>Male</div>
          <div className="font-semibold">Marital status</div>
          <div>Single</div>
          <div className="font-semibold">Blood type</div>
          <div>-</div>
          <div className="font-semibold">Religion</div>
          <div>Islam</div>
        </div>
      </div>
    </div>
    <div className="flex py-7">
      <div className="w-1/3 flex flex-col">
        <p className="mb-2 font-semibold">Identity & Address</p>
        <span className="text-xs text-gray-400">Your email address is your identity on Talenta is used to log in.</span>
      </div>
      <div className="w-1/3">
        <div className="grid grid-cols-2 text-sm gap-5">
          <div className="font-semibold">ID type</div>
          <div>-</div>
          <div className="font-semibold">ID number</div>
          <div>-</div>
          <div className="font-semibold">ID expiration date</div>
          <div>Permanent</div>
          <div className="font-semibold">Postal code</div>
          <div>-</div>
          <div className="font-semibold">Citizen ID address</div>
          <div>-</div>
          <div className="font-semibold">Residential address</div>
          <div>-</div>
        </div>
      </div>
    </div>
  </>);
}