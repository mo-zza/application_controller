import { IsString } from 'class-validator'

export class ResponseInputDto {
    @IsString()
    readonly response: any
}

export class SuccessOutputDto {
    @IsString()
    readonly data: string
}

export class ErrorInputDto {
    @IsString()
    readonly error: string
    readonly description: string
}

export class ErrorOutputDto {
    @IsString()
    readonly code: string
    readonly description: string
}