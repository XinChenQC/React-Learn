// Import necessary React and UI components
import React, { useState } from 'react';
import {
  Card,
  Typography,
  List,
  ListItem,
  Chip,
} from "@material-tailwind/react";

// Import icons from Heroicons
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";

// Define the Sidebar component
export function Sidebar() {
  // State to track whether the sidebar is expanded or not
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    // Card component that serves as the container for the sidebar
    <Card 
      className={`h-[calc(100vh-20rem)] shadow-xl transition-all duration-300 ease-in-out ml-4 ${
        isExpanded 
          ? 'w-64 ' // Expanded width and shadow
          : 'w-20 ' // Collapsed width and shadow
      }`} 
      style={{
        transitionProperty: 'width, box-shadow',
        transitionDelay: isExpanded ? '0s, 0s' : '0s, 300ms',
      }}
      // Expand sidebar on mouse enter, collapse on mouse leave
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Sidebar title, visible only when expanded */}
      <div className={`mb-2 p-4 overflow-hidden ${isExpanded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
        <Typography variant="h5" color="blue-gray">
          Sidebar
        </Typography>
      </div>

      {/* List of sidebar items */}
      <List>
        {[ 
          // Array of sidebar items with their respective icons and text
          { icon: PresentationChartBarIcon, text: "Dashboard" },
          { icon: ShoppingBagIcon, text: "E-Commerce" },
          { icon: InboxIcon, text: "Inbox", chip: "14" },
          { icon: UserCircleIcon, text: "Profile" },
          { icon: Cog6ToothIcon, text: "Settings" },
          { icon: PowerIcon, text: "Log Out" },
        ].map((item, index) => (
          // Render each sidebar item
          <ListItem 
            key={index} 
            className={`relative overflow-hidden transition-all duration-300 ${
              isExpanded ? 'w-full pl-12' : 'w-16'
            }`}
          >
            {/* Icon container */}
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <item.icon className="h-6 w-6" />
            </div>

            {/* Item text and chip, wrapped in a container */}
            <div className={`flex items-center justify-between transition-all duration-300 ${
              isExpanded ? 'opacity-100 w-full' : 'opacity-0 w-0'
            }`}>
              {/* Item text */}
              <span className="truncate flex-grow mr-2">{item.text}</span>

              {/* Chip (if available) */}
              {item.chip && (
                <Chip 
                  value={item.chip} 
                  size="sm" 
                  variant="ghost" 
                  color="blue-gray" 
                  className="rounded-full flex-shrink-0" 
                />
              )}
            </div>
          </ListItem>
        ))}
      </List>
    </Card>
  );
}

// Export the Sidebar component as default
export default Sidebar;
