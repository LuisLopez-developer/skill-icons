export const svgShortName: Record<string, string> = {
    js: 'javascript',
    ts: 'typescript',
    php: 'php',
    cs: 'csharp',
    jc: 'jetpackcompose',
    html: 'html5',
    kt: 'kotlin',
    net: 'dotnet',
    java: 'java',
    css: 'css',
    python: 'python',
    astro: 'astro',
    laravel: 'laravel',
    git: 'git',
    react: 'react',
    preact: 'preact',
    mysql: 'mysql',
    sqlserver: 'sqlserver',
    postgresql: 'postgresql',
    tailwind: 'tailwindcss',
    blazor: 'blazor',
};

export function mapShortNamesToFullNames(
    iconShortNames: string[],
    theme: string,
    icons: Record<string, string>  // Pasar icons como parámetro
    ): string[] {
    return iconShortNames.map(name => {
        if (name in svgShortName) {
        const fullName = svgShortName[name];
        return `${fullName}-${theme}` in icons ? `${fullName}-${theme}` : fullName;
        } else {
        return name;
        }
    });
}