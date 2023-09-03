import Avatar from "@mui/material/Avatar";
import styled from "@emotion/styled";

const AvatarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const columns = [
  {
    id: "avatarUrl",
    label: "Profile picture",
    minWidth: 100,
    component: (value) => (
      <AvatarWrapper>
        <Avatar alt="Profile picture" src={value} />
      </AvatarWrapper>
    ),
    align: "center",
  },
  { id: "login", label: "Username", minWidth: 170 },
  {
    id: "type",
    label: "Account type",
    minWidth: 170,
    align: "center",
  },
];
