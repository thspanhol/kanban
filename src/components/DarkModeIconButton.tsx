import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton, useColorMode } from '@chakra-ui/react';
import React from 'react';

function DarkModeIconButton({
    ...rest
}: React.ComponentPropsWithoutRef<typeof IconButton>) {
    const { colorMode, toggleColorMode } = useColorMode();

    const isDark = colorMode === 'dark';

    return (
        <IconButton />
    );
    
}

export default DarkModeIconButton;