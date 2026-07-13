import fs from "fs";
import path from "path";


export function saveSlip(
    buffer: Buffer,
    orderId: string
) {

    const folder =
        path.join(
            process.cwd(),
            "uploads/slips"
        );


    if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder, {
            recursive: true
        });
    }


    const fileName =
        `slip-${orderId}.jpg`;


    const filePath =
        path.join(folder, fileName);


    fs.writeFileSync(
        filePath,
        buffer
    );


    return `/uploads/slips/${fileName}`;
}