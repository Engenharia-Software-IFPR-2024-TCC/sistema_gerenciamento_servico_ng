export class FileUtil {
    static base64ToFile(
        base64: string,
        fileName: string,
        mimeType: string,
    ): File {

        const base64Data = base64.split(";base64,").pop() || base64;

        const byteCharacters = atob(base64Data);
        const byteArrays: Uint8Array[] = [];

        for (let offset = 0; offset < byteCharacters.length; offset += 512) {

            const slice = byteCharacters.slice(offset, offset + 512);
            const byteNumbers = new Array(slice.length);

            for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }

        const file = new File(byteArrays, fileName, { type: mimeType });
        return file;
    }
}
