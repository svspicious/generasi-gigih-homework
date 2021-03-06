import { Button, Flex } from "@chakra-ui/react";
import { FaSpotify } from "react-icons/fa";
import SearchBar from "../search-bar";
import Profile from "../profile";
import { useUser } from "../../lib/useUser";
import { useTracklist } from "../../lib/useTracklist";
const Navbar = () => {
  const { isAuthenticated, redirect } = useUser();
  const { isLoading, handleSearch } = useTracklist();
  const bgColor = "rgba(36, 36, 36, 0.5)";
  return (
    <Flex
      w="full"
      pos="fixed"
      top={0}
      px="1em"
      py="0.5em"
      zIndex="modal"
      borderBottom="1px solid rgb(54, 54, 54)"
      sx={{
        "@supports (backdrop-filter: blur(10px))": {
          backdropFilter: "blur(10px)",
          bgColor,
        },
        "@supports (-webkit-backdrop-filter: blur(10px))": {
          WebkitBackdropFilter: "blur(10px)",
          bgColor,
        },
        "@supports not (backdrop-filter: blur(10px))": {
          bgColor: "rgba(36, 36, 36, 0.9)",
        },
      }}
    >
      {isAuthenticated ? (
        <>
          <SearchBar isLoading={isLoading} handleSearch={handleSearch} />
          <Profile />
        </>
      ) : (
        <Button
          onClick={() => redirect()}
          leftIcon={<FaSpotify fontSize="20px" />}
          style={{ marginLeft: "auto" }}
        >
          Login With Spotify
        </Button>
      )}
    </Flex>
  );
};

export default Navbar;
