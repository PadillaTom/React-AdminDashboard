import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
	Sidebar as ProSideBar,
	Menu,
	useProSidebar,
	MenuItem,
} from "react-pro-sidebar";
import {
	Box,
	IconButton,
	Typography,
	useTheme,
	MenuOutlinedIcon,
	Icon,
} from "@mui/material";
import { MenuOutlined } from "@mui/icons-material";
import { tokens } from "../../theme";

const Sidebar = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const { collapseSidebar, collapsed } = useProSidebar();
	const [selected, setSelected] = useState("Dashboard");

	return (
		<Box
			sx={{
				"& .pro-sidebar-inner": {
					background: `${colors.primary[400]} !important`,
				},
				"& .pro-icon-wrapper": {
					backgroundColor: "transparent !important",
				},
				"& .pro-inner-item": {
					padding: "5px 35px 5px 20px !important",
				},
				"& .pro-inner-item:hover": {
					color: "#868dfb !important",
				},
				"& .pro-inner-item.active": {
					color: "#6870fa !important",
				},
			}}
		>
			<ProSideBar
				defaultCollapsed={true}
				style={{ height: "100%" }}
				backgroundColor={`${colors.primary[400]} !important`}
			>
				<Menu>
					{/* Logo & Menu Icon */}
					<MenuItem
						onClick={() => collapseSidebar()}
						icon={collapsed ? <MenuOutlined></MenuOutlined> : undefined}
						style={{
							margin: "10px 0 20px 0",
							color: colors.grey[100],
						}}
					>
						{!collapsed && (
							<Box
								display="flex"
								justifyContent="space-between"
								alignItems="center"
								ml="15px"
							>
								<Typography variant="h3" color={colors.grey[100]}>
									ADMINIS
								</Typography>
								<IconButton>
									<MenuOutlined></MenuOutlined>
								</IconButton>
							</Box>
						)}
					</MenuItem>

					{/* User Profile */}

					{!collapsed && (
						<Box mb="25px">
							<Box display="flex" justifyContent="center" alignItems="center">
								<img
									src={`../../assets/user.png`}
									alt="profile-user"
									width="100px"
									height="100px"
									style={{ cursor: "pointer", borderRadius: "50%" }}
								/>
							</Box>
							<Box textAlign="center">
								<Typography
									variant="h2"
									color={colors.grey[100]}
									fontWeight="bold"
									sx={{
										m: "10px 0 0 0",
									}}
								>
									Ed Roh
								</Typography>
								<Typography variant="h5" color={colors.greenAccent[500]}>
									VP Fancy Admin
								</Typography>
							</Box>
						</Box>
					)}
				</Menu>
			</ProSideBar>
		</Box>
	);
};

export default Sidebar;
