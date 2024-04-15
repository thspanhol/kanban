import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton, useColorMode } from '@chakra-ui/react';
import React from 'react';

function DarkModeIconButton({
    ...rest
}: React.ComponentPropsWithoutRef<typeof IconButton>) {
    const { colorMode, toggleColorMode } = useColorMode();
    
}

export default DarkModeIconButton;