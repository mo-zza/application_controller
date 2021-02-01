import { IsString } from 'class-validator'

export class TestClass{
    @IsString()
    readonly test: string
}