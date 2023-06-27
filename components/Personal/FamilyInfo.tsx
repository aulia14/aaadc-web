import TableData from "../DataTable";

export default function FamilyInfo() {
  const columns = [
    {name: "No", selector: (row: any) => row.no},
    {name: "Name", selector: (row: any) => row.nama},
    {name: "Relationship", selector: (row: any) => row.relationship},
    {name: "Birthdate", selector: (row: any) => row.birthdate},
    {name: "ID number", selector: (row: any) => row.id_number},
    {name: "Marital status", selector: (row: any) => row.marital_status},
    {name: "Gender", selector: (row: any) => row.gender},
    {name: "Job", selector: (row: any) => row.job},
    {name: "Religion", selector: (row: any) => row.religion}
  ];

  const data: any[] = [];

  return (<>
    <TableData column={columns} data={data} />
  </>);
}