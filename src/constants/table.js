import Avatar from "@mui/material/Avatar";

export const columns = [
  {
    id: "avatarUrl",
    label: "Profile picture",
    minWidth: 100,
    component: (value) => <Avatar alt="Profile picture" src={value} />,
    align: "center",
  },
  { id: "login", label: "Username", minWidth: 170 },
  {
    id: "type",
    label: "Account type",
    minWidth: 170,
    align: "right",
  },
];
