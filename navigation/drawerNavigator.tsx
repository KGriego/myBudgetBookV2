/* Library Imports */
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "react-navigation-drawer";

/* Component Imports */
import TransactionsScreen from "../pages/TransactionsHome";
import AccountManagementScreen from "../pages/AccountManagement";
import RecurringTransactionsScreen from "../pages/RecurringTransactions";
import CatergoryManagementScreen from "../pages/CategoryManagement";
import TemplatesScreen from "../pages/Templates";
import BudgetManagementScreen from "../pages/BudgetManagement";
import LastEntriesScreen from "../pages/LastEntries";
import DetailedSearchScreen from "../pages/DetailedSearch";
import UncategorizedScreen from "../pages/Uncategorized";
import CreateBackupScreen from "../pages/CreateBackup";
import RestoreBackupScreen from "../pages/RestoreBackup";
import ExportDataScreen from "../pages/ExportData";
import CSVImportScreen from "../pages/CSVImport";
import SettingsScreen from "../pages/Settings";
import HelpScreen from "../pages/Help";
import LastChangesScreen from "../pages/LastChanges";
import SupportScreen from "../pages/Support";

/* Custom Drawer Import */
import CustomDrawer from "../navigation/customDrawer";

const DrawerNavigator = createDrawerNavigator(
  {
    Transactions: {
      screen: TransactionsScreen,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => {
          return <Ionicons name={"md-home"} style={{ color: tintColor }} />;
        },
        drawerLabel: "Transactions"
      }
    },
    "Account Management": {
      screen: AccountManagementScreen,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => {
          return <Ionicons name={"md-home"} style={{ color: tintColor }} />;
        },
        drawerLabel: "Account Management"
      }
    },
    "Category Management": {
      screen: CatergoryManagementScreen,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => {
          return <Ionicons name={"md-home"} style={{ color: tintColor }} />;
        },
        drawerLabel: "Category Mangement"
      }
    },
    "Recurring Transactions": RecurringTransactionsScreen,
    Templates: TemplatesScreen,
    "Budget Management": BudgetManagementScreen,
    "Last Entries": LastEntriesScreen,
    "Detailed search": DetailedSearchScreen,
    Uncategorized: UncategorizedScreen,
    "Create Backup": CreateBackupScreen,
    "Restore Backup": RestoreBackupScreen,
    "Export Data": ExportDataScreen,
    "CSV Import": CSVImportScreen,
    Settings: SettingsScreen,
    Help: HelpScreen,
    "Last Changes": LastChangesScreen,
    Support: SupportScreen
  },
  {
    initialRouteName: "Transactions",
    contentComponent: CustomDrawer
  }
);

export default DrawerNavigator;
