import { Body, Controller, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";


@Controller('upload')
@UseInterceptors(FileInterceptor('file'))
export class UploadController {

    @Post('upload-single-file')
    uploadSingleFile(@UploadedFile() file: Express.Multer.File, @Body() body) {
        console.log(file);
        return {
            message: "上传成功",
            filename: file.filename,
        }
    }


}