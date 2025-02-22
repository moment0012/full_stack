import { Body, Controller, Post, UploadedFile, UploadedFiles, UseInterceptors } from "@nestjs/common";
import { FileInterceptor, FilesInterceptor } from "@nestjs/platform-express";


@Controller('upload')

export class UploadController {

    @Post('upload-single-file')
    @UseInterceptors(FileInterceptor('file'))
    uploadSingleFile(@UploadedFile() file: Express.Multer.File, @Body() body) {
        console.log(file);
        return {
            message: "上传成功",
            filename: file.filename,
        }
    }


    @Post('upload-multiple-files')
    @UseInterceptors(FilesInterceptor('files', 3))
    uplodaMultipleFiles(@UploadedFiles() files: Array<Express.Multer.File>, @Body() Body) {
        console.log(files)
        return {
            files
        }
    }


}