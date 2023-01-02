import React from "react";
import { Box, IconButton, Input, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import { InputBase } from "@mui/material";
import LightModeOutlined from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlined from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlined from "@mui/icons-material/SettingsOutlined";
import PersonOutlined from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { borderRadius } from "@mui/system";

const Topbar = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const colorMode = useContext(ColorModeContext);

	return (
		<Box display="flex" justifyContent="space-between" p={2}>
			{/* SearchBar */}
			<Box
				display="flex"
				backgroundColor={colors.primary[400]}
				borderRadius="3px"
			>
				<InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search"></InputBase>
				<IconButton type="button" sx={{ p: 1 }}>
					<SearchIcon></SearchIcon>
				</IconButton>
			</Box>

			{/* Icons */}
			<Box display="flex">
				<IconButton onClick={colorMode.toggleColorMode}>
					{theme.palette.mode === "dark" ? (
						<LightModeOutlined></LightModeOutlined>
					) : (
						<DarkModeOutlined></DarkModeOutlined>
					)}
				</IconButton>
				<IconButton>
					<NotificationsOutlined></NotificationsOutlined>
				</IconButton>
				<IconButton>
					<SettingsOutlined></SettingsOutlined>
				</IconButton>
				<IconButton>
					<PersonOutlined></PersonOutlined>
				</IconButton>
			</Box>
		</Box>
	);
};

export default Topbar;
