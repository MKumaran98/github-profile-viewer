import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import styled from "@emotion/styled";
import { useTheme } from "@mui/material/styles";
import { mq } from "../constants/theme";
import CloseIcon from "@mui/icons-material/Close";
import Avatar from "@mui/material/Avatar";
import { H4, P1, H7, P2 } from "../base";
import { getFullDate } from "../utils/dateHelper";
import { Button } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Box from "@mui/material/Box";

const UserDetailsWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${({ background }) => background};
  padding: 16px;
  border-radius: 16px;
  width: 100%;
  ${mq[1]} {
    width: 50%;
  }
`;

const DialogHeader = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${({ borderColor }) => borderColor};
  padding-bottom: 12px;
`;
const DialogBody = styled.div`
  margin-top: 12px;
`;

const AvatarNameWrapper = styled.div`
  display: flex;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
  gap: 4px;
  height: 100%;
`;

const AccountDetails = styled.div`
  display: grid;
  column-gap: 30px;
  row-gap: 8px;
  grid-template-columns: 1fr 2fr;
  margin-top: 16px;
`;

const UserDetailsDialog = ({ open, handleClose, userDetails }) => {
  const {
    avatarUrl,
    login,
    bio,
    publicRepos,
    followers,
    following,
    createdAt,
    htmlUrl,
  } = userDetails || {};
  const { palette } = useTheme();
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <UserDetailsWrapper background={palette.background.primary}>
          <DialogHeader borderColor={palette.background.border}>
            <H4 color={palette.text.primary}>User Details</H4>
            <CloseIcon
              sx={{
                cursor: "pointer",
                marginLeft: "auto",
                color: palette.text.secondary,
              }}
              onClick={handleClose}
            />
          </DialogHeader>
          <DialogBody>
            <AvatarNameWrapper>
              <Avatar
                alt={login}
                src={avatarUrl}
                sx={{ width: 82, height: 82 }}
              />
              <TextWrapper>
                <H4 color={palette.text.primary}>{login}</H4>
                {bio ? <P1 color={palette.text.secondary}>{bio}</P1> : null}
              </TextWrapper>
            </AvatarNameWrapper>
            <AccountDetails>
              <H7 color={palette.text.secondary}>Public repos</H7>
              <P2 color={palette.text.primary}>{publicRepos}</P2>
              <H7 color={palette.text.secondary}>Followers</H7>
              <P2 color={palette.text.primary}>{followers}</P2>
              <H7 color={palette.text.secondary}>Following</H7>
              <P2 color={palette.text.primary}>{following}</P2>
              <H7 color={palette.text.secondary}>Created at</H7>
              <P2 color={palette.text.primary}>{getFullDate(createdAt)}</P2>
            </AccountDetails>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                sx={{
                  height: "40px",
                  width: "80%",
                  marginTop: "16px",
                }}
                variant="outlined"
                endIcon={<OpenInNewIcon />}
                onClick={() => window.open(htmlUrl)}
              >
                Checkout
              </Button>
            </Box>
          </DialogBody>
        </UserDetailsWrapper>
      </Fade>
    </Modal>
  );
};

export default UserDetailsDialog;
