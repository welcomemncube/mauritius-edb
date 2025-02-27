"use client";
import { Logout, Notification, Ticket } from "@carbon/icons-react";
import {
  Button,
  TableHeader,
  Table,
  TableRow,
  TableHead,
  TableBody,
  DataTable,
  TableCell,
  TableContainer,
  Pagination,
  TableToolbar,
  TableToolbarContent,
  TableToolbarSearch,
} from "@carbon/react";
import Image from "next/image";

export default function Dashboard() {
  const headers = [
    {
      header: "Permit Name",
      key: "permit_name",
    },
    {
      header: "Permit Owner",
      key: "permit_owner",
    },
    {
      header: "Progress",
      key: "progress",
    },
    {
      header: "Collection Date",
      key: "collection_date",
    },
    {
      header: "Action",
      key: "action",
    },
  ];

  const rows = [
    {
      id: "1",
      permit_name: "Permit A",
      permit_owner: "John Doe",
      progress: "Active",
      collection_date: "2025/02/20",
      action: (
        <Button size="sm" style={{ paddingRight: "10px" }}>
          View Application
        </Button>
      ),
    },
    {
      id: "2",
      permit_name: "Permit C",
      permit_owner: "Jane Smith",
      progress: "Collected",
      collection_date: "2025/02/01",
      action: (
        <Button size="sm" style={{ paddingRight: "10px" }}>
          View Application
        </Button>
      ),
    },
    {
      id: "3",
      permit_name: "Permit D",
      permit_owner: "Michale Dudu",
      progress: "Inactive",
      collection_date: "N/A",
      action: (
        <Button size="sm" style={{ paddingRight: "10px" }}>
          View Application
        </Button>
      ),
    },
    {
      id: "4",
      permit_id: "Content",
      permit_name: "Content",
      permit_owner: "Content",
      progress: "Content",
      collection_date: "Content",
      action: (
        <Button size="sm" style={{ paddingRight: "10px" }}>
          View Application
        </Button>
      ),
    },
    {
      id: "5",
      permit_name: "Content",
      permit_owner: "Content",
      progress: "Content",
      collection_date: "Content",
      action: (
        <Button size="sm" style={{ paddingRight: "10px" }}>
          View Application
        </Button>
      ),
    },
  ];

  return (
    <div style={{ display: "flex" }}>
      <div className="profile">
        <Image
          src="/profile.jpg"
          height={80}
          width={80}
          alt="profile"
          style={{ borderRadius: "50%", marginLeft: "7rem", marginTop: "2rem" }}
        />
        <p className="profile-name">Krishna Doe</p>
        <p className="profile-email">Krishna.Doe@xyz.com</p>
        <p className="profile-email">+27 67 123 5678</p>
        <Button
          size="sm"
          style={{ marginLeft: "6.5rem", paddingRight: "12px" }}
        >
          Edit Profile
        </Button>
        <hr className="line"></hr>
        <div
          style={{
            display: "flex",
            marginTop: "1.87rem",
            marginLeft: "3.5rem",
          }}
        >
          <Notification
            size={20}
            style={{ marginTop: "2px", marginRight: "5px" }}
          />
          <p style={{ fontWeight: 600 }}>Notification</p>
          <p className="number" style={{ marginLeft: "3rem" }}>
            4
          </p>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "0.25rem",
            marginLeft: "3.5rem",
          }}
        >
          <Ticket size={20} style={{ marginTop: "2px", marginRight: "5px" }} />
          <p style={{ fontWeight: 600 }}>Tickets</p>
          <p className="number" style={{ marginLeft: "5rem" }}>
            1
          </p>
        </div>
        <hr className="line"></hr>
        <Button
          size="sm"
          style={{
            marginLeft: "6rem",
            marginTop: "1.81rem",
          }}
          kind="tertiary"
          renderIcon={
            Logout
          }
        >
          Logout
        </Button>
      </div>
      <div style={{ marginLeft: "3rem", marginTop: "3rem" }}>
          <DataTable rows={rows} headers={headers}>
            {({
              rows,
              headers,
              getTableProps,
              getHeaderProps,
              getRowProps,
            }) => (
              <TableContainer title="My Permit Applications">
              <Table {...getTableProps()}>
                <TableHead>
                  <TableRow>
                    {headers.map((header) => (
                      <TableHeader key={header} {...getHeaderProps({ header })}>
                        {header.header}
                      </TableHeader>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row} {...getRowProps({ row })}>
                      {row.cells.map((cell) => (
                        <TableCell key={cell.id}>{cell.value}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            )}
          </DataTable>
          <Pagination
            size="lg"
            backwardText="Previous page"
            forwardText="Next page"
            itemsPerPageText="Items per page:"
            onChange={function noRefCheck() {}}
            page={1}
            pageSize={10}
            pageSizes={[10, 20, 30, 40, 50]}
            totalItems={100}
          />
      </div>
    </div>
  );
}
