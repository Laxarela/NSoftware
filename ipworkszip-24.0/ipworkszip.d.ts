
export declare interface Collection<E> {

}

export declare class WrappedList<OUT_T, IN_T> {
  constructor();
  constructor(list?: any, readOnly?: boolean);

  public add(element: OUT_T): boolean;
  public add(index: number, element: OUT_T): void;

  public insert(index: number, element: OUT_T): void;

  public get(index: number): OUT_T;

  public indexOf(o: any): number;
  public lastIndexOf(o: any): number;

  public remove(obj: any): boolean;
  public remove(index: number): OUT_T;

  public set(index: number, element: OUT_T): OUT_T;

  public clear(): void;
  public contains(o: any): boolean;
  public isEmpty(): boolean;

  public [Symbol.iterator](): Iterator<OUT_T>;

  public size(): number;

  public toArray(): OUT_T[];

}



export declare class WrappedMap<OUT_T, IN_T> extends Map<any, OUT_T> {
  public has(key: any): boolean;
  public set(key: any, value: OUT_T): this;
  public get size(): number;
  public keys(): IterableIterator<any>;

  public values(): IterableIterator<OUT_T>;

  public clear(): void;
  public containsKey(key: any): boolean;
  public containsValue(value: any): boolean;

  public get(key: any): OUT_T;
  public isEmpty(): boolean;
  public put(key: any, value: OUT_T): OUT_T;

  public remove(key: any): OUT_T



}

/// <reference types="node" />
import * as events from 'events';
type CContentType=any;
export declare class ContentType {
    private obj;
    constructor(obj: CContentType);
    constructor();
    unwrap(): CContentType;
    getIsOverride(): boolean;
    getMediaType(): string;
    getTarget(): string;
    clone(): any;
}
export declare class ContentTypeList extends WrappedList<ContentType, CContentType> {
    constructor(list: any, readOnly: boolean);
    protected_wrap(o: CContentType): ContentType;
    protected_unwrap(o: ContentType): CContentType;
    item(index: number): ContentType;
    addAll(c: Collection<ContentType>): boolean;
    addAll(index: number, c: Collection<ContentType>): boolean;
    addRange(c: Collection<ContentType>): void;
    size(): number;
    clone(): any;
}
type CJARFile=any;
export declare class JARFile {
    private obj;
    constructor(obj: CJARFile);
    constructor();
    constructor(decompressedName: string);
    constructor(compressedName: string, decompressedName: string);
    unwrap(): CJARFile;
    getCompressedDate(): number;
    setCompressedDate(compressedDate: number): void;
    getCompressedName(): string;
    setCompressedName(compressedName: string): void;
    getCompressedSize(): number;
    getDecompressedName(): string;
    setDecompressedName(decompressedName: string): void;
    getDecompressedSize(): number;
    getInputData(): string;
    getInputDataB(): Uint8Array;
    setInputData(inputData: Uint8Array | string): void;
    setInputData(inputData: Uint8Array, offset: number, length: number): void;
    clone(): any;
}
export declare class JARFileList extends WrappedList<JARFile, CJARFile> {
    constructor(list: any, readOnly: boolean);
    protected_wrap(o: CJARFile): JARFile;
    protected_unwrap(o: JARFile): CJARFile;
    item(index: number): JARFile;
    addAll(c: Collection<JARFile>): boolean;
    addAll(index: number, c: Collection<JARFile>): boolean;
    addRange(c: Collection<JARFile>): void;
    size(): number;
    clone(): any;
}
type CPackageProperty=any;
export declare class PackageProperty {
    private obj;
    constructor(obj: CPackageProperty);
    constructor();
    unwrap(): CPackageProperty;
    getDataType(): string;
    getName(): string;
    getNamespace(): string;
    getPropId(): string;
    getPropSet(): string;
    getValue(): string;
    clone(): any;
}
export declare class PackagePropertyList extends WrappedList<PackageProperty, CPackageProperty> {
    constructor(list: any, readOnly: boolean);
    protected_wrap(o: CPackageProperty): PackageProperty;
    protected_unwrap(o: PackageProperty): CPackageProperty;
    item(index: number): PackageProperty;
    addAll(c: Collection<PackageProperty>): boolean;
    addAll(index: number, c: Collection<PackageProperty>): boolean;
    addRange(c: Collection<PackageProperty>): void;
    size(): number;
    clone(): any;
}
type CRelationship=any;
export declare class Relationship {
    private obj;
    constructor(obj: CRelationship);
    constructor();
    unwrap(): CRelationship;
    getContentType(): string;
    getId(): string;
    getPartName(): string;
    getTypeURI(): string;
    clone(): any;
}
export declare class RelationshipList extends WrappedList<Relationship, CRelationship> {
    constructor(list: any, readOnly: boolean);
    protected_wrap(o: CRelationship): Relationship;
    protected_unwrap(o: Relationship): CRelationship;
    item(index: number): Relationship;
    addAll(c: Collection<Relationship>): boolean;
    addAll(index: number, c: Collection<Relationship>): boolean;
    addRange(c: Collection<Relationship>): void;
    size(): number;
    clone(): any;
}
type CSevenZipFile=any;
export declare class SevenZipFile {
    private obj;
    constructor(obj: CSevenZipFile);
    constructor();
    constructor(decompressedName: string);
    constructor(compressedName: string, decompressedName: string);
    unwrap(): CSevenZipFile;
    getAttributes(): number;
    setAttributes(attributes: number): void;
    getCompressedDate(): number;
    setCompressedDate(compressedDate: number): void;
    getCompressedName(): string;
    setCompressedName(compressedName: string): void;
    getCompressedSize(): number;
    getCompressionLevel(): number;
    setCompressionLevel(compressionLevel: number): void;
    getCompressionMethod(): SevenZipCompressionMethods;
    setCompressionMethod(compressionMethod: SevenZipCompressionMethods): void;
    getCRC(): number;
    getDecompressedName(): string;
    setDecompressedName(decompressedName: string): void;
    getDecompressedSize(): number;
    getInputData(): string;
    getInputDataB(): Uint8Array;
    setInputData(inputData: Uint8Array | string): void;
    setInputData(inputData: Uint8Array, offset: number, length: number): void;
    clone(): any;
}
export declare class SevenZipFileList extends WrappedList<SevenZipFile, CSevenZipFile> {
    constructor(list: any, readOnly: boolean);
    protected_wrap(o: CSevenZipFile): SevenZipFile;
    protected_unwrap(o: SevenZipFile): CSevenZipFile;
    item(index: number): SevenZipFile;
    addAll(c: Collection<SevenZipFile>): boolean;
    addAll(index: number, c: Collection<SevenZipFile>): boolean;
    addRange(c: Collection<SevenZipFile>): void;
    size(): number;
    clone(): any;
}
type CTARFile=any;
export declare class TARFile {
    private obj;
    constructor(obj: CTARFile);
    constructor();
    constructor(decompressedName: string);
    constructor(compressedName: string, decompressedName: string);
    unwrap(): CTARFile;
    getCompressedDate(): number;
    setCompressedDate(compressedDate: number): void;
    getCompressedName(): string;
    setCompressedName(compressedName: string): void;
    getCompressedSize(): number;
    getDecompressedName(): string;
    setDecompressedName(decompressedName: string): void;
    getDecompressedSize(): number;
    getHardLinkName(): string;
    setHardLinkName(hardLinkName: string): void;
    getInputData(): string;
    getInputDataB(): Uint8Array;
    setInputData(inputData: Uint8Array | string): void;
    setInputData(inputData: Uint8Array, offset: number, length: number): void;
    getPermissions(): string;
    setPermissions(permissions: string): void;
    getSymLinkName(): string;
    setSymLinkName(symLinkName: string): void;
    clone(): any;
}
export declare class TARFileList extends WrappedList<TARFile, CTARFile> {
    constructor(list: any, readOnly: boolean);
    protected_wrap(o: CTARFile): TARFile;
    protected_unwrap(o: TARFile): CTARFile;
    item(index: number): TARFile;
    addAll(c: Collection<TARFile>): boolean;
    addAll(index: number, c: Collection<TARFile>): boolean;
    addRange(c: Collection<TARFile>): void;
    size(): number;
    clone(): any;
}
type CXMLAttribute=any;
export declare class XMLAttribute {
    private obj;
    constructor(obj: CXMLAttribute);
    constructor();
    unwrap(): CXMLAttribute;
    getName(): string;
    getNamespace(): string;
    getPrefix(): string;
    getValue(): string;
    clone(): any;
}
export declare class XMLAttributeList extends WrappedList<XMLAttribute, CXMLAttribute> {
    constructor(list: any, readOnly: boolean);
    protected_wrap(o: CXMLAttribute): XMLAttribute;
    protected_unwrap(o: XMLAttribute): CXMLAttribute;
    item(index: number): XMLAttribute;
    addAll(c: Collection<XMLAttribute>): boolean;
    addAll(index: number, c: Collection<XMLAttribute>): boolean;
    addRange(c: Collection<XMLAttribute>): void;
    size(): number;
    clone(): any;
}
type CXMLElement=any;
export declare class XMLElement {
    private obj;
    constructor(obj: CXMLElement);
    constructor();
    unwrap(): CXMLElement;
    getName(): string;
    getNamespace(): string;
    getPrefix(): string;
    getXText(): string;
    clone(): any;
}
export declare class XMLElementList extends WrappedList<XMLElement, CXMLElement> {
    constructor(list: any, readOnly: boolean);
    protected_wrap(o: CXMLElement): XMLElement;
    protected_unwrap(o: XMLElement): CXMLElement;
    item(index: number): XMLElement;
    addAll(c: Collection<XMLElement>): boolean;
    addAll(index: number, c: Collection<XMLElement>): boolean;
    addRange(c: Collection<XMLElement>): void;
    size(): number;
    clone(): any;
}
type CXMLNamespace=any;
export declare class XMLNamespace {
    private obj;
    constructor(obj: CXMLNamespace);
    constructor();
    constructor(URI: string, prefix: string);
    unwrap(): CXMLNamespace;
    getPrefix(): string;
    setPrefix(prefix: string): void;
    getURI(): string;
    setURI(URI: string): void;
    clone(): any;
}
export declare class XMLNamespaceList extends WrappedList<XMLNamespace, CXMLNamespace> {
    constructor(list: any, readOnly: boolean);
    protected_wrap(o: CXMLNamespace): XMLNamespace;
    protected_unwrap(o: XMLNamespace): CXMLNamespace;
    item(index: number): XMLNamespace;
    addAll(c: Collection<XMLNamespace>): boolean;
    addAll(index: number, c: Collection<XMLNamespace>): boolean;
    addRange(c: Collection<XMLNamespace>): void;
    size(): number;
    clone(): any;
}
type CZIPFile=any;
export declare enum EncryptionAlgorithms {
    eaDefault = 0,
    eaAESWeak = 1,
    eaAESStrong = 2,
    eaAESMaximum = 3
}
export declare class ZIPFile {
    private obj;
    constructor(obj: CZIPFile);
    constructor();
    constructor(decompressedName: string);
    constructor(compressedName: string, decompressedName: string);
    unwrap(): CZIPFile;
    getAttributes(): number;
    setAttributes(attributes: number): void;
    getComment(): string;
    setComment(comment: string): void;
    getCompressedDate(): number;
    setCompressedDate(compressedDate: number): void;
    getCompressedName(): string;
    setCompressedName(compressedName: string): void;
    getCompressedSize(): number;
    getCompressionLevel(): number;
    setCompressionLevel(compressionLevel: number): void;
    getCRC(): number;
    getDecompressedName(): string;
    setDecompressedName(decompressedName: string): void;
    getDecompressedSize(): number;
    getEncryptionAlgorithm(): EncryptionAlgorithms;
    setEncryptionAlgorithm(encryptionAlgorithm: EncryptionAlgorithms): void;
    getHash(): string;
    getInputData(): string;
    getInputDataB(): Uint8Array;
    setInputData(inputData: Uint8Array | string): void;
    setInputData(inputData: Uint8Array, offset: number, length: number): void;
    getPassword(): string;
    setPassword(password: string): void;
    getPasswordRequired(): boolean;
    clone(): any;
}
export declare class ZIPFileList extends WrappedList<ZIPFile, CZIPFile> {
    constructor(list: any, readOnly: boolean);
    protected_wrap(o: CZIPFile): ZIPFile;
    protected_unwrap(o: ZIPFile): CZIPFile;
    item(index: number): ZIPFile;
    addAll(c: Collection<ZIPFile>): boolean;
    addAll(index: number, c: Collection<ZIPFile>): boolean;
    addRange(c: Collection<ZIPFile>): void;
    size(): number;
    clone(): any;
}
/************************************************** ENUMERATED TYPES **************************************************/
/**
 * The Bzip2 component implements a bzip2 compressor and decompressor.  It is compliant with
bzip2 specification.
 */
export declare class bzip2 extends events.EventEmitter {
    private obj;
    constructor();
    about(): string;





    on(event: "BeginFile", listener: (e: {
        readonly index: number;
        skip: boolean;
    }) => void): this;
    on(event: "EndFile", listener: (e: {
        readonly index: number;
    }) => void): this;
    on(event: "Error", listener: (e: {
        readonly description: string;
        readonly errorCode: number;
        readonly index: number;
        readonly filename: string;
        ignore: boolean;
    }) => void): this;
    on(event: "Overwrite", listener: (e: {
        filename: string;
        overwrite: boolean;
    }) => void): this;
    on(event: "Progress", listener: (e: {
        readonly data: string;
        readonly dataB: Uint8Array;
        readonly filename: string;
        readonly bytesProcessed: number;
        readonly percentProcessed: number;
    }) => void): this;
    once(event: "BeginFile", listener: (e: {
        readonly index: number;
        skip: boolean;
    }) => void): this;
    once(event: "EndFile", listener: (e: {
        readonly index: number;
    }) => void): this;
    once(event: "Error", listener: (e: {
        readonly description: string;
        readonly errorCode: number;
        readonly index: number;
        readonly filename: string;
        ignore: boolean;
    }) => void): this;
    once(event: "Overwrite", listener: (e: {
        filename: string;
        overwrite: boolean;
    }) => void): this;
    once(event: "Progress", listener: (e: {
        readonly data: string;
        readonly dataB: Uint8Array;
        readonly filename: string;
        readonly bytesProcessed: number;
        readonly percentProcessed: number;
    }) => void): this;
    addListener(event: "BeginFile", listener: (e: {
        readonly index: number;
        skip: boolean;
    }) => void): this;
    addListener(event: "EndFile", listener: (e: {
        readonly index: number;
    }) => void): this;
    addListener(event: "Error", listener: (e: {
        readonly description: string;
        readonly errorCode: number;
        readonly index: number;
        readonly filename: string;
        ignore: boolean;
    }) => void): this;
    addListener(event: "Overwrite", listener: (e: {
        filename: string;
        overwrite: boolean;
    }) => void): this;
    addListener(event: "Progress", listener: (e: {
        readonly data: string;
        readonly dataB: Uint8Array;
        readonly filename: string;
        readonly bytesProcessed: number;
        readonly percentProcessed: number;
    }) => void): this;
    prependListener(event: "BeginFile", listener: (e: {
        readonly index: number;
        skip: boolean;
    }) => void): this;
    prependListener(event: "EndFile", listener: (e: {
        readonly index: number;
    }) => void): this;
    prependListener(event: "Error", listener: (e: {
        readonly description: string;
        readonly errorCode: number;
        readonly index: number;
        readonly filename: string;
        ignore: boolean;
    }) => void): this;
    prependListener(event: "Overwrite", listener: (e: {
        filename: string;
        overwrite: boolean;
    }) => void): this;
    prependListener(event: "Progress", listener: (e: {
        readonly data: string;
        readonly dataB: Uint8Array;
        readonly filename: string;
        readonly bytesProcessed: number;
        readonly percentProcessed: number;
    }) => void): this;
    prependOnceListener(event: "BeginFile", listener: (e: {
        readonly index: number;
        skip: boolean;
    }) => void): this;
    prependOnceListener(event: "EndFile", listener: (e: {
        readonly index: number;
    }) => void): this;
    prependOnceListener(event: "Error", listener: (e: {
        readonly description: string;
        readonly errorCode: number;
        readonly index: number;
        readonly filename: string;
        ignore: boolean;
    }) => void): this;
    prependOnceListener(event: "Overwrite", listener: (e: {
        filename: string;
        overwrite: boolean;
    }) => void): this;
    prependOnceListener(event: "Progress", listener: (e: {
        readonly data: string;
        readonly dataB: Uint8Array;
        readonly filename: string;
        readonly bytesProcessed: number;
        readonly percentProcessed: number;
    }) => void): this;
    /**
     * Aborts the current operation.
     */
    abort(): Promise<void>;
    /**
     * Adds specified file to an existing archive.
     */
    append(): Promise<void>;
    /**
     * Creates the compressed bzip2 archive.
     */
    compress(): Promise<void>;
    /**
     * Sets or retrieves a configuration setting.
     */
    config(configurationString: string): Promise<string>;
    /**
     * Extracts the compressed file from the bzip2 archive.
     */
    extract(): Promise<void>;
    /**
     * Extracts all files from the compressed archive.
     */
    extractAll(): Promise<void>;
    /**
     * Resets the class.
     */
    reset(): Promise<void>;
    /**
     * Scans the compressed archive.
     */
    scan(): Promise<void>;
    /**
     * The name of the zip, gzip, tar, or jar archive.
     */
    getArchiveFile(): string;
    /**
     * The name of the zip, gzip, tar, or jar archive.
     */
    setArchiveFile(archiveFile: string): void;
    /**
     * (Decompression only) The bzip2 file contents as a byte array.
     */
    setBzip2Data(data: Uint8Array | string): void;
    setBzip2Data(data: Uint8Array, offset: number, length: number): void;
    /**
     * A base path to decompress to.
     */
    getExtractToPath(): string;
    /**
     * A base path to decompress to.
     */
    setExtractToPath(extractToPath: string): void;
    /**
     * File name to decompress to, or compress from.
     */
    getFileDecompressedName(): string;
    /**
     * File name to decompress to, or compress from.
     */
    setFileDecompressedName(fileDecompressedName: string): void;
    /**
     * The data of the file to be compressed.
     */
    getFileInputData(): string;
    /**
     * The data of the file to be compressed.
     */
    getFileInputDataB(): Uint8Array;
    /**
     * The data of the file to be compressed.
     */
    setFileInputData(data: Uint8Array | string): void;
    setFileInputData(data: Uint8Array, offset: number, length: number): void;
    /**
     * Shows whether or not there is more data in the bzip2 archive.
     */
    isHasMoreData(): boolean;
}
/************************************************** ENUMERATED TYPES **************************************************/
export declare enum GzipCompressionMethods {
    cmgDeflate = 0,
    cmgLZCCompress = 1
}
/**
 * The Gzip component implements a gzip compressor and decompressor.  It is compliant with
RFC 1952 and compatible with the UNIX gzip and gunzip utilities.
 */
export declare class gzip extends events.EventEmitter {
    private obj;
    constructor();
    about(): string;





    on(event: "BeginFile", listener: (e: {
        readonly index: number;
        skip: boolean;
    }) => void): this;
    on(event: "EndFile", listener: (e: {
        readonly index: number;
    }) => void): this;
    on(event: "Error", listener: (e: {
        readonly description: string;
        readonly errorCode: number;
        readonly index: number;
        readonly filename: string;
        ignore: boolean;
    }) => void): this;
    on(event: "Overwrite", listener: (e: {
        filename: string;
        overwrite: boolean;
    }) => void): this;
    on(event: "Progress", listener: (e: {
        readonly data: string;
        readonly dataB: Uint8Array;
        readonly filename: string;
        readonly bytesProcessed: number;
        readonly percentProcessed: number;
    }) => void): this;
    once(event: "BeginFile", listener: (e: {
        readonly index: number;
        skip: boolean;
    }) => void): this;
    once(event: "EndFile", listener: (e: {
        readonly index: number;
    }) => void): this;
    once(event: "Error", listener: (e: {
        readonly description: string;
        readonly errorCode: number;
        readonly index: number;
        readonly filename: string;
        ignore: boolean;
    }) => void): this;
    once(event: "Overwrite", listener: (e: {
        filename: string;
        overwrite: boolean;
    }) => void): this;
    once(event: "Progress", listener: (e: {
        readonly data: string;
        readonly dataB: Uint8Array;
        readonly filename: string;
        readonly bytesProcessed: number;
        readonly percentProcessed: number;
    }) => void): this;
    addListener(event: "BeginFile", listener: (e: {
        readonly index: number;
        skip: boolean;
    }) => void): this;
    addListener(event: "EndFile", listener: (e: {
        readonly index: number;
    }) => void): this;
    addListener(event: "Error", listener: (e: {
        readonly description: string;
        readonly errorCode: number;
        readonly index: number;
        readonly filename: string;
        ignore: boolean;
    }) => void): this;
    addListener(event: "Overwrite", listener: (e: {
        filename: string;
        overwrite: boolean;
    }) => void): this;
    addListener(event: "Progress", listener: (e: {
        readonly data: string;
        readonly dataB: Uint8Array;
        readonly filename: string;
        readonly bytesProcessed: number;
        readonly percentProcessed: number;
    }) => void): this;
    prependListener(event: "BeginFile", listener: (e: {
        readonly index: number;
        skip: boolean;
    }) => void): this;
    prependListener(event: "EndFile", listener: (e: {
        readonly index: number;
    }) => void): this;
    prependListener(event: "Error", listener: (e: {
        readonly description: string;
        readonly errorCode: number;
        readonly index: number;
        readonly filename: string;
        ignore: boolean;
    }) => void): this;
    prependListener(event: "Overwrite", listener: (e: {
        filename: string;
        overwrite: boolean;
    }) => void): this;
    prependListener(event: "Progress", listener: (e: {
        readonly data: string;
        readonly dataB: Uint8Array;
        readonly filename: string;
        readonly bytesProcessed: number;
        readonly percentProcessed: number;
    }) => void): this;
    prependOnceListener(event: "BeginFile", listener: (e: {
        readonly index: number;
        skip: boolean;
    }) => void): this;
    prependOnceListener(event: "EndFile", listener: (e: {
        readonly index: number;
    }) => void): this;
    prependOnceListener(event: "Error", listener: (e: {
        readonly description: string;
        readonly errorCode: number;
        readonly index: number;
        readonly filename: string;
        ignore: boolean;
    }) => void): this;
    prependOnceListener(event: "Overwrite", listener: (e: {
        filename: string;
        overwrite: boolean;
    }) => void): this;
    prependOnceListener(event: "Progress", listener: (e: {
        readonly data: string;
        readonly dataB: Uint8Array;
        readonly filename: string;
        readonly bytesProcessed: number;
        readonly percentProcessed: number;
    }) => void): this;
    /**
     * Aborts the current operation.
     */
    abort(): Promise<void>;
    /**
     * Adds specified file to an existing archive.
     */
    append(): Promise<void>;
    /**
     * Creates the compressed gzip archive.
     */
    compress(): Promise<void>;
    /**
     * Sets or retrieves a configuration setting.
     */
    config(configurationString: string): Promise<string>;
    /**
     * Extracts the compressed file from the gzip archive.
     */
    extract(): Promise<void>;
    /**
     * Extracts all files from the compressed archive.
     */
    extractAll(): Promise<void>;
    /**
     * Resets the class.
     */
    reset(): Promise<void>;
    /**
     * Scans the compressed archive.
     */
    scan(): Promise<void>;
    /**
     * The name of the zip, gzip, tar, or jar archive.
     */
    getArchiveFile(): string;
    /**
     * The name of the zip, gzip, tar, or jar archive.
     */
    setArchiveFile(archiveFile: string): void;
    /**
     * The compression level to use.
     */
    getCompressionLevel(): number;
    /**
     * The compression level to use.
     */
    setCompressionLevel(compressionLevel: number): void;
    /**
     * The compression method for the class to use.
     */
    getCompressionMethod(): GzipCompressionMethods;
    /**
     * The compression method for the class to use.
     */
    setCompressionMethod(compressionMethod: GzipCompressionMethods): void;
    /**
     * A base path to decompress to.
     */
    getExtractToPath(): string;
    /**
     * A base path to decompress to.
     */
    setExtractToPath(extractToPath: string): void;
    /**
     * The date and time of the compressed file, as stored within the gzip archive.
     */
    getFileCompressedDate(): number;
    /**
     * Filename, as stored inside of the archive.
     */
    getFileCompressedName(): string;
    /**
     * Filename, as stored inside of the archive.
     */
    setFileCompressedName(fileCompressedName: string): void;
    /**
     * File name to decompress to, or compress from.
     */
    getFileDecompressedName(): string;
    /**
     * File name to decompress to, or compress from.
     */
    setFileDecompressedName(fileDecompressedName: string): void;
    /**
     * Gets the size of the file, as decompressed outside the archive.
     */
    getFileDecompressedSize(): number;
    /**
     * The data of the file to be compressed.
     */
    getFileInputData(): string;
    /**
     * The data of the file to be compressed.
     */
    getFileInputDataB(): Uint8Array;
    /**
     * The data of the file to be compressed.
     */
    setFileInputData(data: Uint8Array | string): void;
    setFileInputData(data: Uint8Array, offset: number, length: number): void;
    /**
     * (Decompression only) The gzip file contents as a byte array.
     */
    setGzipData(data: Uint8Array | string): void;
    setGzipData(data: Uint8Array, offset: number, length: number): void;
    /**
     * Shows whether or not there is more data in the gzip archive.
     */
    isHasMoreData(): boolean;
}
/************************************************** ENUMERATED TYPES **************************************************/
/**
 * The Jar component may be used to create or decompress Java archives.
 */
export declare class jar extends events.EventEmitter {
    private obj;
    constructor();
    about(): string;





    on(event: "BeginFile", listener: (e: {
        readonly index: number;
        skip: boolean;
    }) => void): this;
    on(event: "EndFile", listener: (e: {
        readonly index: number;
    }) => void): this;
    on(event: "Error", listener: (e: {
        readonly description: string;
        readonly errorCode: number;
        readonly index: number;
        readonly filename: string;
        ignore: boolean;
    }) => void): this;
    on(event: "Overwrite", listener: (e: {
        filename: string;
        overwrite: boolean;
    }) => void): this;
    on(event: "Progress", listener: (e: {
        readonly data: string;
        readonly dataB: Uint8Array;
        readonly filename: string;
        readonly bytesProcessed: number;
        readonly percentProcessed: number;
    }) => void): this;
    once(event: "BeginFile", listener: (e: {
        readonly index: number;
        skip: boolean;
    }) => void): this;
    once(event: "EndFile", listener: (e: {
        readonly index: number;
    }) => void): this;
    once(event: "Error", listener: (e: {
        readonly description: string;
        readonly errorCode: number;
        readonly index: number;
        readonly filename: string;
        ignore: boolean;
    }) => void): this;
    once(event: "Overwrite", listener: (e: {
        filename: string;
        overwrite: boolean;
    }) => void): this;
    once(event: "Progress", listener: (e: {
        readonly data: string;
        readonly dataB: Uint8Array;
        readonly filename: string;
        readonly bytesProcessed: number;
        readonly percentProcessed: number;
    }) => void): this;
    addListener(event: "BeginFile", listener: (e: {
        readonly index: number;
        skip: boolean;
    }) => void): this;
    addListener(event: "EndFile", listener: (e: {
        readonly index: number;
    }) => void): this;
    addListener(event: "Error", listener: (e: {
        readonly description: string;
        readonly errorCode: number;
        readonly index: number;
        readonly filename: string;
        ignore: boolean;
    }) => void): this;
    addListener(event: "Overwrite", listener: (e: {
        filename: string;
        overwrite: boolean;
    }) => void): this;
    addListener(event: "Progress", listener: (e: {
        readonly data: string;
        readonly dataB: Uint8Array;
        readonly filename: string;
        readonly bytesProcessed: number;
        readonly percentProcessed: number;
    }) => void): this;
    prependListener(event: "BeginFile", listener: (e: {
        readonly index: number;
        skip: boolean;
    }) => void): this;
    prependListener(event: "EndFile", listener: (e: {
        readonly index: number;
    }) => void): this;
    prependListener(event: "Error", listener: (e: {
        readonly description: string;
        readonly errorCode: number;
        readonly index: number;
        readonly filename: string;
        ignore: boolean;
    }) => void): this;
    prependListener(event: "Overwrite", listener: (e: {
        filename: string;
        overwrite: boolean;
    }) => void): this;
    prependListener(event: "Progress", listener: (e: {
        readonly data: string;
        readonly dataB: Uint8Array;
        readonly filename: string;
        readonly bytesProcessed: number;
        readonly percentProcessed: number;
    }) => void): this;
    prependOnceListener(event: "BeginFile", listener: (e: {
        readonly index: number;
        skip: boolean;
    }) => void): this;
    prependOnceListener(event: "EndFile", listener: (e: {
        readonly index: number;
    }) => void): this;
    prependOnceListener(event: "Error", listener: (e: {
        readonly description: string;
        readonly errorCode: number;
        readonly index: number;
        readonly filename: string;
        ignore: boolean;
    }) => void): this;
    prependOnceListener(event: "Overwrite", listener: (e: {
        filename: string;
        overwrite: boolean;
    }) => void): this;
    prependOnceListener(event: "Progress", listener: (e: {
        readonly data: string;
        readonly dataB: Uint8Array;
        readonly filename: string;
        readonly bytesProcessed: number;
        readonly percentProcessed: number;
    }) => void): this;
    /**
     * Aborts the current operation.
     */
    abort(): Promise<void>;
    /**
     * Adds specified files to an existing archive.
     */
    appendFiles(): Promise<void>;
    /**
     * Creates the compressed archive.
     */
    compress(): Promise<void>;
    /**
     * Sets or retrieves a configuration setting.
     */
    config(configurationString: string): Promise<string>;
    /**
     * Deletes one or more files from an existing archive.
     */
    delete(fileNames: string): Promise<void>;
    /**
     * Extracts a single file, directory, or group of files, from the archive.
     */
    extract(fileNames: string): Promise<void>;
    /**
     * Extracts all files from the compressed archive.
     */
    extractAll(): Promise<void>;
    /**
     * Specifies that the indicated files should be added to the archive.
     */
    includeFiles(fileNames: string): Promise<void>;
    /**
     * Resets the class.
     */
    reset(): Promise<void>;
    /**
     * Scans the compressed archive.
     */
    scan(): Promise<void>;
    /**
     * The name of the zip, gzip, tar, or jar archive.
     */
    getArchiveFile(): string;
    /**
     * The name of the zip, gzip, tar, or jar archive.
     */
    setArchiveFile(archiveFile: string): void;
    /**
     * The compression level to use.
     */
    getCompressionLevel(): number;
    /**
     * The compression level to use.
     */
    setCompressionLevel(compressionLevel: number): void;
    /**
     * A list of files to exclude.
     */
    getExcludedFiles(): string;
    /**
     * A list of files to exclude.
     */
    setExcludedFiles(excludedFiles: string): void;
    /**
     * A base path to decompress to.
     */
    getExtractToPath(): string;
    /**
     * A base path to decompress to.
     */
    setExtractToPath(extractToPath: string): void;
    getFiles(): JARFileList;
    /**
     * (Decompression only) The jar file contents as a byte array.
     */
    setJarData(data: Uint8Array | string): void;
    setJarData(data: Uint8Array, offset: number, length: number): void;
    /**
     * The name of the manifest file.
     */
    getManifestFile(): string;
    /**
     * The name of the manifest file.
     */
    setManifestFile(manifestFile: string): void;
    /**
     * Whether or not to overwrite files.
     */
    isOverwriteFiles(): boolean;
    /**
     * Whether or not to overwrite files.
     */
    setOverwriteFiles(overwriteFiles: boolean): void;
    /**
     * Whether or not to recurse into subdirectories.
     */
    isRecurseSubdirectories(): boolean;
    /**
     * Whether or not to recurse into subdirectories.
     */
    setRecurseSubdirectories(recurseSubdirectories: boolean): void;
}
/************************************************** ENUMERATED TYPES **************************************************/
/**
 * The OfficeDoc component implements support for the Open XML Packaging Format used in Office 2007 documents.
 */
export declare class officedoc extends events.EventEmitter {
    private obj;
    constructor();
    about(): string;
















    on(event: "BeginFile", listener: (e: {
        readonly index: number;
        skip: boolean;
    }) => void): this;
    on(event: "Characters", listener: (e: {
        readonly text: string;
    }) => void): this;
    on(event: "Comment", listener: (e: {
        readonly text: string;
    }) => void): this;
    on(event: "EndElement", listener: (e: {
        readonly namespace: string;
        readonly element: string;
        readonly QName: string;
        readonly isEmpty: boolean;
    }) => void): this;
    on(event: "EndFile", listener: (e: {
        readonly index: number;
    }) => void): this;
    on(event: "EndPrefixMapping", listener: (e: {
        readonly prefix: string;
    }) => void): this;
    on(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "EvalEntity", listener: (e: {
        readonly entity: string;
        value: string;
    }) => void): this;
    on(event: "IgnorableWhitespace", listener: (e: {
        readonly text: string;
    }) => void): this;
    on(event: "Meta", listener: (e: {
        readonly text: string;
    }) => void): this;
    on(event: "Overwrite", listener: (e: {
        filename: string;
        overwrite: boolean;
    }) => void): this;
    on(event: "PI", listener: (e: {
        readonly text: string;
    }) => void): this;
    on(event: "Progress", listener: (e: {
        readonly data: string;
        readonly dataB: Uint8Array;
        readonly filename: string;
        readonly bytesProcessed: number;
        readonly percentProcessed: number;
    }) => void): this;
    on(event: "SpecialSection", listener: (e: {
        readonly sectionId: string;
        readonly text: string;
    }) => void): this;
    on(event: "StartElement", listener: (e: {
        readonly namespace: string;
        readonly element: string;
        readonly QName: string;
        readonly isEmpty: boolean;
    }) => void): this;
    on(event: "StartPrefixMapping", listener: (e: {
        readonly prefix: string;
        readonly URI: string;
    }) => void): this;
    once(event: "BeginFile", listener: (e: {
        readonly index: number;
        skip: boolean;
    }) => void): this;
    once(event: "Characters", listener: (e: {
        readonly text: string;
    }) => void): this;
    once(event: "Comment", listener: (e: {
        readonly text: string;
    }) => void): this;
    once(event: "EndElement", listener: (e: {
        readonly namespace: string;
        readonly element: string;
        readonly QName: string;
        readonly isEmpty: boolean;
    }) => void): this;
    once(event: "EndFile", listener: (e: {
        readonly index: number;
    }) => void): this;
    once(event: "EndPrefixMapping", listener: (e: {
        readonly prefix: string;
    }) => void): this;
    once(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "EvalEntity", listener: (e: {
        readonly entity: string;
        value: string;
    }) => void): this;
    once(event: "IgnorableWhitespace", listener: (e: {
        readonly text: string;
    }) => void): this;
    once(event: "Meta", listener: (e: {
        readonly text: string;
    }) => void): this;
    once(event: "Overwrite", listener: (e: {
        filename: string;
        overwrite: boolean;
    }) => void): this;
    once(event: "PI", listener: (e: {
        readonly text: string;
    }) => void): this;
    once(event: "Progress", listener: (e: {
        readonly data: string;
        readonly dataB: Uint8Array;
        readonly filename: string;
        readonly bytesProcessed: number;
        readonly percentProcessed: number;
    }) => void): this;
    once(event: "SpecialSection", listener: (e: {
        readonly sectionId: string;
        readonly text: string;
    }) => void): this;
    once(event: "StartElement", listener: (e: {
        readonly namespace: string;
        readonly element: string;
        readonly QName: string;
        readonly isEmpty: boolean;
    }) => void): this;
    once(event: "StartPrefixMapping", listener: (e: {
        readonly prefix: string;
        readonly URI: string;
    }) => void): this;
    addListener(event: "BeginFile", listener: (e: {
        readonly index: number;
        skip: boolean;
    }) => void): this;
    addListener(event: "Characters", listener: (e: {
        readonly text: string;
    }) => void): this;
    addListener(event: "Comment", listener: (e: {
        readonly text: string;
    }) => void): this;
    addListener(event: "EndElement", listener: (e: {
        readonly namespace: string;
        readonly element: string;
        readonly QName: string;
        readonly isEmpty: boolean;
    }) => void): this;
    addListener(event: "EndFile", listener: (e: {
        readonly index: number;
    }) => void): this;
    addListener(event: "EndPrefixMapping", listener: (e: {
        readonly prefix: string;
    }) => void): this;
    addListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "EvalEntity", listener: (e: {
        readonly entity: string;
        value: string;
    }) => void): this;
    addListener(event: "IgnorableWhitespace", listener: (e: {
        readonly text: string;
    }) => void): this;
    addListener(event: "Meta", listener: (e: {
        readonly text: string;
    }) => void): this;
    addListener(event: "Overwrite", listener: (e: {
        filename: string;
        overwrite: boolean;
    }) => void): this;
    addListener(event: "PI", listener: (e: {
        readonly text: string;
    }) => void): this;
    addListener(event: "Progress", listener: (e: {
        readonly data: string;
        readonly dataB: Uint8Array;
        readonly filename: string;
        readonly bytesProcessed: number;
        readonly percentProcessed: number;
    }) => void): this;
    addListener(event: "SpecialSection", listener: (e: {
        readonly sectionId: string;
        readonly text: string;
    }) => void): this;
    addListener(event: "StartElement", listener: (e: {
        readonly namespace: string;
        readonly element: string;
        readonly QName: string;
        readonly isEmpty: boolean;
    }) => void): this;
    addListener(event: "StartPrefixMapping", listener: (e: {
        readonly prefix: string;
        readonly URI: string;
    }) => void): this;
    prependListener(event: "BeginFile", listener: (e: {
        readonly index: number;
        skip: boolean;
    }) => void): this;
    prependListener(event: "Characters", listener: (e: {
        readonly text: string;
    }) => void): this;
    prependListener(event: "Comment", listener: (e: {
        readonly text: string;
    }) => void): this;
    prependListener(event: "EndElement", listener: (e: {
        readonly namespace: string;
        readonly element: string;
        readonly QName: string;
        readonly isEmpty: boolean;
    }) => void): this;
    prependListener(event: "EndFile", listener: (e: {
        readonly index: number;
    }) => void): this;
    prependListener(event: "EndPrefixMapping", listener: (e: {
        readonly prefix: string;
    }) => void): this;
    prependListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "EvalEntity", listener: (e: {
        readonly entity: string;
        value: string;
    }) => void): this;
    prependListener(event: "IgnorableWhitespace", listener: (e: {
        readonly text: string;
    }) => void): this;
    prependListener(event: "Meta", listener: (e: {
        readonly text: string;
    }) => void): this;
    prependListener(event: "Overwrite", listener: (e: {
        filename: string;
        overwrite: boolean;
    }) => void): this;
    prependListener(event: "PI", listener: (e: {
        readonly text: string;
    }) => void): this;
    prependListener(event: "Progress", listener: (e: {
        readonly data: string;
        readonly dataB: Uint8Array;
        readonly filename: string;
        readonly bytesProcessed: number;
        readonly percentProcessed: number;
    }) => void): this;
    prependListener(event: "SpecialSection", listener: (e: {
        readonly sectionId: string;
        readonly text: string;
    }) => void): this;
    prependListener(event: "StartElement", listener: (e: {
        readonly namespace: string;
        readonly element: string;
        readonly QName: string;
        readonly isEmpty: boolean;
    }) => void): this;
    prependListener(event: "StartPrefixMapping", listener: (e: {
        readonly prefix: string;
        readonly URI: string;
    }) => void): this;
    prependOnceListener(event: "BeginFile", listener: (e: {
        readonly index: number;
        skip: boolean;
    }) => void): this;
    prependOnceListener(event: "Characters", listener: (e: {
        readonly text: string;
    }) => void): this;
    prependOnceListener(event: "Comment", listener: (e: {
        readonly text: string;
    }) => void): this;
    prependOnceListener(event: "EndElement", listener: (e: {
        readonly namespace: string;
        readonly element: string;
        readonly QName: string;
        readonly isEmpty: boolean;
    }) => void): this;
    prependOnceListener(event: "EndFile", listener: (e: {
        readonly index: number;
    }) => void): this;
    prependOnceListener(event: "EndPrefixMapping", listener: (e: {
        readonly prefix: string;
    }) => void): this;
    prependOnceListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "EvalEntity", listener: (e: {
        readonly entity: string;
        value: string;
    }) => void): this;
    prependOnceListener(event: "IgnorableWhitespace", listener: (e: {
        readonly text: string;
    }) => void): this;
    prependOnceListener(event: "Meta", listener: (e: {
        readonly text: string;
    }) => void): this;
    prependOnceListener(event: "Overwrite", listener: (e: {
        filename: string;
        overwrite: boolean;
    }) => void): this;
    prependOnceListener(event: "PI", listener: (e: {
        readonly text: string;
    }) => void): this;
    prependOnceListener(event: "Progress", listener: (e: {
        readonly data: string;
        readonly dataB: Uint8Array;
        readonly filename: string;
        readonly bytesProcessed: number;
        readonly percentProcessed: number;
    }) => void): this;
    prependOnceListener(event: "SpecialSection", listener: (e: {
        readonly sectionId: string;
        readonly text: string;
    }) => void): this;
    prependOnceListener(event: "StartElement", listener: (e: {
        readonly namespace: string;
        readonly element: string;
        readonly QName: string;
        readonly isEmpty: boolean;
    }) => void): this;
    prependOnceListener(event: "StartPrefixMapping", listener: (e: {
        readonly prefix: string;
        readonly URI: string;
    }) => void): this;
    /**
     * Closes the Open XML package archive.
     */
    close(): Promise<void>;
    /**
     * Sets or retrieves a configuration setting.
     */
    config(configurationString: string): Promise<string>;
    /**
     * Reads the contents of the currently selected part.
     */
    extractPart(): Promise<void>;
    /**
     * Looks up a part in the current relationships file by it's type namespace URI.
     */
    findPartByType(typeURI: string): Promise<string>;
    /**
     * Returns the value of the specified package property.
     */
    getPropertyValue(propName: string, propNamespace: string): Promise<string>;
    /**
     * List all the parts contained in the document and their relationships.
     */
    listParts(): Promise<void>;
    /**
     * Opens the Open XML package archive.
     */
    open(): Promise<void>;
    /**
     * Parses the specified part as XML.
     */
    parsePart(): Promise<void>;
    /**
     * Reads the relationships file in the archive associated with the specified part.
     */
    readRelationships(): Promise<void>;
    /**
     * Replaces the contents of the specified part in the package.
     */
    replacePart(): Promise<void>;
    /**
     * Resets the class.
     */
    reset(): Promise<void>;
    /**
     * Returns the content type of the specified part.
     */
    resolveContentType(): Promise<string>;
    getContentTypes(): ContentTypeList;
    getNamespaces(): XMLNamespaceList;
    /**
     * The path to the Open XML package file.
     */
    getPackagePath(): string;
    /**
     * The path to the Open XML package file.
     */
    setPackagePath(packagePath: string): void;
    getPackageProperties(): PackagePropertyList;
    /**
     * The contents of the currently selected part.
     */
    getPartData(): string;
    /**
     * The contents of the currently selected part.
     */
    getPartDataB(): Uint8Array;
    /**
     * The contents of the currently selected part.
     */
    setPartData(data: Uint8Array | string): void;
    setPartData(data: Uint8Array, offset: number, length: number): void;
    /**
     * The name of the currently selected part.
     */
    getPartName(): string;
    /**
     * The name of the currently selected part.
     */
    setPartName(partName: string): void;
    getRelationships(): RelationshipList;
    /**
     * This property controls whether documents are validated during parsing.
     */
    isValidate(): boolean;
    /**
     * This property controls whether documents are validated during parsing.
     */
    setValidate(validate: boolean): void;
    getXAttributes(): XMLAttributeList;
    getXChildren(): XMLElementList;
    /**
     * The name of the current element.
     */
    getXElement(): string;
    /**
     * The namespace of the current element.
     */
    getXNamespace(): string;
    /**
     * This property includes the parent of the current element.
     */
    getXParent(): string;
    /**
     * This property provides a way to point to a specific element in the document.
     */
    getXPath(): string;
    /**
     * This property provides a way to point to a specific element in the document.
     */
    setXPath(XPath: string): void;
    /**
     * The prefix of the current element.
     */
    getXPrefix(): string;
    /**
     * This property includes a snapshot of the current element in the document.
     */
    getXSubTree(): string;
    /**
     * The text of the current element.
     */
    getXText(): string;
}
/************************************************** ENUMERATED TYPES **************************************************/
export declare enum SevenZipCompressionMethods {
    cmszLzma = 0,
    cmszBzip2 = 1,
    cmszDelta = 2,
    cmszCopy = 3,
    cmszDeflate = 4,
    cmszLzma2 = 5
}
/**
 * The SevenZip component implements a 7zip-compatible compressor and decompressor.
 */
export declare class sevenzip extends events.EventEmitter {
    private obj;
    constructor();
    about(): string;





    on(event: "BeginFile", listener: (e: {
        readonly index: number;
        skip: boolean;
    }) => void): this;
    on(event: "EndFile", listener: (e: {
        readonly index: number;
    }) => void): this;
    on(event: "Error", listener: (e: {
        readonly description: string;
        readonly errorCode: number;
        readonly index: number;
        readonly filename: string;
        ignore: boolean;
    }) => void): this;
    on(event: "Overwrite", listener: (e: {
        filename: string;
        overwrite: boolean;
    }) => void): this;
    on(event: "Progress", listener: (e: {
        readonly data: string;
        readonly dataB: Uint8Array;
        readonly filename: string;
        readonly bytesProcessed: number;
        readonly percentProcessed: number;
    }) => void): this;
    once(event: "BeginFile", listener: (e: {
        readonly index: number;
        skip: boolean;
    }) => void): this;
    once(event: "EndFile", listener: (e: {
        readonly index: number;
    }) => void): this;
    once(event: "Error", listener: (e: {
        readonly description: string;
        readonly errorCode: number;
        readonly index: number;
        readonly filename: string;
        ignore: boolean;
    }) => void): this;
    once(event: "Overwrite", listener: (e: {
        filename: string;
        overwrite: boolean;
    }) => void): this;
    once(event: "Progress", listener: (e: {
        readonly data: string;
        readonly dataB: Uint8Array;
        readonly filename: string;
        readonly bytesProcessed: number;
        readonly percentProcessed: number;
    }) => void): this;
    addListener(event: "BeginFile", listener: (e: {
        readonly index: number;
        skip: boolean;
    }) => void): this;
    addListener(event: "EndFile", listener: (e: {
        readonly index: number;
    }) => void): this;
    addListener(event: "Error", listener: (e: {
        readonly description: string;
        readonly errorCode: number;
        readonly index: number;
        readonly filename: string;
        ignore: boolean;
    }) => void): this;
    addListener(event: "Overwrite", listener: (e: {
        filename: string;
        overwrite: boolean;
    }) => void): this;
    addListener(event: "Progress", listener: (e: {
        readonly data: string;
        readonly dataB: Uint8Array;
        readonly filename: string;
        readonly bytesProcessed: number;
        readonly percentProcessed: number;
    }) => void): this;
    prependListener(event: "BeginFile", listener: (e: {
        readonly index: number;
        skip: boolean;
    }) => void): this;
    prependListener(event: "EndFile", listener: (e: {
        readonly index: number;
    }) => void): this;
    prependListener(event: "Error", listener: (e: {
        readonly description: string;
        readonly errorCode: number;
        readonly index: number;
        readonly filename: string;
        ignore: boolean;
    }) => void): this;
    prependListener(event: "Overwrite", listener: (e: {
        filename: string;
        overwrite: boolean;
    }) => void): this;
    prependListener(event: "Progress", listener: (e: {
        readonly data: string;
        readonly dataB: Uint8Array;
        readonly filename: string;
        readonly bytesProcessed: number;
        readonly percentProcessed: number;
    }) => void): this;
    prependOnceListener(event: "BeginFile", listener: (e: {
        readonly index: number;
        skip: boolean;
    }) => void): this;
    prependOnceListener(event: "EndFile", listener: (e: {
        readonly index: number;
    }) => void): this;
    prependOnceListener(event: "Error", listener: (e: {
        readonly description: string;
        readonly errorCode: number;
        readonly index: number;
        readonly filename: string;
        ignore: boolean;
    }) => void): this;
    prependOnceListener(event: "Overwrite", listener: (e: {
        filename: string;
        overwrite: boolean;
    }) => void): this;
    prependOnceListener(event: "Progress", listener: (e: {
        readonly data: string;
        readonly dataB: Uint8Array;
        readonly filename: string;
        readonly bytesProcessed: number;
        readonly percentProcessed: number;
    }) => void): this;
    /**
     * Aborts the current operation.
     */
    abort(): Promise<void>;
    /**
     * Adds specified files to an existing archive.
     */
    appendFiles(): Promise<void>;
    /**
     * Creates the compressed archive.
     */
    compress(): Promise<void>;
    /**
     * Sets or retrieves a configuration setting.
     */
    config(configurationString: string): Promise<string>;
    /**
     * Deletes one or more files from an existing archive.
     */
    delete(fileNames: string): Promise<void>;
    /**
     * Extracts a single file, directory, or group of files, from the archive.
     */
    extract(fileNames: string): Promise<void>;
    /**
     * Extracts all files from the compressed archive.
     */
    extractAll(): Promise<void>;
    /**
     * Specifies that the indicated files should be added to the archive.
     */
    includeFiles(fileNames: string): Promise<void>;
    /**
     * Resets the class.
     */
    reset(): Promise<void>;
    /**
     * Scans the compressed archive.
     */
    scan(): Promise<void>;
    /**
     * Will update certain files in an archive.
     */
    update(fileNames: string): Promise<void>;
    /**
     * The name of the zip, gzip, tar, or jar archive.
     */
    getArchiveFile(): string;
    /**
     * The name of the zip, gzip, tar, or jar archive.
     */
    setArchiveFile(archiveFile: string): void;
    /**
     * The compression level to use.
     */
    getCompressionLevel(): number;
    /**
     * The compression level to use.
     */
    setCompressionLevel(compressionLevel: number): void;
    /**
     * Used to set the method of compression.
     */
    getCompressionMethod(): SevenZipCompressionMethods;
    /**
     * Used to set the method of compression.
     */
    setCompressionMethod(compressionMethod: SevenZipCompressionMethods): void;
    /**
     * A list of files to exclude.
     */
    getExcludedFiles(): string;
    /**
     * A list of files to exclude.
     */
    setExcludedFiles(excludedFiles: string): void;
    /**
     * A base path to decompress to.
     */
    getExtractToPath(): string;
    /**
     * A base path to decompress to.
     */
    setExtractToPath(extractToPath: string): void;
    getFiles(): SevenZipFileList;
    /**
     * Whether or not to overwrite files.
     */
    isOverwriteFiles(): boolean;
    /**
     * Whether or not to overwrite files.
     */
    setOverwriteFiles(overwriteFiles: boolean): void;
    /**
     * A password for the zip archive.
     */
    getPassword(): string;
    /**
     * A password for the zip archive.
     */
    setPassword(password: string): void;
    /**
     * Whether or not to recurse into subdirectories.
     */
    isRecurseSubdirectories(): boolean;
    /**
     * Whether or not to recurse into subdirectories.
     */
    setRecurseSubdirectories(recurseSubdirectories: boolean): void;
    /**
     * (Decompression only) The seven zip file contents as a byte array.
     */
    setSevenZipData(data: Uint8Array | string): void;
    setSevenZipData(data: Uint8Array, offset: number, length: number): void;
}
/************************************************** ENUMERATED TYPES **************************************************/
/**
 * The Tar component implements a tar archive utility, compatible with the
UNIX tar and untar utilities. The component supports the old v7 tar format.
The component also implements gzip compression and can be used to create
or decompress .tar.gz archives.
 */
export declare class tar extends events.EventEmitter {
    private obj;
    constructor();
    about(): string;





    on(event: "BeginFile", listener: (e: {
        readonly index: number;
        skip: boolean;
    }) => void): this;
    on(event: "EndFile", listener: (e: {
        readonly index: number;
    }) => void): this;
    on(event: "Error", listener: (e: {
        readonly description: string;
        readonly errorCode: number;
        readonly index: number;
        readonly filename: string;
        ignore: boolean;
    }) => void): this;
    on(event: "Overwrite", listener: (e: {
        filename: string;
        overwrite: boolean;
    }) => void): this;
    on(event: "Progress", listener: (e: {
        readonly data: string;
        readonly dataB: Uint8Array;
        readonly filename: string;
        readonly bytesProcessed: number;
        readonly percentProcessed: number;
    }) => void): this;
    once(event: "BeginFile", listener: (e: {
        readonly index: number;
        skip: boolean;
    }) => void): this;
    once(event: "EndFile", listener: (e: {
        readonly index: number;
    }) => void): this;
    once(event: "Error", listener: (e: {
        readonly description: string;
        readonly errorCode: number;
        readonly index: number;
        readonly filename: string;
        ignore: boolean;
    }) => void): this;
    once(event: "Overwrite", listener: (e: {
        filename: string;
        overwrite: boolean;
    }) => void): this;
    once(event: "Progress", listener: (e: {
        readonly data: string;
        readonly dataB: Uint8Array;
        readonly filename: string;
        readonly bytesProcessed: number;
        readonly percentProcessed: number;
    }) => void): this;
    addListener(event: "BeginFile", listener: (e: {
        readonly index: number;
        skip: boolean;
    }) => void): this;
    addListener(event: "EndFile", listener: (e: {
        readonly index: number;
    }) => void): this;
    addListener(event: "Error", listener: (e: {
        readonly description: string;
        readonly errorCode: number;
        readonly index: number;
        readonly filename: string;
        ignore: boolean;
    }) => void): this;
    addListener(event: "Overwrite", listener: (e: {
        filename: string;
        overwrite: boolean;
    }) => void): this;
    addListener(event: "Progress", listener: (e: {
        readonly data: string;
        readonly dataB: Uint8Array;
        readonly filename: string;
        readonly bytesProcessed: number;
        readonly percentProcessed: number;
    }) => void): this;
    prependListener(event: "BeginFile", listener: (e: {
        readonly index: number;
        skip: boolean;
    }) => void): this;
    prependListener(event: "EndFile", listener: (e: {
        readonly index: number;
    }) => void): this;
    prependListener(event: "Error", listener: (e: {
        readonly description: string;
        readonly errorCode: number;
        readonly index: number;
        readonly filename: string;
        ignore: boolean;
    }) => void): this;
    prependListener(event: "Overwrite", listener: (e: {
        filename: string;
        overwrite: boolean;
    }) => void): this;
    prependListener(event: "Progress", listener: (e: {
        readonly data: string;
        readonly dataB: Uint8Array;
        readonly filename: string;
        readonly bytesProcessed: number;
        readonly percentProcessed: number;
    }) => void): this;
    prependOnceListener(event: "BeginFile", listener: (e: {
        readonly index: number;
        skip: boolean;
    }) => void): this;
    prependOnceListener(event: "EndFile", listener: (e: {
        readonly index: number;
    }) => void): this;
    prependOnceListener(event: "Error", listener: (e: {
        readonly description: string;
        readonly errorCode: number;
        readonly index: number;
        readonly filename: string;
        ignore: boolean;
    }) => void): this;
    prependOnceListener(event: "Overwrite", listener: (e: {
        filename: string;
        overwrite: boolean;
    }) => void): this;
    prependOnceListener(event: "Progress", listener: (e: {
        readonly data: string;
        readonly dataB: Uint8Array;
        readonly filename: string;
        readonly bytesProcessed: number;
        readonly percentProcessed: number;
    }) => void): this;
    /**
     * Aborts the current operation.
     */
    abort(): Promise<void>;
    /**
     * Adds a file to an existing archive.
     */
    append(decompressedName: string, compressedName: string): Promise<void>;
    /**
     * Creates the compressed archive.
     */
    compress(): Promise<void>;
    /**
     * Sets or retrieves a configuration setting.
     */
    config(configurationString: string): Promise<string>;
    /**
     * Deletes one or more files from an existing archive.
     */
    delete(fileNames: string): Promise<void>;
    /**
     * Extracts a single file, directory, or group of files, from the archive.
     */
    extract(fileNames: string): Promise<void>;
    /**
     * Extracts all files from the compressed archive.
     */
    extractAll(): Promise<void>;
    /**
     * Specifies that the indicated files should be added to the archive.
     */
    includeFiles(fileNames: string): Promise<void>;
    /**
     * Resets the class.
     */
    reset(): Promise<void>;
    /**
     * Scans the compressed archive.
     */
    scan(): Promise<void>;
    /**
     * The name of the zip, gzip, tar, or jar archive.
     */
    getArchiveFile(): string;
    /**
     * The name of the zip, gzip, tar, or jar archive.
     */
    setArchiveFile(archiveFile: string): void;
    /**
     * A list of files to exclude.
     */
    getExcludedFiles(): string;
    /**
     * A list of files to exclude.
     */
    setExcludedFiles(excludedFiles: string): void;
    /**
     * A base path to decompress to.
     */
    getExtractToPath(): string;
    /**
     * A base path to decompress to.
     */
    setExtractToPath(extractToPath: string): void;
    getFiles(): TARFileList;
    /**
     * Whether or not to overwrite files.
     */
    isOverwriteFiles(): boolean;
    /**
     * Whether or not to overwrite files.
     */
    setOverwriteFiles(overwriteFiles: boolean): void;
    /**
     * Whether or not to recurse into subdirectories.
     */
    isRecurseSubdirectories(): boolean;
    /**
     * Whether or not to recurse into subdirectories.
     */
    setRecurseSubdirectories(recurseSubdirectories: boolean): void;
    /**
     * (Decompression only) The tar file contents as a byte array.
     */
    setTarData(data: Uint8Array | string): void;
    setTarData(data: Uint8Array, offset: number, length: number): void;
    /**
     * Whether or not to use gzip compression.
     */
    isUseGzipCompression(): boolean;
    /**
     * Whether or not to use gzip compression.
     */
    setUseGzipCompression(useGzipCompression: boolean): void;
}
/************************************************** ENUMERATED TYPES **************************************************/
/**
 * The ZCompress component implements an LZC compressor and decompressor.  It is compatible with the UNIX compress utility.
 */
export declare class zcompress extends events.EventEmitter {
    private obj;
    constructor();
    about(): string;





    on(event: "BeginFile", listener: (e: {
        readonly index: number;
        skip: boolean;
    }) => void): this;
    on(event: "EndFile", listener: (e: {
        readonly index: number;
    }) => void): this;
    on(event: "Error", listener: (e: {
        readonly description: string;
        readonly errorCode: number;
        readonly index: number;
        readonly filename: string;
        ignore: boolean;
    }) => void): this;
    on(event: "Overwrite", listener: (e: {
        filename: string;
        overwrite: boolean;
    }) => void): this;
    on(event: "Progress", listener: (e: {
        readonly data: string;
        readonly dataB: Uint8Array;
        readonly filename: string;
        readonly bytesProcessed: number;
        readonly percentProcessed: number;
    }) => void): this;
    once(event: "BeginFile", listener: (e: {
        readonly index: number;
        skip: boolean;
    }) => void): this;
    once(event: "EndFile", listener: (e: {
        readonly index: number;
    }) => void): this;
    once(event: "Error", listener: (e: {
        readonly description: string;
        readonly errorCode: number;
        readonly index: number;
        readonly filename: string;
        ignore: boolean;
    }) => void): this;
    once(event: "Overwrite", listener: (e: {
        filename: string;
        overwrite: boolean;
    }) => void): this;
    once(event: "Progress", listener: (e: {
        readonly data: string;
        readonly dataB: Uint8Array;
        readonly filename: string;
        readonly bytesProcessed: number;
        readonly percentProcessed: number;
    }) => void): this;
    addListener(event: "BeginFile", listener: (e: {
        readonly index: number;
        skip: boolean;
    }) => void): this;
    addListener(event: "EndFile", listener: (e: {
        readonly index: number;
    }) => void): this;
    addListener(event: "Error", listener: (e: {
        readonly description: string;
        readonly errorCode: number;
        readonly index: number;
        readonly filename: string;
        ignore: boolean;
    }) => void): this;
    addListener(event: "Overwrite", listener: (e: {
        filename: string;
        overwrite: boolean;
    }) => void): this;
    addListener(event: "Progress", listener: (e: {
        readonly data: string;
        readonly dataB: Uint8Array;
        readonly filename: string;
        readonly bytesProcessed: number;
        readonly percentProcessed: number;
    }) => void): this;
    prependListener(event: "BeginFile", listener: (e: {
        readonly index: number;
        skip: boolean;
    }) => void): this;
    prependListener(event: "EndFile", listener: (e: {
        readonly index: number;
    }) => void): this;
    prependListener(event: "Error", listener: (e: {
        readonly description: string;
        readonly errorCode: number;
        readonly index: number;
        readonly filename: string;
        ignore: boolean;
    }) => void): this;
    prependListener(event: "Overwrite", listener: (e: {
        filename: string;
        overwrite: boolean;
    }) => void): this;
    prependListener(event: "Progress", listener: (e: {
        readonly data: string;
        readonly dataB: Uint8Array;
        readonly filename: string;
        readonly bytesProcessed: number;
        readonly percentProcessed: number;
    }) => void): this;
    prependOnceListener(event: "BeginFile", listener: (e: {
        readonly index: number;
        skip: boolean;
    }) => void): this;
    prependOnceListener(event: "EndFile", listener: (e: {
        readonly index: number;
    }) => void): this;
    prependOnceListener(event: "Error", listener: (e: {
        readonly description: string;
        readonly errorCode: number;
        readonly index: number;
        readonly filename: string;
        ignore: boolean;
    }) => void): this;
    prependOnceListener(event: "Overwrite", listener: (e: {
        filename: string;
        overwrite: boolean;
    }) => void): this;
    prependOnceListener(event: "Progress", listener: (e: {
        readonly data: string;
        readonly dataB: Uint8Array;
        readonly filename: string;
        readonly bytesProcessed: number;
        readonly percentProcessed: number;
    }) => void): this;
    /**
     * Aborts the current operation.
     */
    abort(): Promise<void>;
    /**
     * Creates the compressed archive.
     */
    compress(): Promise<void>;
    /**
     * Sets or retrieves a configuration setting.
     */
    config(configurationString: string): Promise<string>;
    /**
     * Extracts the compressed file from the archive.
     */
    extract(): Promise<void>;
    /**
     * Resets the class.
     */
    reset(): Promise<void>;
    /**
     * The name of the zip, gzip, tar, or jar archive.
     */
    getArchiveFile(): string;
    /**
     * The name of the zip, gzip, tar, or jar archive.
     */
    setArchiveFile(archiveFile: string): void;
    /**
     * File name to decompress to, or compress from.
     */
    getFileDecompressedName(): string;
    /**
     * File name to decompress to, or compress from.
     */
    setFileDecompressedName(fileDecompressedName: string): void;
    /**
     * The data of the file to be compressed.
     */
    getFileInputData(): string;
    /**
     * The data of the file to be compressed.
     */
    getFileInputDataB(): Uint8Array;
    /**
     * The data of the file to be compressed.
     */
    setFileInputData(data: Uint8Array | string): void;
    setFileInputData(data: Uint8Array, offset: number, length: number): void;
    /**
     * (Decompression only) The LZC compressed file contents as a byte array.
     */
    setZCompressData(data: Uint8Array | string): void;
    setZCompressData(data: Uint8Array, offset: number, length: number): void;
}
/************************************************** ENUMERATED TYPES **************************************************/
export declare enum ZipCompressionMethods {
    cmDeflate = 0,
    cmPPMd = 1,
    cmBzip2 = 2
}
export declare enum ZipEncryptionAlgorithms {
    eaDefault = 0,
    eaAESWeak = 1,
    eaAESStrong = 2,
    eaAESMaximum = 3
}
/**
 * The Zip component implements a PKZip-compatible Zip compressor and decompressor.
 */
export declare class zip extends events.EventEmitter {
    private obj;
    constructor();
    about(): string;






    on(event: "BeginFile", listener: (e: {
        readonly index: number;
        skip: boolean;
    }) => void): this;
    on(event: "EndFile", listener: (e: {
        readonly index: number;
    }) => void): this;
    on(event: "Error", listener: (e: {
        readonly description: string;
        readonly errorCode: number;
        readonly index: number;
        readonly filename: string;
        ignore: boolean;
    }) => void): this;
    on(event: "Overwrite", listener: (e: {
        filename: string;
        overwrite: boolean;
    }) => void): this;
    on(event: "Password", listener: (e: {
        readonly index: number;
        password: string;
    }) => void): this;
    on(event: "Progress", listener: (e: {
        readonly data: string;
        readonly dataB: Uint8Array;
        readonly filename: string;
        readonly bytesProcessed: number;
        readonly percentProcessed: number;
    }) => void): this;
    once(event: "BeginFile", listener: (e: {
        readonly index: number;
        skip: boolean;
    }) => void): this;
    once(event: "EndFile", listener: (e: {
        readonly index: number;
    }) => void): this;
    once(event: "Error", listener: (e: {
        readonly description: string;
        readonly errorCode: number;
        readonly index: number;
        readonly filename: string;
        ignore: boolean;
    }) => void): this;
    once(event: "Overwrite", listener: (e: {
        filename: string;
        overwrite: boolean;
    }) => void): this;
    once(event: "Password", listener: (e: {
        readonly index: number;
        password: string;
    }) => void): this;
    once(event: "Progress", listener: (e: {
        readonly data: string;
        readonly dataB: Uint8Array;
        readonly filename: string;
        readonly bytesProcessed: number;
        readonly percentProcessed: number;
    }) => void): this;
    addListener(event: "BeginFile", listener: (e: {
        readonly index: number;
        skip: boolean;
    }) => void): this;
    addListener(event: "EndFile", listener: (e: {
        readonly index: number;
    }) => void): this;
    addListener(event: "Error", listener: (e: {
        readonly description: string;
        readonly errorCode: number;
        readonly index: number;
        readonly filename: string;
        ignore: boolean;
    }) => void): this;
    addListener(event: "Overwrite", listener: (e: {
        filename: string;
        overwrite: boolean;
    }) => void): this;
    addListener(event: "Password", listener: (e: {
        readonly index: number;
        password: string;
    }) => void): this;
    addListener(event: "Progress", listener: (e: {
        readonly data: string;
        readonly dataB: Uint8Array;
        readonly filename: string;
        readonly bytesProcessed: number;
        readonly percentProcessed: number;
    }) => void): this;
    prependListener(event: "BeginFile", listener: (e: {
        readonly index: number;
        skip: boolean;
    }) => void): this;
    prependListener(event: "EndFile", listener: (e: {
        readonly index: number;
    }) => void): this;
    prependListener(event: "Error", listener: (e: {
        readonly description: string;
        readonly errorCode: number;
        readonly index: number;
        readonly filename: string;
        ignore: boolean;
    }) => void): this;
    prependListener(event: "Overwrite", listener: (e: {
        filename: string;
        overwrite: boolean;
    }) => void): this;
    prependListener(event: "Password", listener: (e: {
        readonly index: number;
        password: string;
    }) => void): this;
    prependListener(event: "Progress", listener: (e: {
        readonly data: string;
        readonly dataB: Uint8Array;
        readonly filename: string;
        readonly bytesProcessed: number;
        readonly percentProcessed: number;
    }) => void): this;
    prependOnceListener(event: "BeginFile", listener: (e: {
        readonly index: number;
        skip: boolean;
    }) => void): this;
    prependOnceListener(event: "EndFile", listener: (e: {
        readonly index: number;
    }) => void): this;
    prependOnceListener(event: "Error", listener: (e: {
        readonly description: string;
        readonly errorCode: number;
        readonly index: number;
        readonly filename: string;
        ignore: boolean;
    }) => void): this;
    prependOnceListener(event: "Overwrite", listener: (e: {
        filename: string;
        overwrite: boolean;
    }) => void): this;
    prependOnceListener(event: "Password", listener: (e: {
        readonly index: number;
        password: string;
    }) => void): this;
    prependOnceListener(event: "Progress", listener: (e: {
        readonly data: string;
        readonly dataB: Uint8Array;
        readonly filename: string;
        readonly bytesProcessed: number;
        readonly percentProcessed: number;
    }) => void): this;
    /**
     * Aborts the current operation.
     */
    abort(): Promise<void>;
    /**
     * Adds specified files to an existing archive.
     */
    appendFiles(): Promise<void>;
    /**
     * Creates the compressed archive.
     */
    compress(): Promise<void>;
    /**
     * Sets or retrieves a configuration setting.
     */
    config(configurationString: string): Promise<string>;
    /**
     * Deletes one or more files from an existing archive.
     */
    delete(fileNames: string): Promise<void>;
    /**
     * Extracts a single file, directory, or group of files, from the archive.
     */
    extract(fileNames: string): Promise<void>;
    /**
     * Extracts all files from the compressed archive.
     */
    extractAll(): Promise<void>;
    /**
     * Specifies that the indicated files should be added to the archive.
     */
    includeFiles(fileNames: string): Promise<void>;
    /**
     * Resets the class.
     */
    reset(): Promise<void>;
    /**
     * Scans the compressed archive.
     */
    scan(): Promise<void>;
    /**
     * Will update certain files in an archive.
     */
    update(fileNames: string): Promise<void>;
    /**
     * The name of the zip, gzip, tar, or jar archive.
     */
    getArchiveFile(): string;
    /**
     * The name of the zip, gzip, tar, or jar archive.
     */
    setArchiveFile(archiveFile: string): void;
    /**
     * The compression level to use.
     */
    getCompressionLevel(): number;
    /**
     * The compression level to use.
     */
    setCompressionLevel(compressionLevel: number): void;
    /**
     * The compression method to use.
     */
    getCompressionMethod(): ZipCompressionMethods;
    /**
     * The compression method to use.
     */
    setCompressionMethod(compressionMethod: ZipCompressionMethods): void;
    /**
     * The algorithm used to encrypt files written to the archive.
     */
    getEncryptionAlgorithm(): ZipEncryptionAlgorithms;
    /**
     * The algorithm used to encrypt files written to the archive.
     */
    setEncryptionAlgorithm(encryptionAlgorithm: ZipEncryptionAlgorithms): void;
    /**
     * A list of files to exclude.
     */
    getExcludedFiles(): string;
    /**
     * A list of files to exclude.
     */
    setExcludedFiles(excludedFiles: string): void;
    /**
     * A base path to decompress to.
     */
    getExtractToPath(): string;
    /**
     * A base path to decompress to.
     */
    setExtractToPath(extractToPath: string): void;
    getFiles(): ZIPFileList;
    /**
     * Whether or not to overwrite files.
     */
    isOverwriteFiles(): boolean;
    /**
     * Whether or not to overwrite files.
     */
    setOverwriteFiles(overwriteFiles: boolean): void;
    /**
     * A password for the zip archive.
     */
    getPassword(): string;
    /**
     * A password for the zip archive.
     */
    setPassword(password: string): void;
    /**
     * Whether or not to recurse into subdirectories.
     */
    isRecurseSubdirectories(): boolean;
    /**
     * Whether or not to recurse into subdirectories.
     */
    setRecurseSubdirectories(recurseSubdirectories: boolean): void;
    /**
     * The comment for the entire zip file.
     */
    getZipComment(): string;
    /**
     * The comment for the entire zip file.
     */
    setZipComment(zipComment: string): void;
    /**
     * (Decompression only) The zip file contents as a byte array.
     */
    getZipData(): string;
    /**
     * (Decompression only) The zip file contents as a byte array.
     */
    getZipDataB(): Uint8Array;
    /**
     * (Decompression only) The zip file contents as a byte array.
     */
    setZipData(data: Uint8Array | string): void;
    setZipData(data: Uint8Array, offset: number, length: number): void;
}
/************************************************** ENUMERATED TYPES **************************************************/
export declare enum ZipStreamStreamFormats {
    sfDeflate = 0,
    sfZlib = 1,
    sfGzip = 2
}
/**
 * The ZipStream component is used to perform compression or decompression.
 */
export declare class zipstream extends events.EventEmitter {
    private obj;
    constructor();
    about(): string;



    on(event: "CompressedData", listener: (e: {
        readonly data: string;
        readonly dataB: Uint8Array;
    }) => void): this;
    on(event: "DecompressedData", listener: (e: {
        readonly data: string;
        readonly dataB: Uint8Array;
    }) => void): this;
    on(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "CompressedData", listener: (e: {
        readonly data: string;
        readonly dataB: Uint8Array;
    }) => void): this;
    once(event: "DecompressedData", listener: (e: {
        readonly data: string;
        readonly dataB: Uint8Array;
    }) => void): this;
    once(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "CompressedData", listener: (e: {
        readonly data: string;
        readonly dataB: Uint8Array;
    }) => void): this;
    addListener(event: "DecompressedData", listener: (e: {
        readonly data: string;
        readonly dataB: Uint8Array;
    }) => void): this;
    addListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "CompressedData", listener: (e: {
        readonly data: string;
        readonly dataB: Uint8Array;
    }) => void): this;
    prependListener(event: "DecompressedData", listener: (e: {
        readonly data: string;
        readonly dataB: Uint8Array;
    }) => void): this;
    prependListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "CompressedData", listener: (e: {
        readonly data: string;
        readonly dataB: Uint8Array;
    }) => void): this;
    prependOnceListener(event: "DecompressedData", listener: (e: {
        readonly data: string;
        readonly dataB: Uint8Array;
    }) => void): this;
    prependOnceListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    /**
     * Compresses a block of data.
     */
    compressBlock(lastBlock: boolean): Promise<void>;
    /**
     * Compresses the specified data.
     */
    compressData(): Promise<void>;
    /**
     * Sets or retrieves a configuration setting.
     */
    config(configurationString: string): Promise<string>;
    /**
     * Decompresses a block of data.
     */
    decompressBlock(): Promise<void>;
    /**
     * Decompresses the specified data.
     */
    decompressData(): Promise<void>;
    /**
     * Resets the class.
     */
    reset(): Promise<void>;
    /**
     * Whether or not to close the underlying stream.
     */
    isCloseBaseStream(): boolean;
    /**
     * Whether or not to close the underlying stream.
     */
    setCloseBaseStream(closeBaseStream: boolean): void;
    /**
     * The compression level to use.
     */
    getCompressionLevel(): number;
    /**
     * The compression level to use.
     */
    setCompressionLevel(compressionLevel: number): void;
    /**
     * Specifies the data to compress or decompress.
     */
    getInputData(): string;
    /**
     * Specifies the data to compress or decompress.
     */
    getInputDataB(): Uint8Array;
    /**
     * Specifies the data to compress or decompress.
     */
    setInputData(data: Uint8Array | string): void;
    setInputData(data: Uint8Array, offset: number, length: number): void;
    /**
     * The output data after compression or decompression.
     */
    getOutputData(): string;
    /**
     * The output data after compression or decompression.
     */
    getOutputDataB(): Uint8Array;
    /**
     * The stream format to use.
     */
    getStreamFormat(): ZipStreamStreamFormats;
    /**
     * The stream format to use.
     */
    setStreamFormat(streamFormat: ZipStreamStreamFormats): void;
}
