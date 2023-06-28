import TableData from "../DataTable";

export default function EmergencyContact() {
  const columns = [
    {name: "No", selector: (row: any) => row.no},
    {name: "Name", selector: (row: any) => row.nama},
    {name: "Relationship", selector: (row: any) => row.relationship},
    {name: "Phone number", selector: (row: any) => row.phone}
  ];

  const data: any[] = [];

  return (<>
    <TableData column={columns} data={data} />
  </>);
}