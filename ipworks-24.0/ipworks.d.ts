
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
type CArticleInfo=any;
export declare class ArticleInfo {
    private obj;
    constructor(obj: CArticleInfo);
    constructor();
    unwrap(): CArticleInfo;
    getArticleLines(): number;
    getArticleNumber(): number;
    getArticleSize(): number;
    getDate(): string;
    getFrom(): string;
    getMessageId(): string;
    getOtherHeaders(): string;
    getReferences(): string;
    getSubject(): string;
    clone(): any;
}
export declare class ArticleInfoList extends WrappedList<ArticleInfo, CArticleInfo> {
    constructor(list: any, readOnly: boolean);
    protected_wrap(o: CArticleInfo): ArticleInfo;
    protected_unwrap(o: ArticleInfo): CArticleInfo;
    item(index: number): ArticleInfo;
    addAll(c: Collection<ArticleInfo>): boolean;
    addAll(index: number, c: Collection<ArticleInfo>): boolean;
    addRange(c: Collection<ArticleInfo>): void;
    size(): number;
    clone(): any;
}
type CAtomChannel=any;
export declare enum ChannelRightsTextTypes {
    ttText = 0,
    ttHTML = 1,
    ttXHTML = 2
}
export declare enum ChannelSubtitleTextTypes {
    ttText = 0,
    ttHTML = 1,
    ttXHTML = 2
}
export declare enum ChannelTitleTextTypes {
    ttText = 0,
    ttHTML = 1,
    ttXHTML = 2
}
export declare class AtomChannel {
    private obj;
    constructor(obj: CAtomChannel);
    constructor();
    unwrap(): CAtomChannel;
    getAuthorEmail(): string;
    setAuthorEmail(authorEmail: string): void;
    getAuthorName(): string;
    setAuthorName(authorName: string): void;
    getAuthorUri(): string;
    setAuthorUri(authorUri: string): void;
    getCategoryLabel(): string;
    setCategoryLabel(categoryLabel: string): void;
    getCategoryScheme(): string;
    setCategoryScheme(categoryScheme: string): void;
    getCategoryTerm(): string;
    setCategoryTerm(categoryTerm: string): void;
    getContributorEmail(): string;
    setContributorEmail(contributorEmail: string): void;
    getContributorName(): string;
    setContributorName(contributorName: string): void;
    getContributorUri(): string;
    setContributorUri(contributorUri: string): void;
    getGenerator(): string;
    setGenerator(generator: string): void;
    getIcon(): string;
    setIcon(icon: string): void;
    getId(): string;
    setId(id: string): void;
    getLinkHref(): string;
    setLinkHref(linkHref: string): void;
    getLinkHrefLang(): string;
    setLinkHrefLang(linkHrefLang: string): void;
    getLinkLength(): string;
    setLinkLength(linkLength: string): void;
    getLinkRel(): string;
    setLinkRel(linkRel: string): void;
    getLinkTitle(): string;
    setLinkTitle(linkTitle: string): void;
    getLinkType(): string;
    setLinkType(linkType: string): void;
    getLogo(): string;
    setLogo(logo: string): void;
    getRights(): string;
    setRights(rights: string): void;
    getRightsTextType(): ChannelRightsTextTypes;
    setRightsTextType(rightsTextType: ChannelRightsTextTypes): void;
    getSubtitle(): string;
    setSubtitle(subtitle: string): void;
    getSubtitleTextType(): ChannelSubtitleTextTypes;
    setSubtitleTextType(subtitleTextType: ChannelSubtitleTextTypes): void;
    getTitle(): string;
    setTitle(title: string): void;
    getTitleTextType(): ChannelTitleTextTypes;
    setTitleTextType(titleTextType: ChannelTitleTextTypes): void;
    getUpdated(): string;
    setUpdated(updated: string): void;
    clone(): any;
}
export declare class AtomChannelList extends WrappedList<AtomChannel, CAtomChannel> {
    constructor(list: any, readOnly: boolean);
    protected_wrap(o: CAtomChannel): AtomChannel;
    protected_unwrap(o: AtomChannel): CAtomChannel;
    item(index: number): AtomChannel;
    addAll(c: Collection<AtomChannel>): boolean;
    addAll(index: number, c: Collection<AtomChannel>): boolean;
    addRange(c: Collection<AtomChannel>): void;
    size(): number;
    clone(): any;
}
type CAtomEntry=any;
export declare enum EntryContentTextTypes {
    ttText = 0,
    ttHTML = 1,
    ttXHTML = 2
}
export declare enum EntryRightsTextTypes {
    ttText = 0,
    ttHTML = 1,
    ttXHTML = 2
}
export declare enum EntrySummaryTextTypes {
    ttText = 0,
    ttHTML = 1,
    ttXHTML = 2
}
export declare enum EntryTitleTextTypes {
    ttText = 0,
    ttHTML = 1,
    ttXHTML = 2
}
export declare class AtomEntry {
    private obj;
    constructor(obj: CAtomEntry);
    constructor();
    constructor(title: string);
    constructor(title: string, content: string);
    constructor(title: string, content: string, linkHref: string);
    unwrap(): CAtomEntry;
    getAuthorEmail(): string;
    setAuthorEmail(authorEmail: string): void;
    getAuthorName(): string;
    setAuthorName(authorName: string): void;
    getAuthorUri(): string;
    setAuthorUri(authorUri: string): void;
    getCategoryLabel(): string;
    setCategoryLabel(categoryLabel: string): void;
    getCategoryScheme(): string;
    setCategoryScheme(categoryScheme: string): void;
    getCategoryTerm(): string;
    setCategoryTerm(categoryTerm: string): void;
    getContent(): string;
    setContent(content: string): void;
    getContentTextType(): EntryContentTextTypes;
    setContentTextType(contentTextType: EntryContentTextTypes): void;
    getContributorEmail(): string;
    setContributorEmail(contributorEmail: string): void;
    getContributorName(): string;
    setContributorName(contributorName: string): void;
    getContributorUri(): string;
    setContributorUri(contributorUri: string): void;
    getCopyright(): string;
    setCopyright(copyright: string): void;
    getCreated(): string;
    setCreated(created: string): void;
    getEntryXML(): string;
    setEntryXML(entryXML: string): void;
    getId(): string;
    setId(id: string): void;
    getIssued(): string;
    setIssued(issued: string): void;
    getLinkHref(): string;
    setLinkHref(linkHref: string): void;
    getLinkHrefLang(): string;
    setLinkHrefLang(linkHrefLang: string): void;
    getLinkLength(): string;
    setLinkLength(linkLength: string): void;
    getLinkRel(): string;
    setLinkRel(linkRel: string): void;
    getLinkTitle(): string;
    setLinkTitle(linkTitle: string): void;
    getLinkType(): string;
    setLinkType(linkType: string): void;
    getModified(): string;
    setModified(modified: string): void;
    getPublished(): string;
    setPublished(published: string): void;
    getRights(): string;
    setRights(rights: string): void;
    getRightsTextType(): EntryRightsTextTypes;
    setRightsTextType(rightsTextType: EntryRightsTextTypes): void;
    getSource(): string;
    setSource(source: string): void;
    getSummary(): string;
    setSummary(summary: string): void;
    getSummaryTextType(): EntrySummaryTextTypes;
    setSummaryTextType(summaryTextType: EntrySummaryTextTypes): void;
    getTitle(): string;
    setTitle(title: string): void;
    getTitleTextType(): EntryTitleTextTypes;
    setTitleTextType(titleTextType: EntryTitleTextTypes): void;
    getUpdated(): string;
    setUpdated(updated: string): void;
    clone(): any;
}
export declare class AtomEntryList extends WrappedList<AtomEntry, CAtomEntry> {
    constructor(list: any, readOnly: boolean);
    protected_wrap(o: CAtomEntry): AtomEntry;
    protected_unwrap(o: AtomEntry): CAtomEntry;
    item(index: number): AtomEntry;
    addAll(c: Collection<AtomEntry>): boolean;
    addAll(index: number, c: Collection<AtomEntry>): boolean;
    addRange(c: Collection<AtomEntry>): void;
    size(): number;
    clone(): any;
}
type CCalAlarm=any;
export declare enum Actions {
    aNoAlarm = 0,
    aAudio = 1,
    aDisplay = 2,
    aEmail = 3
}
export declare class CalAlarm {
    private obj;
    constructor(obj: CCalAlarm);
    constructor();
    constructor(trigger: string, action: Actions);
    unwrap(): CCalAlarm;
    getAction(): Actions;
    setAction(action: Actions): void;
    getAttachment(): string;
    setAttachment(attachment: string): void;
    getAttachmentType(): string;
    setAttachmentType(attachmentType: string): void;
    getDuration(): string;
    setDuration(duration: string): void;
    getMessage(): string;
    setMessage(message: string): void;
    getRecipient(): string;
    setRecipient(recipient: string): void;
    getRepeat(): number;
    setRepeat(repeat: number): void;
    getSubject(): string;
    setSubject(subject: string): void;
    getTrigger(): string;
    setTrigger(trigger: string): void;
    clone(): any;
}
export declare class CalAlarmList extends WrappedList<CalAlarm, CCalAlarm> {
    constructor(list: any, readOnly: boolean);
    protected_wrap(o: CCalAlarm): CalAlarm;
    protected_unwrap(o: CalAlarm): CCalAlarm;
    item(index: number): CalAlarm;
    addAll(c: Collection<CalAlarm>): boolean;
    addAll(index: number, c: Collection<CalAlarm>): boolean;
    addRange(c: Collection<CalAlarm>): void;
    size(): number;
    clone(): any;
}
type CCalCalendarInfo=any;
export declare class CalCalendarInfo {
    private obj;
    constructor(obj: CCalCalendarInfo);
    constructor();
    unwrap(): CCalCalendarInfo;
    getColor(): string;
    setColor(color: string): void;
    getCTag(): string;
    setCTag(CTag: string): void;
    getDescription(): string;
    setDescription(description: string): void;
    getDisplayName(): string;
    setDisplayName(displayName: string): void;
    getPropertyCount(): number;
    getPropertyIndex(): number;
    setPropertyIndex(propertyIndex: number): void;
    getPropertyName(): string;
    getPropertyValue(): string;
    getURL(): string;
    setURL(URL: string): void;
    clone(): any;
}
export declare class CalCalendarInfoList extends WrappedList<CalCalendarInfo, CCalCalendarInfo> {
    constructor(list: any, readOnly: boolean);
    protected_wrap(o: CCalCalendarInfo): CalCalendarInfo;
    protected_unwrap(o: CalCalendarInfo): CCalCalendarInfo;
    item(index: number): CalCalendarInfo;
    addAll(c: Collection<CalCalendarInfo>): boolean;
    addAll(index: number, c: Collection<CalCalendarInfo>): boolean;
    addRange(c: Collection<CalCalendarInfo>): void;
    size(): number;
    clone(): any;
}
type CCalCustomProp=any;
export declare class CalCustomProp {
    private obj;
    constructor(obj: CCalCustomProp);
    constructor();
    constructor(name: string, value: string);
    constructor(name: string, value: string, attribute: string);
    unwrap(): CCalCustomProp;
    getAttribute(): string;
    setAttribute(attribute: string): void;
    getName(): string;
    setName(name: string): void;
    getValue(): string;
    setValue(value: string): void;
    clone(): any;
}
export declare class CalCustomPropList extends WrappedList<CalCustomProp, CCalCustomProp> {
    constructor(list: any, readOnly: boolean);
    protected_wrap(o: CCalCustomProp): CalCustomProp;
    protected_unwrap(o: CalCustomProp): CCalCustomProp;
    item(index: number): CalCustomProp;
    addAll(c: Collection<CalCustomProp>): boolean;
    addAll(index: number, c: Collection<CalCustomProp>): boolean;
    addRange(c: Collection<CalCustomProp>): void;
    size(): number;
    clone(): any;
}
type CCalFreeBusy=any;
export declare class CalFreeBusy {
    private obj;
    constructor(obj: CCalFreeBusy);
    constructor();
    unwrap(): CCalFreeBusy;
    getBusyRange(): string;
    getBusyType(): string;
    clone(): any;
}
export declare class CalFreeBusyList extends WrappedList<CalFreeBusy, CCalFreeBusy> {
    constructor(list: any, readOnly: boolean);
    protected_wrap(o: CCalFreeBusy): CalFreeBusy;
    protected_unwrap(o: CalFreeBusy): CCalFreeBusy;
    item(index: number): CalFreeBusy;
    addAll(c: Collection<CalFreeBusy>): boolean;
    addAll(index: number, c: Collection<CalFreeBusy>): boolean;
    addRange(c: Collection<CalFreeBusy>): void;
    size(): number;
    clone(): any;
}
type CCalLock=any;
export declare class CalLock {
    private obj;
    constructor(obj: CCalLock);
    constructor();
    unwrap(): CCalLock;
    getLockType(): string;
    setLockType(lockType: string): void;
    getOwner(): string;
    setOwner(owner: string): void;
    getScope(): string;
    setScope(scope: string): void;
    getTimeout(): number;
    setTimeout(timeout: number): void;
    getToken(): string;
    setToken(token: string): void;
    clone(): any;
}
export declare class CalLockList extends WrappedList<CalLock, CCalLock> {
    constructor(list: any, readOnly: boolean);
    protected_wrap(o: CCalLock): CalLock;
    protected_unwrap(o: CalLock): CCalLock;
    item(index: number): CalLock;
    addAll(c: Collection<CalLock>): boolean;
    addAll(index: number, c: Collection<CalLock>): boolean;
    addRange(c: Collection<CalLock>): void;
    size(): number;
    clone(): any;
}
type CCalRecurrence=any;
export declare class CalRecurrence {
    private obj;
    constructor(obj: CCalRecurrence);
    constructor();
    unwrap(): CCalRecurrence;
    getDates(): string;
    setDates(dates: string): void;
    getExceptionDates(): string;
    setExceptionDates(exceptionDates: string): void;
    getExceptionRule(): string;
    setExceptionRule(exceptionRule: string): void;
    getRecurrenceId(): string;
    setRecurrenceId(recurrenceId: string): void;
    getRule(): string;
    setRule(rule: string): void;
    clone(): any;
}
export declare class CalRecurrenceList extends WrappedList<CalRecurrence, CCalRecurrence> {
    constructor(list: any, readOnly: boolean);
    protected_wrap(o: CCalRecurrence): CalRecurrence;
    protected_unwrap(o: CalRecurrence): CCalRecurrence;
    item(index: number): CalRecurrence;
    addAll(c: Collection<CalRecurrence>): boolean;
    addAll(index: number, c: Collection<CalRecurrence>): boolean;
    addRange(c: Collection<CalRecurrence>): void;
    size(): number;
    clone(): any;
}
type CCalReportFilter=any;
export declare enum VEventTypes {
    vtEvent = 0,
    vtTodo = 1,
    vtJournal = 2,
    vtFreeBusy = 3,
    vtAll = 4
}
export declare class CalReportFilter {
    private obj;
    constructor(obj: CCalReportFilter);
    constructor();
    unwrap(): CCalReportFilter;
    getAlarmEnd(): string;
    setAlarmEnd(alarmEnd: string): void;
    getAlarmStart(): string;
    setAlarmStart(alarmStart: string): void;
    getCustomFilter(): string;
    setCustomFilter(customFilter: string): void;
    getEndDate(): string;
    setEndDate(endDate: string): void;
    getEventType(): VEventTypes;
    setEventType(eventType: VEventTypes): void;
    getProperty(): string;
    setProperty(property: string): void;
    getRecurEnd(): string;
    setRecurEnd(recurEnd: string): void;
    getRecurStart(): string;
    setRecurStart(recurStart: string): void;
    getReturnCalendarData(): boolean;
    setReturnCalendarData(returnCalendarData: boolean): void;
    getStartDate(): string;
    setStartDate(startDate: string): void;
    getUID(): string;
    setUID(UID: string): void;
    clone(): any;
}
export declare class CalReportFilterList extends WrappedList<CalReportFilter, CCalReportFilter> {
    constructor(list: any, readOnly: boolean);
    protected_wrap(o: CCalReportFilter): CalReportFilter;
    protected_unwrap(o: CalReportFilter): CCalReportFilter;
    item(index: number): CalReportFilter;
    addAll(c: Collection<CalReportFilter>): boolean;
    addAll(index: number, c: Collection<CalReportFilter>): boolean;
    addRange(c: Collection<CalReportFilter>): void;
    size(): number;
    clone(): any;
}
type CCalTimezone=any;
export declare class CalTimezone {
    private obj;
    constructor(obj: CCalTimezone);
    constructor();
    unwrap(): CCalTimezone;
    getDSTName(): string;
    setDSTName(DSTName: string): void;
    getDSTOffsetFrom(): string;
    setDSTOffsetFrom(DSTOffsetFrom: string): void;
    getDSTOffsetTo(): string;
    setDSTOffsetTo(DSTOffsetTo: string): void;
    getDSTRule(): string;
    setDSTRule(DSTRule: string): void;
    getDSTStart(): string;
    setDSTStart(DSTStart: string): void;
    getLastModified(): string;
    setLastModified(lastModified: string): void;
    getStdName(): string;
    setStdName(stdName: string): void;
    getStdOffsetFrom(): string;
    setStdOffsetFrom(stdOffsetFrom: string): void;
    getStdOffsetTo(): string;
    setStdOffsetTo(stdOffsetTo: string): void;
    getStdRule(): string;
    setStdRule(stdRule: string): void;
    getStdStart(): string;
    setStdStart(stdStart: string): void;
    getTimezoneId(): string;
    setTimezoneId(timezoneId: string): void;
    getURL(): string;
    setURL(URL: string): void;
    clone(): any;
}
export declare class CalTimezoneList extends WrappedList<CalTimezone, CCalTimezone> {
    constructor(list: any, readOnly: boolean);
    protected_wrap(o: CCalTimezone): CalTimezone;
    protected_unwrap(o: CalTimezone): CCalTimezone;
    item(index: number): CalTimezone;
    addAll(c: Collection<CalTimezone>): boolean;
    addAll(index: number, c: Collection<CalTimezone>): boolean;
    addRange(c: Collection<CalTimezone>): void;
    size(): number;
    clone(): any;
}
type CCardAddressbookInfo=any;
export declare class CardAddressbookInfo {
    private obj;
    constructor(obj: CCardAddressbookInfo);
    constructor();
    unwrap(): CCardAddressbookInfo;
    getCTag(): string;
    setCTag(CTag: string): void;
    getDescription(): string;
    setDescription(description: string): void;
    getDisplayName(): string;
    setDisplayName(displayName: string): void;
    getPropertyCount(): number;
    getPropertyIndex(): number;
    setPropertyIndex(propertyIndex: number): void;
    getPropertyName(): string;
    getPropertyValue(): string;
    getURL(): string;
    setURL(URL: string): void;
    clone(): any;
}
export declare class CardAddressbookInfoList extends WrappedList<CardAddressbookInfo, CCardAddressbookInfo> {
    constructor(list: any, readOnly: boolean);
    protected_wrap(o: CCardAddressbookInfo): CardAddressbookInfo;
    protected_unwrap(o: CardAddressbookInfo): CCardAddressbookInfo;
    item(index: number): CardAddressbookInfo;
    addAll(c: Collection<CardAddressbookInfo>): boolean;
    addAll(index: number, c: Collection<CardAddressbookInfo>): boolean;
    addRange(c: Collection<CardAddressbookInfo>): void;
    size(): number;
    clone(): any;
}
type CCardCustomProp=any;
export declare class CardCustomProp {
    private obj;
    constructor(obj: CCardCustomProp);
    constructor();
    constructor(name: string, value: string);
    constructor(name: string, value: string, attribute: string);
    unwrap(): CCardCustomProp;
    getAttribute(): string;
    setAttribute(attribute: string): void;
    getName(): string;
    setName(name: string): void;
    getValue(): string;
    setValue(value: string): void;
    clone(): any;
}
export declare class CardCustomPropList extends WrappedList<CardCustomProp, CCardCustomProp> {
    constructor(list: any, readOnly: boolean);
    protected_wrap(o: CCardCustomProp): CardCustomProp;
    protected_unwrap(o: CardCustomProp): CCardCustomProp;
    item(index: number): CardCustomProp;
    addAll(c: Collection<CardCustomProp>): boolean;
    addAll(index: number, c: Collection<CardCustomProp>): boolean;
    addRange(c: Collection<CardCustomProp>): void;
    size(): number;
    clone(): any;
}
type CCardReportFilter=any;
export declare class CardReportFilter {
    private obj;
    constructor(obj: CCardReportFilter);
    constructor();
    unwrap(): CCardReportFilter;
    getCustomFilter(): string;
    setCustomFilter(customFilter: string): void;
    getProperty(): string;
    setProperty(property: string): void;
    getReturnContactData(): boolean;
    setReturnContactData(returnContactData: boolean): void;
    getUID(): string;
    setUID(UID: string): void;
    clone(): any;
}
export declare class CardReportFilterList extends WrappedList<CardReportFilter, CCardReportFilter> {
    constructor(list: any, readOnly: boolean);
    protected_wrap(o: CCardReportFilter): CardReportFilter;
    protected_unwrap(o: CardReportFilter): CCardReportFilter;
    item(index: number): CardReportFilter;
    addAll(c: Collection<CardReportFilter>): boolean;
    addAll(index: number, c: Collection<CardReportFilter>): boolean;
    addRange(c: Collection<CardReportFilter>): void;
    size(): number;
    clone(): any;
}
type CCertExtension=any;
export declare class CertExtension {
    private obj;
    constructor(obj: CCertExtension);
    constructor(OID: string, value: Uint8Array, critical: boolean);
    unwrap(): CCertExtension;
    getCritical(): boolean;
    getOID(): string;
    getValue(): string;
    getValueB(): Uint8Array;
    clone(): any;
}
export declare class CertExtensionList extends WrappedList<CertExtension, CCertExtension> {
    constructor(list: any, readOnly: boolean);
    protected_wrap(o: CCertExtension): CertExtension;
    protected_unwrap(o: CertExtension): CCertExtension;
    item(index: number): CertExtension;
    addAll(c: Collection<CertExtension>): boolean;
    addAll(index: number, c: Collection<CertExtension>): boolean;
    addRange(c: Collection<CertExtension>): void;
    size(): number;
    clone(): any;
}
type CCertificate=any;
export declare enum CertStoreTypes {
    cstUser = 0,
    cstMachine = 1,
    cstPFXFile = 2,
    cstPFXBlob = 3,
    cstJKSFile = 4,
    cstJKSBlob = 5,
    cstPEMKeyFile = 6,
    cstPEMKeyBlob = 7,
    cstPublicKeyFile = 8,
    cstPublicKeyBlob = 9,
    cstSSHPublicKeyBlob = 10,
    cstP7BFile = 11,
    cstP7BBlob = 12,
    cstSSHPublicKeyFile = 13,
    cstPPKFile = 14,
    cstPPKBlob = 15,
    cstXMLFile = 16,
    cstXMLBlob = 17,
    cstJWKFile = 18,
    cstJWKBlob = 19,
    cstSecurityKey = 20,
    cstBCFKSFile = 21,
    cstBCFKSBlob = 22,
    cstPKCS11 = 23,
    cstAuto = 99
}
export declare class Certificate {
    private obj;
    constructor(obj: CCertificate);
    constructor();
    constructor(certificateFile: string);
    constructor(encoded: Uint8Array);
    constructor(storeType: CertStoreTypes, store: string, storePassword: string, subject: string);
    constructor(storeType: CertStoreTypes, store: string, storePassword: string, subject: string, configurationString: string);
    constructor(storeType: CertStoreTypes, store: string, storePassword: string, encoded: Uint8Array);
    constructor(storeType: CertStoreTypes, store: Uint8Array, storePassword: string, subject: string);
    constructor(storeType: CertStoreTypes, store: Uint8Array, storePassword: string, subject: string, configurationString: string);
    constructor(storeType: CertStoreTypes, store: Uint8Array, storePassword: string, encoded: Uint8Array);
    unwrap(): CCertificate;
    getEffectiveDate(): string;
    getExpirationDate(): string;
    getExtendedKeyUsage(): string;
    getFingerprint(): string;
    getFingerprintSHA1(): string;
    getFingerprintSHA256(): string;
    getIssuer(): string;
    getKeyPassword(): string;
    setKeyPassword(keyPassword: string): void;
    getPrivateKey(): string;
    getPrivateKeyAvailable(): boolean;
    getPrivateKeyContainer(): string;
    getPublicKey(): string;
    getPublicKeyAlgorithm(): string;
    getPublicKeyLength(): number;
    getSerialNumber(): string;
    getSignatureAlgorithm(): string;
    getStore(): string;
    getStoreB(): Uint8Array;
    setStore(store: Uint8Array | string): void;
    setStore(store: Uint8Array, offset: number, length: number): void;
    getStorePassword(): string;
    setStorePassword(storePassword: string): void;
    getStoreType(): CertStoreTypes;
    setStoreType(storeType: CertStoreTypes): void;
    getSubjectAltNames(): string;
    getThumbprintMD5(): string;
    getThumbprintSHA1(): string;
    getThumbprintSHA256(): string;
    getUsage(): string;
    getUsageFlags(): number;
    getVersion(): string;
    getSubject(): string;
    setSubject(subject: string): void;
    getEncoded(): string;
    getEncodedB(): Uint8Array;
    setEncoded(encoded: Uint8Array | string): void;
    setEncoded(encoded: Uint8Array, offset: number, length: number): void;
    clone(): any;
}
export declare class CertificateList extends WrappedList<Certificate, CCertificate> {
    constructor(list: any, readOnly: boolean);
    protected_wrap(o: CCertificate): Certificate;
    protected_unwrap(o: Certificate): CCertificate;
    item(index: number): Certificate;
    addAll(c: Collection<Certificate>): boolean;
    addAll(index: number, c: Collection<Certificate>): boolean;
    addRange(c: Collection<Certificate>): void;
    size(): number;
    clone(): any;
}
type CConnection=any;
export declare class Connection {
    private obj;
    constructor(obj: CConnection);
    unwrap(): CConnection;
    getAcceptData(): boolean;
    getBytesSent(): number;
    getConnected(): boolean;
    getConnectionId(): string;
    getEOL(): string;
    getEOLB(): Uint8Array;
    setEOL(EOL: Uint8Array | string): void;
    setEOL(EOL: Uint8Array, offset: number, length: number): void;
    getIdleTimeout(): number;
    setIdleTimeout(idleTimeout: number): void;
    getLocalAddress(): string;
    getMaxLineLength(): number;
    setMaxLineLength(maxLineLength: number): void;
    getReadyToSend(): boolean;
    getRecordLength(): number;
    getRemoteHost(): string;
    getRemotePort(): number;
    getSingleLineMode(): boolean;
    setSingleLineMode(singleLineMode: boolean): void;
    getTimeout(): number;
    setTimeout(timeout: number): void;
    getUserData(): string;
    getUserDataB(): Uint8Array;
    setUserData(userData: Uint8Array | string): void;
    setUserData(userData: Uint8Array, offset: number, length: number): void;
    clone(): any;
}
export declare class ConnectionMap extends WrappedMap<Connection, CConnection> {
    constructor(map: any, readOnly: boolean);
    protected_wrap(o: CConnection): Connection;
    protected_unwrap(o: Connection): CConnection;
    item(key: any): Connection;
    clone(): any;
}
type CDAVProperty=any;
export declare enum DAVPropertyOperations {
    opNone = 0,
    opSet = 1,
    opDelete = 2
}
export declare class DAVProperty {
    private obj;
    constructor(obj: CDAVProperty);
    constructor();
    constructor(name: string);
    unwrap(): CDAVProperty;
    getAttr(): string;
    setAttr(attr: string): void;
    getName(): string;
    setName(name: string): void;
    getNamespaceURI(): string;
    setNamespaceURI(namespaceURI: string): void;
    getOperation(): DAVPropertyOperations;
    setOperation(operation: DAVPropertyOperations): void;
    getStatus(): string;
    getValue(): string;
    setValue(value: string): void;
    clone(): any;
}
export declare class DAVPropertyList extends WrappedList<DAVProperty, CDAVProperty> {
    constructor(list: any, readOnly: boolean);
    protected_wrap(o: CDAVProperty): DAVProperty;
    protected_unwrap(o: DAVProperty): CDAVProperty;
    item(index: number): DAVProperty;
    addAll(c: Collection<DAVProperty>): boolean;
    addAll(index: number, c: Collection<DAVProperty>): boolean;
    addRange(c: Collection<DAVProperty>): void;
    size(): number;
    clone(): any;
}
type CDAVResource=any;
export declare class DAVResource {
    private obj;
    constructor(obj: CDAVResource);
    constructor();
    unwrap(): CDAVResource;
    getContentLanguage(): string;
    getContentLength(): number;
    getContentType(): string;
    getDisplayName(): string;
    getLastModified(): string;
    getResourceURI(): string;
    clone(): any;
}
export declare class DAVResourceList extends WrappedList<DAVResource, CDAVResource> {
    constructor(list: any, readOnly: boolean);
    protected_wrap(o: CDAVResource): DAVResource;
    protected_unwrap(o: DAVResource): CDAVResource;
    item(index: number): DAVResource;
    addAll(c: Collection<DAVResource>): boolean;
    addAll(index: number, c: Collection<DAVResource>): boolean;
    addRange(c: Collection<DAVResource>): void;
    size(): number;
    clone(): any;
}
type CDirEntry=any;
export declare class DirEntry {
    private obj;
    constructor(obj: CDirEntry);
    constructor();
    unwrap(): CDirEntry;
    getEntry(): string;
    getFileName(): string;
    getFileSize(): number;
    getFileTime(): string;
    getIsDir(): boolean;
    clone(): any;
}
export declare class DirEntryList extends WrappedList<DirEntry, CDirEntry> {
    constructor(list: any, readOnly: boolean);
    protected_wrap(o: CDirEntry): DirEntry;
    protected_unwrap(o: DirEntry): CDirEntry;
    item(index: number): DirEntry;
    addAll(c: Collection<DirEntry>): boolean;
    addAll(index: number, c: Collection<DirEntry>): boolean;
    addRange(c: Collection<DirEntry>): void;
    size(): number;
    clone(): any;
}
type CDNSRecord=any;
export declare enum DNSRecordTypes {
    rtAddress = 1,
    rtNS = 2,
    rtMD = 3,
    rtMF = 4,
    rtCName = 5,
    rtSOA = 6,
    rtMailBox = 7,
    rtMailGroup = 8,
    rtMR = 9,
    rtNULL = 10,
    rtWKS = 11,
    rtPointer = 12,
    rtHostInfo = 13,
    rtMailInfo = 14,
    rtMX = 15,
    rtText = 16,
    rtRP = 17,
    rtAFSDB = 18,
    rtX25 = 19,
    rtISDN = 20,
    rtRT = 21,
    rtAAAA = 28,
    rtSRV = 33,
    rtNAPTR = 35
}
export declare class DNSRecord {
    private obj;
    constructor(obj: CDNSRecord);
    constructor();
    unwrap(): CDNSRecord;
    getDomain(): string;
    getFieldCount(): number;
    getFieldIndex(): number;
    setFieldIndex(fieldIndex: number): void;
    getFieldName(): string;
    getFieldValue(): string;
    getFieldValueB(): Uint8Array;
    getRecordData(): string;
    getRecordDataB(): Uint8Array;
    getRecordType(): DNSRecordTypes;
    getRecordTypeName(): string;
    getTTL(): number;
    clone(): any;
}
export declare class DNSRecordList extends WrappedList<DNSRecord, CDNSRecord> {
    constructor(list: any, readOnly: boolean);
    protected_wrap(o: CDNSRecord): DNSRecord;
    protected_unwrap(o: DNSRecord): CDNSRecord;
    item(index: number): DNSRecord;
    addAll(c: Collection<DNSRecord>): boolean;
    addAll(index: number, c: Collection<DNSRecord>): boolean;
    addRange(c: Collection<DNSRecord>): void;
    size(): number;
    clone(): any;
}
type CDTLSConnection=any;
export declare class DTLSConnection {
    private obj;
    constructor(obj: CDTLSConnection);
    unwrap(): CDTLSConnection;
    getConnectionId(): string;
    getLocalHost(): string;
    getLocalPort(): number;
    getRemoteHost(): string;
    getRemotePort(): number;
    clone(): any;
}
export declare class DTLSConnectionMap extends WrappedMap<DTLSConnection, CDTLSConnection> {
    constructor(map: any, readOnly: boolean);
    protected_wrap(o: CDTLSConnection): DTLSConnection;
    protected_unwrap(o: DTLSConnection): CDTLSConnection;
    item(key: any): DTLSConnection;
    clone(): any;
}
type CFileAttachment=any;
export declare class FileAttachment {
    private obj;
    constructor(obj: CFileAttachment);
    constructor();
    constructor(fileName: string);
    constructor(name: string, fileName: string);
    unwrap(): CFileAttachment;
    getData(): string;
    getDataB(): Uint8Array;
    setData(data: Uint8Array | string): void;
    setData(data: Uint8Array, offset: number, length: number): void;
    getFileName(): string;
    setFileName(fileName: string): void;
    getName(): string;
    setName(name: string): void;
    clone(): any;
}
export declare class FileAttachmentList extends WrappedList<FileAttachment, CFileAttachment> {
    constructor(list: any, readOnly: boolean);
    protected_wrap(o: CFileAttachment): FileAttachment;
    protected_unwrap(o: FileAttachment): CFileAttachment;
    item(index: number): FileAttachment;
    addAll(c: Collection<FileAttachment>): boolean;
    addAll(index: number, c: Collection<FileAttachment>): boolean;
    addRange(c: Collection<FileAttachment>): void;
    size(): number;
    clone(): any;
}
type CFileVar=any;
export declare class FileVar {
    private obj;
    constructor(obj: CFileVar);
    constructor();
    constructor(name: string, fileName: string);
    constructor(name: string, inputData: Uint8Array);
    unwrap(): CFileVar;
    getContentType(): string;
    setContentType(contentType: string): void;
    getFileName(): string;
    setFileName(fileName: string): void;
    setInputData(inputData: Uint8Array | string): void;
    setInputData(inputData: Uint8Array, offset: number, length: number): void;
    getName(): string;
    setName(name: string): void;
    clone(): any;
}
export declare class FileVarList extends WrappedList<FileVar, CFileVar> {
    constructor(list: any, readOnly: boolean);
    protected_wrap(o: CFileVar): FileVar;
    protected_unwrap(o: FileVar): CFileVar;
    item(index: number): FileVar;
    addAll(c: Collection<FileVar>): boolean;
    addAll(index: number, c: Collection<FileVar>): boolean;
    addRange(c: Collection<FileVar>): void;
    size(): number;
    clone(): any;
}
type CFirewall=any;
export declare enum FirewallTypes {
    fwNone = 0,
    fwTunnel = 1,
    fwSOCKS4 = 2,
    fwSOCKS5 = 3,
    fwSOCKS4A = 10
}
export declare class Firewall {
    private obj;
    constructor(obj: CFirewall);
    constructor();
    unwrap(): CFirewall;
    getAutoDetect(): boolean;
    setAutoDetect(autoDetect: boolean): void;
    getFirewallType(): FirewallTypes;
    setFirewallType(firewallType: FirewallTypes): void;
    getHost(): string;
    setHost(host: string): void;
    getPassword(): string;
    setPassword(password: string): void;
    getPort(): number;
    setPort(port: number): void;
    getUser(): string;
    setUser(user: string): void;
    clone(): any;
}
export declare class FirewallList extends WrappedList<Firewall, CFirewall> {
    constructor(list: any, readOnly: boolean);
    protected_wrap(o: CFirewall): Firewall;
    protected_unwrap(o: Firewall): CFirewall;
    item(index: number): Firewall;
    addAll(c: Collection<Firewall>): boolean;
    addAll(index: number, c: Collection<Firewall>): boolean;
    addRange(c: Collection<Firewall>): void;
    size(): number;
    clone(): any;
}
type CFormVar=any;
export declare class FormVar {
    private obj;
    constructor(obj: CFormVar);
    constructor();
    constructor(name: string, value: string);
    unwrap(): CFormVar;
    getContentType(): string;
    setContentType(contentType: string): void;
    getName(): string;
    setName(name: string): void;
    getValue(): string;
    setValue(value: string): void;
    clone(): any;
}
export declare class FormVarList extends WrappedList<FormVar, CFormVar> {
    constructor(list: any, readOnly: boolean);
    protected_wrap(o: CFormVar): FormVar;
    protected_unwrap(o: FormVar): CFormVar;
    item(index: number): FormVar;
    addAll(c: Collection<FormVar>): boolean;
    addAll(index: number, c: Collection<FormVar>): boolean;
    addRange(c: Collection<FormVar>): void;
    size(): number;
    clone(): any;
}
type CFTPConnection=any;
export declare class FTPConnection {
    private obj;
    constructor(obj: CFTPConnection);
    unwrap(): CFTPConnection;
    getClientAddress(): string;
    getClientPort(): number;
    getCurrentDirectory(): string;
    getCurrentFileName(): string;
    getFileData(): string;
    getFileDataB(): Uint8Array;
    setFileData(fileData: Uint8Array | string): void;
    setFileData(fileData: Uint8Array, offset: number, length: number): void;
    getId(): string;
    getIdle(): boolean;
    getLastCommand(): string;
    getRootDir(): string;
    getTimeout(): number;
    getTransferMode(): number;
    getUserName(): string;
    clone(): any;
}
export declare class FTPConnectionMap extends WrappedMap<FTPConnection, CFTPConnection> {
    constructor(map: any, readOnly: boolean);
    protected_wrap(o: CFTPConnection): FTPConnection;
    protected_unwrap(o: FTPConnection): CFTPConnection;
    item(key: any): FTPConnection;
    clone(): any;
}
type CFTPUser=any;
export declare class FTPUser {
    private obj;
    constructor(obj: CFTPUser);
    constructor();
    constructor(name: string, password: string, rootDir: string, homeDir: string, ACL: number);
    unwrap(): CFTPUser;
    getACL(): number;
    getConnected(): boolean;
    getHomeDir(): string;
    getName(): string;
    getPassword(): string;
    getRootDir(): string;
    clone(): any;
}
export declare class FTPUserList extends WrappedList<FTPUser, CFTPUser> {
    constructor(list: any, readOnly: boolean);
    protected_wrap(o: CFTPUser): FTPUser;
    protected_unwrap(o: FTPUser): CFTPUser;
    item(index: number): FTPUser;
    addAll(c: Collection<FTPUser>): boolean;
    addAll(index: number, c: Collection<FTPUser>): boolean;
    addRange(c: Collection<FTPUser>): void;
    size(): number;
    clone(): any;
}
type CGroupInfo=any;
export declare class GroupInfo {
    private obj;
    constructor(obj: CGroupInfo);
    constructor();
    unwrap(): CGroupInfo;
    getCanPost(): boolean;
    getFirstArticle(): number;
    getGroup(): string;
    getLastArticle(): number;
    clone(): any;
}
export declare class GroupInfoList extends WrappedList<GroupInfo, CGroupInfo> {
    constructor(list: any, readOnly: boolean);
    protected_wrap(o: CGroupInfo): GroupInfo;
    protected_unwrap(o: GroupInfo): CGroupInfo;
    item(index: number): GroupInfo;
    addAll(c: Collection<GroupInfo>): boolean;
    addAll(index: number, c: Collection<GroupInfo>): boolean;
    addRange(c: Collection<GroupInfo>): void;
    size(): number;
    clone(): any;
}
type CHeader=any;
export declare class Header {
    private obj;
    constructor(obj: CHeader);
    constructor();
    constructor(field: string, value: string);
    unwrap(): CHeader;
    getField(): string;
    setField(field: string): void;
    getValue(): string;
    setValue(value: string): void;
    clone(): any;
}
export declare class HeaderList extends WrappedList<Header, CHeader> {
    constructor(list: any, readOnly: boolean);
    protected_wrap(o: CHeader): Header;
    protected_unwrap(o: Header): CHeader;
    item(index: number): Header;
    addAll(c: Collection<Header>): boolean;
    addAll(index: number, c: Collection<Header>): boolean;
    addRange(c: Collection<Header>): void;
    size(): number;
    clone(): any;
}
type CHTMLImage=any;
export declare class HTMLImage {
    private obj;
    constructor(obj: CHTMLImage);
    constructor();
    constructor(file: string);
    unwrap(): CHTMLImage;
    getData(): string;
    getDataB(): Uint8Array;
    setData(data: Uint8Array | string): void;
    setData(data: Uint8Array, offset: number, length: number): void;
    getFile(): string;
    setFile(file: string): void;
    getId(): string;
    setId(id: string): void;
    getImageType(): string;
    setImageType(imageType: string): void;
    clone(): any;
}
export declare class HTMLImageList extends WrappedList<HTMLImage, CHTMLImage> {
    constructor(list: any, readOnly: boolean);
    protected_wrap(o: CHTMLImage): HTMLImage;
    protected_unwrap(o: HTMLImage): CHTMLImage;
    item(index: number): HTMLImage;
    addAll(c: Collection<HTMLImage>): boolean;
    addAll(index: number, c: Collection<HTMLImage>): boolean;
    addRange(c: Collection<HTMLImage>): void;
    size(): number;
    clone(): any;
}
type CHTTPConnection=any;
export declare class HTTPConnection {
    private obj;
    constructor(obj: CHTTPConnection);
    unwrap(): CHTTPConnection;
    getAcceptData(): boolean;
    getAuthDone(): boolean;
    setAuthDone(authDone: boolean): void;
    getAuthMethod(): string;
    getAuthMethods(): string;
    setAuthMethods(authMethods: string): void;
    getConnected(): boolean;
    getConnectionId(): string;
    getLocalAddress(): string;
    getRemoteHost(): string;
    getRemotePort(): number;
    getRequestBody(): string;
    getRequestBodyB(): Uint8Array;
    getRequestURI(): string;
    getResponseBody(): string;
    getResponseBodyB(): Uint8Array;
    setResponseBody(responseBody: Uint8Array | string): void;
    setResponseBody(responseBody: Uint8Array, offset: number, length: number): void;
    getResponseCompression(): number;
    setResponseCompression(responseCompression: number): void;
    getResponseReadyToSend(): boolean;
    getResponseStatus(): number;
    setResponseStatus(responseStatus: number): void;
    getTimeout(): number;
    setTimeout(timeout: number): void;
    getUser(): string;
    clone(): any;
}
export declare class HTTPConnectionMap extends WrappedMap<HTTPConnection, CHTTPConnection> {
    constructor(map: any, readOnly: boolean);
    protected_wrap(o: CHTTPConnection): HTTPConnection;
    protected_unwrap(o: HTTPConnection): CHTTPConnection;
    item(key: any): HTTPConnection;
    clone(): any;
}
type CHTTPCookie=any;
export declare class HTTPCookie {
    private obj;
    constructor(obj: CHTTPCookie);
    constructor();
    constructor(name: string, value: string);
    unwrap(): CHTTPCookie;
    getDomain(): string;
    getExpiration(): string;
    getName(): string;
    setName(name: string): void;
    getPath(): string;
    getSecure(): boolean;
    getValue(): string;
    setValue(value: string): void;
    clone(): any;
}
export declare class HTTPCookieList extends WrappedList<HTTPCookie, CHTTPCookie> {
    constructor(list: any, readOnly: boolean);
    protected_wrap(o: CHTTPCookie): HTTPCookie;
    protected_unwrap(o: HTTPCookie): CHTTPCookie;
    item(index: number): HTTPCookie;
    addAll(c: Collection<HTTPCookie>): boolean;
    addAll(index: number, c: Collection<HTTPCookie>): boolean;
    addRange(c: Collection<HTTPCookie>): void;
    size(): number;
    clone(): any;
}
type CJSONElement=any;
export declare enum TXElementTypes {
    etObject = 0,
    etArray = 1,
    etString = 2,
    etNumber = 3,
    etBool = 4,
    etNull = 5
}
export declare class JSONElement {
    private obj;
    constructor(obj: CJSONElement);
    constructor();
    unwrap(): CJSONElement;
    getElementType(): TXElementTypes;
    getName(): string;
    getXText(): string;
    clone(): any;
}
export declare class JSONElementList extends WrappedList<JSONElement, CJSONElement> {
    constructor(list: any, readOnly: boolean);
    protected_wrap(o: CJSONElement): JSONElement;
    protected_unwrap(o: JSONElement): CJSONElement;
    item(index: number): JSONElement;
    addAll(c: Collection<JSONElement>): boolean;
    addAll(index: number, c: Collection<JSONElement>): boolean;
    addRange(c: Collection<JSONElement>): void;
    size(): number;
    clone(): any;
}
type CLDAPAttribute=any;
export declare enum LDAPAttributeModOps {
    amoAdd = 0,
    amoDelete = 1,
    amoReplace = 2
}
export declare class LDAPAttribute {
    private obj;
    constructor(obj: CLDAPAttribute);
    constructor();
    constructor(attributeType: string);
    constructor(attributeType: string, value: string);
    constructor(attributeType: string, value: string, modOp: LDAPAttributeModOps);
    unwrap(): CLDAPAttribute;
    getAttributeType(): string;
    setAttributeType(attributeType: string): void;
    getModOp(): LDAPAttributeModOps;
    setModOp(modOp: LDAPAttributeModOps): void;
    getValue(): string;
    getValueB(): Uint8Array;
    setValue(value: Uint8Array | string): void;
    setValue(value: Uint8Array, offset: number, length: number): void;
    clone(): any;
}
export declare class LDAPAttributeList extends WrappedList<LDAPAttribute, CLDAPAttribute> {
    constructor(list: any, readOnly: boolean);
    protected_wrap(o: CLDAPAttribute): LDAPAttribute;
    protected_unwrap(o: LDAPAttribute): CLDAPAttribute;
    item(index: number): LDAPAttribute;
    addAll(c: Collection<LDAPAttribute>): boolean;
    addAll(index: number, c: Collection<LDAPAttribute>): boolean;
    addRange(c: Collection<LDAPAttribute>): void;
    size(): number;
    clone(): any;
}
type CLDAPReference=any;
export declare class LDAPReference {
    private obj;
    constructor(obj: CLDAPReference);
    constructor();
    unwrap(): CLDAPReference;
    getURL(): string;
    clone(): any;
}
export declare class LDAPReferenceList extends WrappedList<LDAPReference, CLDAPReference> {
    constructor(list: any, readOnly: boolean);
    protected_wrap(o: CLDAPReference): LDAPReference;
    protected_unwrap(o: LDAPReference): CLDAPReference;
    item(index: number): LDAPReference;
    addAll(c: Collection<LDAPReference>): boolean;
    addAll(index: number, c: Collection<LDAPReference>): boolean;
    addRange(c: Collection<LDAPReference>): void;
    size(): number;
    clone(): any;
}
type CMailbox=any;
export declare class Mailbox {
    private obj;
    constructor(obj: CMailbox);
    constructor();
    unwrap(): CMailbox;
    getFlags(): string;
    getName(): string;
    getSeparator(): string;
    clone(): any;
}
export declare class MailboxList extends WrappedList<Mailbox, CMailbox> {
    constructor(list: any, readOnly: boolean);
    protected_wrap(o: CMailbox): Mailbox;
    protected_unwrap(o: Mailbox): CMailbox;
    item(index: number): Mailbox;
    addAll(c: Collection<Mailbox>): boolean;
    addAll(index: number, c: Collection<Mailbox>): boolean;
    addRange(c: Collection<Mailbox>): void;
    size(): number;
    clone(): any;
}
type CMessageInfo=any;
export declare class MessageInfo {
    private obj;
    constructor(obj: CMessageInfo);
    constructor();
    unwrap(): CMessageInfo;
    getDate(): string;
    getFlags(): string;
    getFrom(): string;
    getMessageId(): string;
    getSize(): number;
    getSubject(): string;
    clone(): any;
}
export declare class MessageInfoList extends WrappedList<MessageInfo, CMessageInfo> {
    constructor(list: any, readOnly: boolean);
    protected_wrap(o: CMessageInfo): MessageInfo;
    protected_unwrap(o: MessageInfo): CMessageInfo;
    item(index: number): MessageInfo;
    addAll(c: Collection<MessageInfo>): boolean;
    addAll(index: number, c: Collection<MessageInfo>): boolean;
    addRange(c: Collection<MessageInfo>): void;
    size(): number;
    clone(): any;
}
type CMessagePart=any;
export declare class MessagePart {
    private obj;
    constructor(obj: CMessagePart);
    constructor();
    unwrap(): CMessagePart;
    getContentDisposition(): string;
    getContentEncoding(): string;
    getContentId(): string;
    getContentType(): string;
    getFileName(): string;
    getId(): string;
    getMultipartMode(): string;
    getParameters(): string;
    getSize(): number;
    clone(): any;
}
export declare class MessagePartList extends WrappedList<MessagePart, CMessagePart> {
    constructor(list: any, readOnly: boolean);
    protected_wrap(o: CMessagePart): MessagePart;
    protected_unwrap(o: MessagePart): CMessagePart;
    item(index: number): MessagePart;
    addAll(c: Collection<MessagePart>): boolean;
    addAll(index: number, c: Collection<MessagePart>): boolean;
    addRange(c: Collection<MessagePart>): void;
    size(): number;
    clone(): any;
}
type CMessageRecipient=any;
export declare enum EmailRecipientTypes {
    rtTo = 0,
    rtCc = 1,
    rtBCc = 2
}
export declare class MessageRecipient {
    private obj;
    constructor(obj: CMessageRecipient);
    constructor();
    constructor(address: string);
    constructor(address: string, recipientType: number);
    unwrap(): CMessageRecipient;
    getAddress(): string;
    setAddress(address: string): void;
    getName(): string;
    setName(name: string): void;
    getOptions(): string;
    setOptions(options: string): void;
    getRecipientType(): EmailRecipientTypes;
    setRecipientType(recipientType: EmailRecipientTypes): void;
    clone(): any;
}
export declare class MessageRecipientList extends WrappedList<MessageRecipient, CMessageRecipient> {
    constructor(list: any, readOnly: boolean);
    protected_wrap(o: CMessageRecipient): MessageRecipient;
    protected_unwrap(o: MessageRecipient): CMessageRecipient;
    item(index: number): MessageRecipient;
    addAll(c: Collection<MessageRecipient>): boolean;
    addAll(index: number, c: Collection<MessageRecipient>): boolean;
    addRange(c: Collection<MessageRecipient>): void;
    size(): number;
    clone(): any;
}
type CMIMEPart=any;
export declare enum MIMEPartEncodings {
    pe7Bit = 0,
    peQuotedPrintable = 1,
    peBase64 = 2,
    pe8Bit = 3,
    peBinary = 4,
    peUUEncode = 5
}
export declare class MIMEPart {
    private obj;
    constructor(obj: CMIMEPart);
    constructor();
    constructor(decodedFile: string);
    constructor(decodedString: Uint8Array);
    unwrap(): CMIMEPart;
    getContentDisposition(): string;
    setContentDisposition(contentDisposition: string): void;
    getContentDispositionAttr(): string;
    setContentDispositionAttr(contentDispositionAttr: string): void;
    getContentId(): string;
    setContentId(contentId: string): void;
    getContentType(): string;
    setContentType(contentType: string): void;
    getContentTypeAttr(): string;
    setContentTypeAttr(contentTypeAttr: string): void;
    setDecodedFile(decodedFile: string): void;
    getDecodedString(): string;
    getDecodedStringB(): Uint8Array;
    setDecodedString(decodedString: Uint8Array | string): void;
    setDecodedString(decodedString: Uint8Array, offset: number, length: number): void;
    getEncoding(): MIMEPartEncodings;
    setEncoding(encoding: MIMEPartEncodings): void;
    getFileName(): string;
    setFileName(fileName: string): void;
    getHeaders(): string;
    setHeaders(headers: string): void;
    getName(): string;
    setName(name: string): void;
    getSize(): number;
    clone(): any;
}
export declare class MIMEPartList extends WrappedList<MIMEPart, CMIMEPart> {
    constructor(list: any, readOnly: boolean);
    protected_wrap(o: CMIMEPart): MIMEPart;
    protected_unwrap(o: MIMEPart): CMIMEPart;
    item(index: number): MIMEPart;
    addAll(c: Collection<MIMEPart>): boolean;
    addAll(index: number, c: Collection<MIMEPart>): boolean;
    addRange(c: Collection<MIMEPart>): void;
    size(): number;
    clone(): any;
}
type COAuthParam=any;
export declare class OAuthParam {
    private obj;
    constructor(obj: COAuthParam);
    constructor();
    constructor(name: string, value: string);
    unwrap(): COAuthParam;
    getName(): string;
    setName(name: string): void;
    getValue(): string;
    setValue(value: string): void;
    clone(): any;
}
export declare class OAuthParamList extends WrappedList<OAuthParam, COAuthParam> {
    constructor(list: any, readOnly: boolean);
    protected_wrap(o: COAuthParam): OAuthParam;
    protected_unwrap(o: OAuthParam): COAuthParam;
    item(index: number): OAuthParam;
    addAll(c: Collection<OAuthParam>): boolean;
    addAll(index: number, c: Collection<OAuthParam>): boolean;
    addRange(c: Collection<OAuthParam>): void;
    size(): number;
    clone(): any;
}
type CODataEntryLink=any;
export declare class ODataEntryLink {
    private obj;
    constructor(obj: CODataEntryLink);
    constructor();
    unwrap(): CODataEntryLink;
    getResourcePath(): string;
    getTitle(): string;
    clone(): any;
}
export declare class ODataEntryLinkList extends WrappedList<ODataEntryLink, CODataEntryLink> {
    constructor(list: any, readOnly: boolean);
    protected_wrap(o: CODataEntryLink): ODataEntryLink;
    protected_unwrap(o: ODataEntryLink): CODataEntryLink;
    item(index: number): ODataEntryLink;
    addAll(c: Collection<ODataEntryLink>): boolean;
    addAll(index: number, c: Collection<ODataEntryLink>): boolean;
    addRange(c: Collection<ODataEntryLink>): void;
    size(): number;
    clone(): any;
}
type CODataEntryProperty=any;
export declare class ODataEntryProperty {
    private obj;
    constructor(obj: CODataEntryProperty);
    constructor();
    constructor(name: string, value: string);
    constructor(name: string, value: string, type: string);
    unwrap(): CODataEntryProperty;
    getAttributes(): string;
    setAttributes(attributes: string): void;
    getIsNull(): boolean;
    setIsNull(isNull: boolean): void;
    getName(): string;
    setName(name: string): void;
    getType(): string;
    setType(type: string): void;
    getValue(): string;
    setValue(value: string): void;
    getXPath(): string;
    clone(): any;
}
export declare class ODataEntryPropertyList extends WrappedList<ODataEntryProperty, CODataEntryProperty> {
    constructor(list: any, readOnly: boolean);
    protected_wrap(o: CODataEntryProperty): ODataEntryProperty;
    protected_unwrap(o: ODataEntryProperty): CODataEntryProperty;
    item(index: number): ODataEntryProperty;
    addAll(c: Collection<ODataEntryProperty>): boolean;
    addAll(index: number, c: Collection<ODataEntryProperty>): boolean;
    addRange(c: Collection<ODataEntryProperty>): void;
    size(): number;
    clone(): any;
}
type CODataSchemaAssociation=any;
export declare enum AssociationMultiplicities {
    nmZeroOne = 0,
    nmOne = 1,
    nmMany = 2
}
export declare enum AssociationDeleteActions {
    daNone = 0,
    daCascade = 1,
    daSetNull = 2,
    daSetDefault = 3
}
export declare class ODataSchemaAssociation {
    private obj;
    constructor(obj: CODataSchemaAssociation);
    constructor();
    unwrap(): CODataSchemaAssociation;
    getContainsTarget(): boolean;
    getDescription(): string;
    getFromRole(): string;
    getFromRoleDescription(): string;
    getFromRoleEntity(): string;
    getFromRoleMultiplicity(): AssociationMultiplicities;
    getFromRoleSummary(): string;
    getName(): string;
    getNullable(): boolean;
    getOnDelete(): AssociationDeleteActions;
    getPartner(): string;
    getRefConstraintCount(): number;
    getRefConstraintIndex(): number;
    setRefConstraintIndex(refConstraintIndex: number): void;
    getRefConstraintProperty(): string;
    getRefConstraintReferencedProperty(): string;
    getRelationship(): string;
    getSummary(): string;
    getToRole(): string;
    getToRoleDescription(): string;
    getToRoleEntity(): string;
    getToRoleMultiplicity(): AssociationMultiplicities;
    getToRoleSummary(): string;
    getType(): string;
    clone(): any;
}
export declare class ODataSchemaAssociationList extends WrappedList<ODataSchemaAssociation, CODataSchemaAssociation> {
    constructor(list: any, readOnly: boolean);
    protected_wrap(o: CODataSchemaAssociation): ODataSchemaAssociation;
    protected_unwrap(o: ODataSchemaAssociation): CODataSchemaAssociation;
    item(index: number): ODataSchemaAssociation;
    addAll(c: Collection<ODataSchemaAssociation>): boolean;
    addAll(index: number, c: Collection<ODataSchemaAssociation>): boolean;
    addRange(c: Collection<ODataSchemaAssociation>): void;
    size(): number;
    clone(): any;
}
type CODataSchemaEntity=any;
export declare class ODataSchemaEntity {
    private obj;
    constructor(obj: CODataSchemaEntity);
    constructor();
    unwrap(): CODataSchemaEntity;
    getDescription(): string;
    getName(): string;
    getSummary(): string;
    clone(): any;
}
export declare class ODataSchemaEntityList extends WrappedList<ODataSchemaEntity, CODataSchemaEntity> {
    constructor(list: any, readOnly: boolean);
    protected_wrap(o: CODataSchemaEntity): ODataSchemaEntity;
    protected_unwrap(o: ODataSchemaEntity): CODataSchemaEntity;
    item(index: number): ODataSchemaEntity;
    addAll(c: Collection<ODataSchemaEntity>): boolean;
    addAll(index: number, c: Collection<ODataSchemaEntity>): boolean;
    addRange(c: Collection<ODataSchemaEntity>): void;
    size(): number;
    clone(): any;
}
type CODataSchemaProperty=any;
export declare class ODataSchemaProperty {
    private obj;
    constructor(obj: CODataSchemaProperty);
    constructor();
    unwrap(): CODataSchemaProperty;
    getAttributes(): string;
    getDescription(): string;
    getIsComplexType(): boolean;
    getName(): string;
    getNullable(): boolean;
    getSummary(): string;
    getType(): string;
    clone(): any;
}
export declare class ODataSchemaPropertyList extends WrappedList<ODataSchemaProperty, CODataSchemaProperty> {
    constructor(list: any, readOnly: boolean);
    protected_wrap(o: CODataSchemaProperty): ODataSchemaProperty;
    protected_unwrap(o: ODataSchemaProperty): CODataSchemaProperty;
    item(index: number): ODataSchemaProperty;
    addAll(c: Collection<ODataSchemaProperty>): boolean;
    addAll(index: number, c: Collection<ODataSchemaProperty>): boolean;
    addRange(c: Collection<ODataSchemaProperty>): void;
    size(): number;
    clone(): any;
}
type CProxy=any;
export declare enum ProxyAuthSchemes {
    authBasic = 0,
    authDigest = 1,
    authProprietary = 2,
    authNone = 3,
    authNtlm = 4,
    authNegotiate = 5
}
export declare enum ProxySSLTypes {
    psAutomatic = 0,
    psAlways = 1,
    psNever = 2,
    psTunnel = 3
}
export declare class Proxy {
    private obj;
    constructor(obj: CProxy);
    constructor();
    constructor(_server: string, port: number);
    constructor(_server: string, port: number, user: string, password: string);
    unwrap(): CProxy;
    getAuthScheme(): ProxyAuthSchemes;
    setAuthScheme(authScheme: ProxyAuthSchemes): void;
    getAutoDetect(): boolean;
    setAutoDetect(autoDetect: boolean): void;
    getPassword(): string;
    setPassword(password: string): void;
    getPort(): number;
    setPort(port: number): void;
    getServer(): string;
    setServer(_server: string): void;
    getSSL(): ProxySSLTypes;
    setSSL(SSL: ProxySSLTypes): void;
    getUser(): string;
    setUser(user: string): void;
    clone(): any;
}
export declare class ProxyList extends WrappedList<Proxy, CProxy> {
    constructor(list: any, readOnly: boolean);
    protected_wrap(o: CProxy): Proxy;
    protected_unwrap(o: Proxy): CProxy;
    item(index: number): Proxy;
    addAll(c: Collection<Proxy>): boolean;
    addAll(index: number, c: Collection<Proxy>): boolean;
    addRange(c: Collection<Proxy>): void;
    size(): number;
    clone(): any;
}
type CRSSChannel=any;
export declare class RSSChannel {
    private obj;
    constructor(obj: CRSSChannel);
    constructor();
    constructor(title: string, description: string);
    unwrap(): CRSSChannel;
    getCategory(): string;
    setCategory(category: string): void;
    getCategoryDomain(): string;
    setCategoryDomain(categoryDomain: string): void;
    getCopyright(): string;
    setCopyright(copyright: string): void;
    getDescription(): string;
    setDescription(description: string): void;
    getDocs(): string;
    setDocs(docs: string): void;
    getGenerator(): string;
    setGenerator(generator: string): void;
    getImageDescription(): string;
    setImageDescription(imageDescription: string): void;
    getImageHeight(): string;
    setImageHeight(imageHeight: string): void;
    getImageLink(): string;
    setImageLink(imageLink: string): void;
    getImageTitle(): string;
    setImageTitle(imageTitle: string): void;
    getImageUrl(): string;
    setImageUrl(imageUrl: string): void;
    getImageWidth(): string;
    setImageWidth(imageWidth: string): void;
    getLanguage(): string;
    setLanguage(language: string): void;
    getLastBuildDate(): string;
    setLastBuildDate(lastBuildDate: string): void;
    getLink(): string;
    setLink(link: string): void;
    getManagingEditor(): string;
    setManagingEditor(managingEditor: string): void;
    getPubDate(): string;
    setPubDate(pubDate: string): void;
    getSkipDays(): string;
    setSkipDays(skipDays: string): void;
    getSkipHours(): string;
    setSkipHours(skipHours: string): void;
    getTitle(): string;
    setTitle(title: string): void;
    getTtl(): string;
    setTtl(ttl: string): void;
    getWebMaster(): string;
    setWebMaster(webMaster: string): void;
    clone(): any;
}
export declare class RSSChannelList extends WrappedList<RSSChannel, CRSSChannel> {
    constructor(list: any, readOnly: boolean);
    protected_wrap(o: CRSSChannel): RSSChannel;
    protected_unwrap(o: RSSChannel): CRSSChannel;
    item(index: number): RSSChannel;
    addAll(c: Collection<RSSChannel>): boolean;
    addAll(index: number, c: Collection<RSSChannel>): boolean;
    addRange(c: Collection<RSSChannel>): void;
    size(): number;
    clone(): any;
}
type CRSSItem=any;
export declare class RSSItem {
    private obj;
    constructor(obj: CRSSItem);
    constructor();
    constructor(title: string, description: string);
    unwrap(): CRSSItem;
    getAuthor(): string;
    setAuthor(author: string): void;
    getCategory(): string;
    setCategory(category: string): void;
    getCategoryDomain(): string;
    setCategoryDomain(categoryDomain: string): void;
    getComments(): string;
    setComments(comments: string): void;
    getDescription(): string;
    setDescription(description: string): void;
    getEnclosureLength(): string;
    setEnclosureLength(enclosureLength: string): void;
    getEnclosureType(): string;
    setEnclosureType(enclosureType: string): void;
    getEnclosureUrl(): string;
    setEnclosureUrl(enclosureUrl: string): void;
    getGuid(): string;
    setGuid(guid: string): void;
    getGuidIsPermaLink(): boolean;
    setGuidIsPermaLink(guidIsPermaLink: boolean): void;
    getItemXML(): string;
    setItemXML(itemXML: string): void;
    getLink(): string;
    setLink(link: string): void;
    getPubDate(): string;
    setPubDate(pubDate: string): void;
    getSource(): string;
    setSource(source: string): void;
    getSourceURL(): string;
    setSourceURL(sourceURL: string): void;
    getTitle(): string;
    setTitle(title: string): void;
    clone(): any;
}
export declare class RSSItemList extends WrappedList<RSSItem, CRSSItem> {
    constructor(list: any, readOnly: boolean);
    protected_wrap(o: CRSSItem): RSSItem;
    protected_unwrap(o: RSSItem): CRSSItem;
    item(index: number): RSSItem;
    addAll(c: Collection<RSSItem>): boolean;
    addAll(index: number, c: Collection<RSSItem>): boolean;
    addRange(c: Collection<RSSItem>): void;
    size(): number;
    clone(): any;
}
type CS3Bucket=any;
export declare class S3Bucket {
    private obj;
    constructor(obj: CS3Bucket);
    constructor();
    constructor(name: string, creationDate: string, ownerId: string, ownerDisplayName: string);
    unwrap(): CS3Bucket;
    getCreationDate(): string;
    getName(): string;
    getOwnerDisplayName(): string;
    getOwnerId(): string;
    clone(): any;
}
export declare class S3BucketList extends WrappedList<S3Bucket, CS3Bucket> {
    constructor(list: any, readOnly: boolean);
    protected_wrap(o: CS3Bucket): S3Bucket;
    protected_unwrap(o: S3Bucket): CS3Bucket;
    item(index: number): S3Bucket;
    addAll(c: Collection<S3Bucket>): boolean;
    addAll(index: number, c: Collection<S3Bucket>): boolean;
    addRange(c: Collection<S3Bucket>): void;
    size(): number;
    clone(): any;
}
type CS3Metadata=any;
export declare class S3Metadata {
    private obj;
    constructor(obj: CS3Metadata);
    constructor();
    constructor(name: string, value: string);
    unwrap(): CS3Metadata;
    getName(): string;
    setName(name: string): void;
    getValue(): string;
    setValue(value: string): void;
    clone(): any;
}
export declare class S3MetadataList extends WrappedList<S3Metadata, CS3Metadata> {
    constructor(list: any, readOnly: boolean);
    protected_wrap(o: CS3Metadata): S3Metadata;
    protected_unwrap(o: S3Metadata): CS3Metadata;
    item(index: number): S3Metadata;
    addAll(c: Collection<S3Metadata>): boolean;
    addAll(index: number, c: Collection<S3Metadata>): boolean;
    addRange(c: Collection<S3Metadata>): void;
    size(): number;
    clone(): any;
}
type CS3Object=any;
export declare class S3Object {
    private obj;
    constructor(obj: CS3Object);
    constructor();
    constructor(name: string, lastModified: string, size: number, storageClass: string, ETag: string, ownerId: string, ownerDisplayName: string, uploadId: string);
    unwrap(): CS3Object;
    getDeleted(): boolean;
    getETag(): string;
    getLastModified(): string;
    getLatestVersion(): boolean;
    getName(): string;
    getOwnerDisplayName(): string;
    getOwnerId(): string;
    getSize(): number;
    getStorageClass(): string;
    getUploadId(): string;
    getVersionId(): string;
    clone(): any;
}
export declare class S3ObjectList extends WrappedList<S3Object, CS3Object> {
    constructor(list: any, readOnly: boolean);
    protected_wrap(o: CS3Object): S3Object;
    protected_unwrap(o: S3Object): CS3Object;
    item(index: number): S3Object;
    addAll(c: Collection<S3Object>): boolean;
    addAll(index: number, c: Collection<S3Object>): boolean;
    addRange(c: Collection<S3Object>): void;
    size(): number;
    clone(): any;
}
type CS3Part=any;
export declare class S3Part {
    private obj;
    constructor(obj: CS3Part);
    constructor();
    constructor(partNumber: number, objectName: string, lastModified: string, size: number, ETag: string, ownerId: string, ownerDisplayName: string);
    unwrap(): CS3Part;
    getETag(): string;
    getLastModified(): string;
    getObjectName(): string;
    getOwnerDisplayName(): string;
    getOwnerId(): string;
    getPartNumber(): number;
    getSize(): number;
    clone(): any;
}
export declare class S3PartList extends WrappedList<S3Part, CS3Part> {
    constructor(list: any, readOnly: boolean);
    protected_wrap(o: CS3Part): S3Part;
    protected_unwrap(o: S3Part): CS3Part;
    item(index: number): S3Part;
    addAll(c: Collection<S3Part>): boolean;
    addAll(index: number, c: Collection<S3Part>): boolean;
    addRange(c: Collection<S3Part>): void;
    size(): number;
    clone(): any;
}
type CS3QueryParam=any;
export declare class S3QueryParam {
    private obj;
    constructor(obj: CS3QueryParam);
    constructor();
    constructor(name: string, value: string);
    unwrap(): CS3QueryParam;
    getName(): string;
    setName(name: string): void;
    getValue(): string;
    setValue(value: string): void;
    clone(): any;
}
export declare class S3QueryParamList extends WrappedList<S3QueryParam, CS3QueryParam> {
    constructor(list: any, readOnly: boolean);
    protected_wrap(o: CS3QueryParam): S3QueryParam;
    protected_unwrap(o: S3QueryParam): CS3QueryParam;
    item(index: number): S3QueryParam;
    addAll(c: Collection<S3QueryParam>): boolean;
    addAll(index: number, c: Collection<S3QueryParam>): boolean;
    addRange(c: Collection<S3QueryParam>): void;
    size(): number;
    clone(): any;
}
type CSMPPRecipient=any;
export declare enum SMPPRecipientTypes {
    smppRecipientTypeNormal = 0,
    smppRecipientTypeList = 1
}
export declare class SMPPRecipient {
    private obj;
    constructor(obj: CSMPPRecipient);
    constructor();
    constructor(address: string);
    constructor(address: string, recipientType: number);
    unwrap(): CSMPPRecipient;
    getAddress(): string;
    setAddress(address: string): void;
    getRecipientType(): SMPPRecipientTypes;
    setRecipientType(recipientType: SMPPRecipientTypes): void;
    clone(): any;
}
export declare class SMPPRecipientList extends WrappedList<SMPPRecipient, CSMPPRecipient> {
    constructor(list: any, readOnly: boolean);
    protected_wrap(o: CSMPPRecipient): SMPPRecipient;
    protected_unwrap(o: SMPPRecipient): CSMPPRecipient;
    item(index: number): SMPPRecipient;
    addAll(c: Collection<SMPPRecipient>): boolean;
    addAll(index: number, c: Collection<SMPPRecipient>): boolean;
    addRange(c: Collection<SMPPRecipient>): void;
    size(): number;
    clone(): any;
}
type CSOAPParam=any;
export declare class SOAPParam {
    private obj;
    constructor(obj: CSOAPParam);
    constructor();
    constructor(name: string, value: string);
    unwrap(): CSOAPParam;
    getAttrs(): string;
    setAttrs(attrs: string): void;
    getName(): string;
    setName(name: string): void;
    getValue(): string;
    setValue(value: string): void;
    clone(): any;
}
export declare class SOAPParamList extends WrappedList<SOAPParam, CSOAPParam> {
    constructor(list: any, readOnly: boolean);
    protected_wrap(o: CSOAPParam): SOAPParam;
    protected_unwrap(o: SOAPParam): CSOAPParam;
    item(index: number): SOAPParam;
    addAll(c: Collection<SOAPParam>): boolean;
    addAll(index: number, c: Collection<SOAPParam>): boolean;
    addRange(c: Collection<SOAPParam>): void;
    size(): number;
    clone(): any;
}
type CTFTPConnection=any;
export declare class TFTPConnection {
    private obj;
    constructor(obj: CTFTPConnection);
    unwrap(): CTFTPConnection;
    getConnectionId(): string;
    getFileData(): string;
    getFileDataB(): Uint8Array;
    setFileData(fileData: Uint8Array | string): void;
    setFileData(fileData: Uint8Array, offset: number, length: number): void;
    getFileName(): string;
    getLocalFile(): string;
    setLocalFile(localFile: string): void;
    getRemoteHost(): string;
    getRemotePort(): number;
    getTransferMode(): string;
    clone(): any;
}
export declare class TFTPConnectionMap extends WrappedMap<TFTPConnection, CTFTPConnection> {
    constructor(map: any, readOnly: boolean);
    protected_wrap(o: CTFTPConnection): TFTPConnection;
    protected_unwrap(o: TFTPConnection): CTFTPConnection;
    item(key: any): TFTPConnection;
    clone(): any;
}
type CWSConnection=any;
export declare enum DataFormats {
    dfAutomatic = 0,
    dfText = 1,
    dfBinary = 2,
    dfPing = 9,
    dfPong = 10
}
export declare class WSConnection {
    private obj;
    constructor(obj: CWSConnection);
    unwrap(): CWSConnection;
    getAcceptData(): boolean;
    getBytesSent(): number;
    getConnected(): boolean;
    getConnectionId(): string;
    getDataFormat(): DataFormats;
    setDataFormat(dataFormat: DataFormats): void;
    getHost(): string;
    getLineMode(): boolean;
    getLocalAddress(): string;
    getOrigin(): string;
    getReadyToSend(): boolean;
    getRemoteHost(): string;
    getRemotePort(): number;
    getRequestHeaders(): string;
    getRequestURI(): string;
    getSubProtocols(): string;
    getTimeout(): number;
    setTimeout(timeout: number): void;
    clone(): any;
}
export declare class WSConnectionMap extends WrappedMap<WSConnection, CWSConnection> {
    constructor(map: any, readOnly: boolean);
    protected_wrap(o: CWSConnection): WSConnection;
    protected_unwrap(o: WSConnection): CWSConnection;
    item(key: any): WSConnection;
    clone(): any;
}
type CWSProxyConnection=any;
export declare class WSProxyConnection {
    private obj;
    constructor(obj: CWSProxyConnection);
    unwrap(): CWSProxyConnection;
    getConnected(): boolean;
    getConnectionId(): string;
    getDataFormat(): DataFormats;
    setDataFormat(dataFormat: DataFormats): void;
    getForwardHost(): string;
    getForwardPort(): number;
    getHost(): string;
    getLocalAddress(): string;
    getOrigin(): string;
    getRemoteHost(): string;
    getRemotePort(): number;
    getRequestHeaders(): string;
    getRequestURI(): string;
    getSubProtocols(): string;
    getTimeout(): number;
    setTimeout(timeout: number): void;
    clone(): any;
}
export declare class WSProxyConnectionMap extends WrappedMap<WSProxyConnection, CWSProxyConnection> {
    constructor(map: any, readOnly: boolean);
    protected_wrap(o: CWSProxyConnection): WSProxyConnection;
    protected_unwrap(o: WSProxyConnection): CWSProxyConnection;
    item(key: any): WSProxyConnection;
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
type CXMLComment=any;
export declare class XMLComment {
    private obj;
    constructor(obj: CXMLComment);
    constructor();
    constructor(text: string);
    unwrap(): CXMLComment;
    getText(): string;
    setText(text: string): void;
    clone(): any;
}
export declare class XMLCommentList extends WrappedList<XMLComment, CXMLComment> {
    constructor(list: any, readOnly: boolean);
    protected_wrap(o: CXMLComment): XMLComment;
    protected_unwrap(o: XMLComment): CXMLComment;
    item(index: number): XMLComment;
    addAll(c: Collection<XMLComment>): boolean;
    addAll(index: number, c: Collection<XMLComment>): boolean;
    addRange(c: Collection<XMLComment>): void;
    size(): number;
    clone(): any;
}
type CXMLDeclaration=any;
export declare class XMLDeclaration {
    private obj;
    constructor(obj: CXMLDeclaration);
    constructor();
    constructor(version: string, encoding: string, standalone: boolean);
    unwrap(): CXMLDeclaration;
    getEncoding(): string;
    setEncoding(encoding: string): void;
    getStandalone(): boolean;
    setStandalone(standalone: boolean): void;
    getVersion(): string;
    setVersion(version: string): void;
    clone(): any;
}
export declare class XMLDeclarationList extends WrappedList<XMLDeclaration, CXMLDeclaration> {
    constructor(list: any, readOnly: boolean);
    protected_wrap(o: CXMLDeclaration): XMLDeclaration;
    protected_unwrap(o: XMLDeclaration): CXMLDeclaration;
    item(index: number): XMLDeclaration;
    addAll(c: Collection<XMLDeclaration>): boolean;
    addAll(index: number, c: Collection<XMLDeclaration>): boolean;
    addRange(c: Collection<XMLDeclaration>): void;
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
type CXMPPBuddy=any;
export declare enum XMPPBuddySubscriptions {
    stNone = 0,
    stTo = 1,
    stFrom = 2,
    stBoth = 3,
    stRemove = 4
}
export declare class XMPPBuddy {
    private obj;
    constructor(obj: CXMPPBuddy);
    constructor();
    unwrap(): CXMPPBuddy;
    getGroup(): string;
    getId(): string;
    getNickName(): string;
    setNickName(nickName: string): void;
    getRealName(): string;
    getSubscription(): XMPPBuddySubscriptions;
    clone(): any;
}
export declare class XMPPBuddyList extends WrappedList<XMPPBuddy, CXMPPBuddy> {
    constructor(list: any, readOnly: boolean);
    protected_wrap(o: CXMPPBuddy): XMPPBuddy;
    protected_unwrap(o: XMPPBuddy): CXMPPBuddy;
    item(index: number): XMPPBuddy;
    addAll(c: Collection<XMPPBuddy>): boolean;
    addAll(index: number, c: Collection<XMPPBuddy>): boolean;
    addRange(c: Collection<XMPPBuddy>): void;
    size(): number;
    clone(): any;
}
type CXMPPUserInfo=any;
export declare class XMPPUserInfo {
    private obj;
    constructor(obj: CXMPPUserInfo);
    constructor();
    constructor(field: string, value: string);
    unwrap(): CXMPPUserInfo;
    getField(): string;
    setField(field: string): void;
    getValue(): string;
    setValue(value: string): void;
    clone(): any;
}
export declare class XMPPUserInfoMap extends WrappedMap<XMPPUserInfo, CXMPPUserInfo> {
    constructor(map: any, readOnly: boolean);
    protected_wrap(o: CXMPPUserInfo): XMPPUserInfo;
    protected_unwrap(o: XMPPUserInfo): CXMPPUserInfo;
    item(key: any): XMPPUserInfo;
    clone(): any;
}
/************************************************** ENUMERATED TYPES **************************************************/
export declare enum CalDAVAuthSchemes {
    authBasic = 0,
    authDigest = 1,
    authProprietary = 2,
    authNone = 3,
    authNtlm = 4,
    authNegotiate = 5,
    authOAuth = 6
}
export declare enum CalDAVEventTypes {
    vEvent = 0,
    vTodo = 1,
    vJournal = 2,
    vFreeBusy = 3
}
export declare enum CalDAVFollowRedirects {
    frNever = 0,
    frAlways = 1,
    frSameScheme = 2
}
export declare enum CalDAVSSLProviders {
    sslpAutomatic = 0,
    sslpPlatform = 1,
    sslpInternal = 2
}
/**
 * The CalDAV Component implements an easy-to-use interface to the Calendaring Extensions to
the Web Distributed Authoring and Versioning protocol (WebDAV). In this manner the CalDAV protocol specifies a standard way of accessing, managing, and sharing calendar events based on the iCalendar format.
 */
export declare class caldav extends events.EventEmitter {
    private obj;
    constructor();
    about(): string;
















    on(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    on(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "EventDetails", listener: (e: {
        readonly resourceURI: string;
        readonly responseStatus: string;
        readonly ETag: string;
        readonly calendarData: string;
        readonly summary: string;
    }) => void): this;
    on(event: "FreeBusy", listener: (e: {
        readonly busyType: string;
        readonly busyRange: string;
    }) => void): this;
    on(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    on(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    on(event: "Redirect", listener: (e: {
        readonly location: string;
        accept: boolean;
    }) => void): this;
    on(event: "SetCookie", listener: (e: {
        readonly name: string;
        readonly value: string;
        readonly expires: string;
        readonly domain: string;
        readonly path: string;
        readonly secure: boolean;
    }) => void): this;
    on(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    on(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    on(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    on(event: "Status", listener: (e: {
        readonly HTTPVersion: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    once(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    once(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "EventDetails", listener: (e: {
        readonly resourceURI: string;
        readonly responseStatus: string;
        readonly ETag: string;
        readonly calendarData: string;
        readonly summary: string;
    }) => void): this;
    once(event: "FreeBusy", listener: (e: {
        readonly busyType: string;
        readonly busyRange: string;
    }) => void): this;
    once(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    once(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    once(event: "Redirect", listener: (e: {
        readonly location: string;
        accept: boolean;
    }) => void): this;
    once(event: "SetCookie", listener: (e: {
        readonly name: string;
        readonly value: string;
        readonly expires: string;
        readonly domain: string;
        readonly path: string;
        readonly secure: boolean;
    }) => void): this;
    once(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    once(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    once(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    once(event: "Status", listener: (e: {
        readonly HTTPVersion: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    addListener(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    addListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "EventDetails", listener: (e: {
        readonly resourceURI: string;
        readonly responseStatus: string;
        readonly ETag: string;
        readonly calendarData: string;
        readonly summary: string;
    }) => void): this;
    addListener(event: "FreeBusy", listener: (e: {
        readonly busyType: string;
        readonly busyRange: string;
    }) => void): this;
    addListener(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    addListener(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    addListener(event: "Redirect", listener: (e: {
        readonly location: string;
        accept: boolean;
    }) => void): this;
    addListener(event: "SetCookie", listener: (e: {
        readonly name: string;
        readonly value: string;
        readonly expires: string;
        readonly domain: string;
        readonly path: string;
        readonly secure: boolean;
    }) => void): this;
    addListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    addListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    addListener(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    addListener(event: "Status", listener: (e: {
        readonly HTTPVersion: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    prependListener(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "EventDetails", listener: (e: {
        readonly resourceURI: string;
        readonly responseStatus: string;
        readonly ETag: string;
        readonly calendarData: string;
        readonly summary: string;
    }) => void): this;
    prependListener(event: "FreeBusy", listener: (e: {
        readonly busyType: string;
        readonly busyRange: string;
    }) => void): this;
    prependListener(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    prependListener(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    prependListener(event: "Redirect", listener: (e: {
        readonly location: string;
        accept: boolean;
    }) => void): this;
    prependListener(event: "SetCookie", listener: (e: {
        readonly name: string;
        readonly value: string;
        readonly expires: string;
        readonly domain: string;
        readonly path: string;
        readonly secure: boolean;
    }) => void): this;
    prependListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    prependListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    prependListener(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependListener(event: "Status", listener: (e: {
        readonly HTTPVersion: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    prependOnceListener(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependOnceListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "EventDetails", listener: (e: {
        readonly resourceURI: string;
        readonly responseStatus: string;
        readonly ETag: string;
        readonly calendarData: string;
        readonly summary: string;
    }) => void): this;
    prependOnceListener(event: "FreeBusy", listener: (e: {
        readonly busyType: string;
        readonly busyRange: string;
    }) => void): this;
    prependOnceListener(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    prependOnceListener(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    prependOnceListener(event: "Redirect", listener: (e: {
        readonly location: string;
        accept: boolean;
    }) => void): this;
    prependOnceListener(event: "SetCookie", listener: (e: {
        readonly name: string;
        readonly value: string;
        readonly expires: string;
        readonly domain: string;
        readonly path: string;
        readonly secure: boolean;
    }) => void): this;
    prependOnceListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    prependOnceListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    prependOnceListener(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependOnceListener(event: "Status", listener: (e: {
        readonly HTTPVersion: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    /**
     * Adds a cookie and the corresponding value to the outgoing request headers.
     */
    addCookie(cookieName: string, cookieValue: string): Promise<void>;
    /**
     * Adds a form variable and the corresponding value.
     */
    addCustomProperty(varName: string, varValue: string): Promise<void>;
    /**
     * Sets or retrieves a configuration setting.
     */
    config(configurationString: string): Promise<string>;
    /**
     * Copy events to a new location.
     */
    copyEvent(sourceResourceURI: string, destinationResourceURI: string): Promise<void>;
    /**
     * Creates a new calendar collection resource.
     */
    createCalendar(resourceURI: string, displayName: string, description: string): Promise<void>;
    /**
     * Adds a calendar resource at the specified ResourceURI using the CalDAV PUT method.
     */
    createEvent(resourceURI: string): Promise<void>;
    /**
     * Deletes a calendar collection resource.
     */
    deleteCalendar(resourceURI: string): Promise<void>;
    /**
     * Delete a resource or collection.
     */
    deleteEvent(resourceURI: string): Promise<void>;
    /**
     * This method processes events from the internal message queue.
     */
    doEvents(): Promise<void>;
    /**
     * Generates an event from the properties in the iCal (.ICS) format.
     */
    exportICS(): Promise<string>;
    /**
     * Retrieves options for the ResourceURI to determines whether it supports calendar access.
     */
    getCalendarOptions(resourceURI: string): Promise<void>;
    /**
     * Generates a report on the indicated calendar collection resource.
     */
    getCalendarReport(resourceURI: string): Promise<void>;
    /**
     * Retrieves a single event from the CalDAV server.
     */
    getEvent(resourceURI: string): Promise<void>;
    /**
     * Generates a report as to when the calendar owner is free and/or busy.
     */
    getFreeBusyReport(resourceURI: string): Promise<void>;
    /**
     * Imports calendar data (contained in an ICS file) into the class's property list.
     */
    importICS(calendarData: string): Promise<void>;
    /**
     * This method interrupts the current method.
     */
    interrupt(): Promise<void>;
    /**
     * Lists all calendars that the current user can access.
     */
    listCalendars(baseURL: string): Promise<void>;
    /**
     * Obtain a lock for a specified calendar resource.
     */
    lockCalendar(resourceURI: string): Promise<void>;
    /**
     * Moves one calendar resource to a new location.
     */
    moveEvent(sourceResourceURI: string, destinationResourceURI: string): Promise<void>;
    /**
     * Reset the class.
     */
    reset(): Promise<void>;
    /**
     * Sends a request to the CalDAV server to do CRUD operations.
     */
    sendCustomRequest(httpMethod: string, url: string, requestBody: string): Promise<void>;
    /**
     * Unlocks a calendar resource.
     */
    unLockCalendar(resourceURI: string): Promise<void>;
    /**
     * Updates a calendar collection resource.
     */
    updateCalendar(resourceURI: string, calIndex: number): Promise<void>;
    /**
     * Updates a calendar resource at the specified ResourceURI using the CalDAV PUT method.
     */
    updateEvent(resourceURI: string): Promise<void>;
    getAlarms(): CalAlarmList;
    /**
     * Defines one or more participants that have been invited to the event.
     */
    getAttendees(): string;
    /**
     * Defines one or more participants that have been invited to the event.
     */
    setAttendees(attendees: string): void;
    /**
     * This property includes the Authorization string to be sent to the server.
     */
    getAuthorization(): string;
    /**
     * This property includes the Authorization string to be sent to the server.
     */
    setAuthorization(authorization: string): void;
    /**
     * This property specifies the authentication scheme to use when server authentication is required.
     */
    getAuthScheme(): CalDAVAuthSchemes;
    /**
     * This property specifies the authentication scheme to use when server authentication is required.
     */
    setAuthScheme(authScheme: CalDAVAuthSchemes): void;
    getCalendars(): CalCalendarInfoList;
    /**
     * Used to specify categories or subtypes of the calendar event.
     */
    getCategories(): string;
    /**
     * Used to specify categories or subtypes of the calendar event.
     */
    setCategories(categories: string): void;
    /**
     * Defines the access classification for a calendar class.
     */
    getClassification(): string;
    /**
     * Defines the access classification for a calendar class.
     */
    setClassification(classification: string): void;
    /**
     * Date and time that a to-do was actually completed.
     */
    getCompleted(): string;
    /**
     * Date and time that a to-do was actually completed.
     */
    setCompleted(completed: string): void;
    /**
     * Whether the class is connected.
     */
    isConnected(): boolean;
    getCookies(): HTTPCookieList;
    getCustomProperties(): CalCustomPropList;
    /**
     * Provides a complete description of the calendar event.
     */
    getDescription(): string;
    /**
     * Provides a complete description of the calendar event.
     */
    setDescription(description: string): void;
    /**
     * Specifies the due date for a calendar event.
     */
    getDueDate(): string;
    /**
     * Specifies the due date for a calendar event.
     */
    setDueDate(dueDate: string): void;
    /**
     * Duration of the calendar event.
     */
    getDuration(): string;
    /**
     * Duration of the calendar event.
     */
    setDuration(duration: string): void;
    /**
     * Specifies the date and time that a calendar event ends.
     */
    getEndDate(): string;
    /**
     * Specifies the date and time that a calendar event ends.
     */
    setEndDate(endDate: string): void;
    /**
     * Identifier returned by the CalDAV server which is used to synchronize edits.
     */
    getETag(): string;
    /**
     * Identifier returned by the CalDAV server which is used to synchronize edits.
     */
    setETag(ETag: string): void;
    /**
     * Indicates the type of calendar object resource.
     */
    getEventType(): CalDAVEventTypes;
    /**
     * Indicates the type of calendar object resource.
     */
    setEventType(eventType: CalDAVEventTypes): void;
    /**
     * A set of properties related to firewall access.
     */
    getFirewall(): Firewall;
    /**
     * A set of properties related to firewall access.
     */
    setFirewall(firewall: Firewall): void;
    /**
     * Determines what happens when the server issues a redirect.
     */
    getFollowRedirects(): CalDAVFollowRedirects;
    /**
     * Determines what happens when the server issues a redirect.
     */
    setFollowRedirects(followRedirects: CalDAVFollowRedirects): void;
    getFreeBusy(): CalFreeBusyList;
    /**
     * The current status of the class.
     */
    isIdle(): boolean;
    /**
     * The date and time that the information associated with the calendar event was last revised in the calendar store.
     */
    getLastModified(): string;
    /**
     * The date and time that the information associated with the calendar event was last revised in the calendar store.
     */
    setLastModified(lastModified: string): void;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    getLocalHost(): string;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    setLocalHost(localHost: string): void;
    /**
     * Defines the intended venue for the activity defined by a calendar class.
     */
    getLocation(): string;
    /**
     * Defines the intended venue for the activity defined by a calendar class.
     */
    setLocation(location: string): void;
    /**
     * Fields used when locking and unlocking a calendar resource.
     */
    getLockProperties(): CalLock;
    /**
     * Fields used when locking and unlocking a calendar resource.
     */
    setLockProperties(lockProperties: CalLock): void;
    /**
     * Defines the organizer of a calendar event.
     */
    getOrganizer(): string;
    /**
     * Defines the organizer of a calendar event.
     */
    setOrganizer(organizer: string): void;
    /**
     * Other headers as determined by the user (optional).
     */
    getOtherHeaders(): string;
    /**
     * Other headers as determined by the user (optional).
     */
    setOtherHeaders(otherHeaders: string): void;
    getParsedHeaders(): HeaderList;
    /**
     * This property includes a password if authentication is to be used.
     */
    getPassword(): string;
    /**
     * This property includes a password if authentication is to be used.
     */
    setPassword(password: string): void;
    /**
     * Defines the relative priority for a calendar event.
     */
    getPriority(): number;
    /**
     * Defines the relative priority for a calendar event.
     */
    setPriority(priority: number): void;
    /**
     * A set of properties related to proxy access.
     */
    getProxy(): Proxy;
    /**
     * A set of properties related to proxy access.
     */
    setProxy(proxy: Proxy): void;
    /**
     * Defines the recurrence set for the event.
     */
    getRecurrence(): CalRecurrence;
    /**
     * Defines the recurrence set for the event.
     */
    setRecurrence(recurrence: CalRecurrence): void;
    /**
     * Represents a relationship or reference between this calendar event and another.
     */
    getRelatedTo(): string;
    /**
     * Represents a relationship or reference between this calendar event and another.
     */
    setRelatedTo(relatedTo: string): void;
    /**
     * Criteria used to filter reports.
     */
    getReportFilter(): CalReportFilter;
    /**
     * Criteria used to filter reports.
     */
    setReportFilter(reportFilter: CalReportFilter): void;
    /**
     * Defines the revision sequence number of the event within a sequence of revisions.
     */
    getSequence(): number;
    /**
     * Defines the revision sequence number of the event within a sequence of revisions.
     */
    setSequence(sequence: number): void;
    /**
     * Instructs the class to unconditionally accept the server certificate that matches the supplied certificate.
     */
    getSSLAcceptServerCert(): Certificate;
    /**
     * Instructs the class to unconditionally accept the server certificate that matches the supplied certificate.
     */
    setSSLAcceptServerCert(SSLAcceptServerCert: Certificate): void;
    /**
     * The certificate to be used during Secure Sockets Layer (SSL) negotiation.
     */
    getSSLCert(): Certificate;
    /**
     * The certificate to be used during Secure Sockets Layer (SSL) negotiation.
     */
    setSSLCert(SSLCert: Certificate): void;
    /**
     * The Secure Sockets Layer/Transport Layer Security (SSL/TLS) implementation to use.
     */
    getSSLProvider(): CalDAVSSLProviders;
    /**
     * The Secure Sockets Layer/Transport Layer Security (SSL/TLS) implementation to use.
     */
    setSSLProvider(SSLProvider: CalDAVSSLProviders): void;
    /**
     * The server certificate for the last established connection.
     */
    getSSLServerCert(): Certificate;
    /**
     * Specifies the date and time that an event begins.
     */
    getStartDate(): string;
    /**
     * Specifies the date and time that an event begins.
     */
    setStartDate(startDate: string): void;
    /**
     * Defines the overall status or confirmation for the calendar event.
     */
    getStatus(): string;
    /**
     * Defines the overall status or confirmation for the calendar event.
     */
    setStatus(status: string): void;
    /**
     * Defines a short summary or subject for the calendar event.
     */
    getSummary(): string;
    /**
     * Defines a short summary or subject for the calendar event.
     */
    setSummary(summary: string): void;
    /**
     * The timeout for the class.
     */
    getTimeout(): number;
    /**
     * The timeout for the class.
     */
    setTimeout(timeout: number): void;
    /**
     * Specifies the date and time that the instance of the event was created.
     */
    getTimestamp(): string;
    /**
     * Specifies the date and time that the instance of the event was created.
     */
    setTimestamp(timestamp: string): void;
    /**
     * Specifies a time zone on a calendar collection.
     */
    getTimezone(): CalTimezone;
    /**
     * Specifies a time zone on a calendar collection.
     */
    setTimezone(timezone: CalTimezone): void;
    /**
     * Defines whether or not an event is transparent to busy time searches.
     */
    getTransparency(): string;
    /**
     * Defines whether or not an event is transparent to busy time searches.
     */
    setTransparency(transparency: string): void;
    /**
     * A persistent, globally unique  identifier for the calendar event.
     */
    getUID(): string;
    /**
     * A persistent, globally unique  identifier for the calendar event.
     */
    setUID(UID: string): void;
    /**
     * Location of the event resource on the CalDAV server.
     */
    getURL(): string;
    /**
     * This property includes a user name if authentication is to be used.
     */
    getUser(): string;
    /**
     * This property includes a user name if authentication is to be used.
     */
    setUser(user: string): void;
}
/************************************************** ENUMERATED TYPES **************************************************/
export declare enum CardDAVAuthSchemes {
    authBasic = 0,
    authDigest = 1,
    authProprietary = 2,
    authNone = 3,
    authNtlm = 4,
    authNegotiate = 5,
    authOAuth = 6
}
export declare enum CardDAVFollowRedirects {
    frNever = 0,
    frAlways = 1,
    frSameScheme = 2
}
export declare enum CardDAVSSLProviders {
    sslpAutomatic = 0,
    sslpPlatform = 1,
    sslpInternal = 2
}
/**
 * The CardDAV component makes it easy to access, share, manage, upload, and download contact data based on the vCard format within a CardDAV server.
 */
export declare class carddav extends events.EventEmitter {
    private obj;
    constructor();
    about(): string;















    on(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "ContactDetails", listener: (e: {
        readonly resourceURI: string;
        readonly responseStatus: string;
        readonly ETag: string;
        readonly contactData: string;
    }) => void): this;
    on(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    on(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    on(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    on(event: "Redirect", listener: (e: {
        readonly location: string;
        accept: boolean;
    }) => void): this;
    on(event: "SetCookie", listener: (e: {
        readonly name: string;
        readonly value: string;
        readonly expires: string;
        readonly domain: string;
        readonly path: string;
        readonly secure: boolean;
    }) => void): this;
    on(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    on(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    on(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    on(event: "Status", listener: (e: {
        readonly HTTPVersion: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    once(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "ContactDetails", listener: (e: {
        readonly resourceURI: string;
        readonly responseStatus: string;
        readonly ETag: string;
        readonly contactData: string;
    }) => void): this;
    once(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    once(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    once(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    once(event: "Redirect", listener: (e: {
        readonly location: string;
        accept: boolean;
    }) => void): this;
    once(event: "SetCookie", listener: (e: {
        readonly name: string;
        readonly value: string;
        readonly expires: string;
        readonly domain: string;
        readonly path: string;
        readonly secure: boolean;
    }) => void): this;
    once(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    once(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    once(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    once(event: "Status", listener: (e: {
        readonly HTTPVersion: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    addListener(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "ContactDetails", listener: (e: {
        readonly resourceURI: string;
        readonly responseStatus: string;
        readonly ETag: string;
        readonly contactData: string;
    }) => void): this;
    addListener(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    addListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    addListener(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    addListener(event: "Redirect", listener: (e: {
        readonly location: string;
        accept: boolean;
    }) => void): this;
    addListener(event: "SetCookie", listener: (e: {
        readonly name: string;
        readonly value: string;
        readonly expires: string;
        readonly domain: string;
        readonly path: string;
        readonly secure: boolean;
    }) => void): this;
    addListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    addListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    addListener(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    addListener(event: "Status", listener: (e: {
        readonly HTTPVersion: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    prependListener(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "ContactDetails", listener: (e: {
        readonly resourceURI: string;
        readonly responseStatus: string;
        readonly ETag: string;
        readonly contactData: string;
    }) => void): this;
    prependListener(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    prependListener(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    prependListener(event: "Redirect", listener: (e: {
        readonly location: string;
        accept: boolean;
    }) => void): this;
    prependListener(event: "SetCookie", listener: (e: {
        readonly name: string;
        readonly value: string;
        readonly expires: string;
        readonly domain: string;
        readonly path: string;
        readonly secure: boolean;
    }) => void): this;
    prependListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    prependListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    prependListener(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependListener(event: "Status", listener: (e: {
        readonly HTTPVersion: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    prependOnceListener(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "ContactDetails", listener: (e: {
        readonly resourceURI: string;
        readonly responseStatus: string;
        readonly ETag: string;
        readonly contactData: string;
    }) => void): this;
    prependOnceListener(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependOnceListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    prependOnceListener(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    prependOnceListener(event: "Redirect", listener: (e: {
        readonly location: string;
        accept: boolean;
    }) => void): this;
    prependOnceListener(event: "SetCookie", listener: (e: {
        readonly name: string;
        readonly value: string;
        readonly expires: string;
        readonly domain: string;
        readonly path: string;
        readonly secure: boolean;
    }) => void): this;
    prependOnceListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    prependOnceListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    prependOnceListener(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependOnceListener(event: "Status", listener: (e: {
        readonly HTTPVersion: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    /**
     * Adds a cookie and the corresponding value to the outgoing request headers.
     */
    addCookie(cookieName: string, cookieValue: string): Promise<void>;
    /**
     * Adds a form variable and the corresponding value.
     */
    addCustomProperty(varName: string, varValue: string): Promise<void>;
    /**
     * Sets or retrieves a configuration setting.
     */
    config(configurationString: string): Promise<string>;
    /**
     * Copy contact to a new location.
     */
    copyContact(sourceResourceURI: string, destinationResourceURI: string): Promise<void>;
    /**
     * Creates a new address book collection resource.
     */
    createAddressbook(resourceURI: string, displayName: string, description: string): Promise<void>;
    /**
     * Adds a contact resource at the specified ResourceURI using the CardDAV PUT method.
     */
    createContact(resourceURI: string): Promise<void>;
    /**
     * Deletes an address book collection resource.
     */
    deleteAddressbook(resourceURI: string): Promise<void>;
    /**
     * Deletes a resource.
     */
    deleteContact(resourceURI: string): Promise<void>;
    /**
     * This method processes events from the internal message queue.
     */
    doEvents(): Promise<void>;
    /**
     * Generates a contact from the properties in the vCard format.
     */
    exportVCF(): Promise<string>;
    /**
     * Retrieves options for the ResourceURI to determine whether it supports address book access.
     */
    getAddressbookOptions(resourceURI: string): Promise<void>;
    /**
     * Generates a report on the indicated address book.
     */
    getAddressbookReport(resourceURI: string): Promise<void>;
    /**
     * Retrieves a single contact from the CardDAV server.
     */
    getContact(resourceURI: string): Promise<void>;
    /**
     * Imports contact data (contained in a VCF file) into the class's property list.
     */
    importVCF(contactData: string): Promise<void>;
    /**
     * This method interrupts the current method.
     */
    interrupt(): Promise<void>;
    /**
     * Lists all address books that the current user can access.
     */
    listAddressbooks(baseURL: string): Promise<void>;
    /**
     * Moves one contact resource to a new location.
     */
    moveContact(sourceResourceURI: string, destinationResourceURI: string): Promise<void>;
    /**
     * Reset the class.
     */
    reset(): Promise<void>;
    /**
     * Sends a custom request to the server.
     */
    sendCustomRequest(httpMethod: string, url: string, requestBody: string): Promise<void>;
    /**
     * Updates an address book collection resource.
     */
    updateAddressbook(resourceURI: string, ABIndex: number): Promise<void>;
    /**
     * Updates a contact at the specified ResourceURI.
     */
    updateContact(resourceURI: string): Promise<void>;
    getAddressbooks(): CardAddressbookInfoList;
    getAddresses(): CardCustomPropList;
    /**
     * The date of marriage, or equivalent for a contact.
     */
    getAnniversary(): CardCustomProp;
    /**
     * The date of marriage, or equivalent for a contact.
     */
    setAnniversary(anniversary: CardCustomProp): void;
    /**
     * This property includes the Authorization string to be sent to the server.
     */
    getAuthorization(): string;
    /**
     * This property includes the Authorization string to be sent to the server.
     */
    setAuthorization(authorization: string): void;
    /**
     * This property specifies the authentication scheme to use when server authentication is required.
     */
    getAuthScheme(): CardDAVAuthSchemes;
    /**
     * This property specifies the authentication scheme to use when server authentication is required.
     */
    setAuthScheme(authScheme: CardDAVAuthSchemes): void;
    /**
     * The birth date of the contact.
     */
    getBirthDay(): CardCustomProp;
    /**
     * The birth date of the contact.
     */
    setBirthDay(birthDay: CardCustomProp): void;
    /**
     * Whether the class is connected.
     */
    isConnected(): boolean;
    getCookies(): HTTPCookieList;
    getCustomProperties(): CardCustomPropList;
    getEMails(): CardCustomPropList;
    /**
     * Identifier returned by the CardDAV server which is used to synchronize edits.
     */
    getETag(): string;
    /**
     * Identifier returned by the CardDAV server which is used to synchronize edits.
     */
    setETag(ETag: string): void;
    /**
     * A set of properties related to firewall access.
     */
    getFirewall(): Firewall;
    /**
     * A set of properties related to firewall access.
     */
    setFirewall(firewall: Firewall): void;
    /**
     * Determines what happens when the server issues a redirect.
     */
    getFollowRedirects(): CardDAVFollowRedirects;
    /**
     * Determines what happens when the server issues a redirect.
     */
    setFollowRedirects(followRedirects: CardDAVFollowRedirects): void;
    /**
     * The formatted name of the contact.
     */
    getFormattedName(): string;
    /**
     * The formatted name of the contact.
     */
    setFormattedName(formattedName: string): void;
    /**
     * The sex and gender identity of a contact.
     */
    getGender(): string;
    /**
     * The sex and gender identity of a contact.
     */
    setGender(gender: string): void;
    /**
     * The current status of the class.
     */
    isIdle(): boolean;
    /**
     * The kind of object the vCard represents.
     */
    getKind(): string;
    /**
     * The kind of object the vCard represents.
     */
    setKind(kind: string): void;
    getLanguages(): CardCustomPropList;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    getLocalHost(): string;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    setLocalHost(localHost: string): void;
    /**
     * The name of a contact.
     */
    getNames(): string;
    /**
     * The name of a contact.
     */
    setNames(names: string): void;
    /**
     * The nickname of the object the vCard represents.
     */
    getNickName(): string;
    /**
     * The nickname of the object the vCard represents.
     */
    setNickName(nickName: string): void;
    /**
     * Provides additional information or comments about a contact.
     */
    getNote(): string;
    /**
     * Provides additional information or comments about a contact.
     */
    setNote(note: string): void;
    /**
     * The organizational name and units associated with a contact.
     */
    getOrganization(): string;
    /**
     * The organizational name and units associated with a contact.
     */
    setOrganization(organization: string): void;
    /**
     * Other headers as determined by the user (optional).
     */
    getOtherHeaders(): string;
    /**
     * Other headers as determined by the user (optional).
     */
    setOtherHeaders(otherHeaders: string): void;
    getParsedHeaders(): HeaderList;
    /**
     * This property includes a password if authentication is to be used.
     */
    getPassword(): string;
    /**
     * This property includes a password if authentication is to be used.
     */
    setPassword(password: string): void;
    getPhoneNumbers(): CardCustomPropList;
    /**
     * A photograph or image associated with a contact.
     */
    getPhoto(): CardCustomProp;
    /**
     * A photograph or image associated with a contact.
     */
    setPhoto(photo: CardCustomProp): void;
    /**
     * A set of properties related to proxy access.
     */
    getProxy(): Proxy;
    /**
     * A set of properties related to proxy access.
     */
    setProxy(proxy: Proxy): void;
    /**
     * Criteria used to filter reports.
     */
    getReportFilter(): CardReportFilter;
    /**
     * Criteria used to filter reports.
     */
    setReportFilter(reportFilter: CardReportFilter): void;
    /**
     * The function or part played in a particular situation by a contact.
     */
    getRole(): string;
    /**
     * The function or part played in a particular situation by a contact.
     */
    setRole(role: string): void;
    /**
     * Instructs the class to unconditionally accept the server certificate that matches the supplied certificate.
     */
    getSSLAcceptServerCert(): Certificate;
    /**
     * Instructs the class to unconditionally accept the server certificate that matches the supplied certificate.
     */
    setSSLAcceptServerCert(SSLAcceptServerCert: Certificate): void;
    /**
     * The certificate to be used during Secure Sockets Layer (SSL) negotiation.
     */
    getSSLCert(): Certificate;
    /**
     * The certificate to be used during Secure Sockets Layer (SSL) negotiation.
     */
    setSSLCert(SSLCert: Certificate): void;
    /**
     * The Secure Sockets Layer/Transport Layer Security (SSL/TLS) implementation to use.
     */
    getSSLProvider(): CardDAVSSLProviders;
    /**
     * The Secure Sockets Layer/Transport Layer Security (SSL/TLS) implementation to use.
     */
    setSSLProvider(SSLProvider: CardDAVSSLProviders): void;
    /**
     * The server certificate for the last established connection.
     */
    getSSLServerCert(): Certificate;
    /**
     * The timeout for the class.
     */
    getTimeout(): number;
    /**
     * The timeout for the class.
     */
    setTimeout(timeout: number): void;
    /**
     * The position or job of the object the vCard represents.
     */
    getTitle(): string;
    /**
     * The position or job of the object the vCard represents.
     */
    setTitle(title: string): void;
    /**
     * A persistent, globally unique identifier for the contact.
     */
    getUID(): string;
    /**
     * A persistent, globally unique identifier for the contact.
     */
    setUID(UID: string): void;
    /**
     * Location of the contact resource on the CardDAV server.
     */
    getURL(): string;
    /**
     * This property includes a user name if authentication is to be used.
     */
    getUser(): string;
    /**
     * This property includes a user name if authentication is to be used.
     */
    setUser(user: string): void;
    /**
     * The vCard version format.
     */
    getVCardVersion(): string;
    /**
     * The vCard version format.
     */
    setVCardVersion(VCardVersion: string): void;
}
/************************************************** ENUMERATED TYPES **************************************************/
export declare enum CertMgrCertStoreTypes {
    cstUser = 0,
    cstMachine = 1,
    cstPFXFile = 2,
    cstPFXBlob = 3,
    cstJKSFile = 4,
    cstJKSBlob = 5,
    cstPEMKeyFile = 6,
    cstPEMKeyBlob = 7,
    cstPublicKeyFile = 8,
    cstPublicKeyBlob = 9,
    cstSSHPublicKeyBlob = 10,
    cstP7BFile = 11,
    cstP7BBlob = 12,
    cstSSHPublicKeyFile = 13,
    cstPPKFile = 14,
    cstPPKBlob = 15,
    cstXMLFile = 16,
    cstXMLBlob = 17,
    cstJWKFile = 18,
    cstJWKBlob = 19,
    cstSecurityKey = 20,
    cstBCFKSFile = 21,
    cstBCFKSBlob = 22,
    cstPKCS11 = 23,
    cstAuto = 99
}
/**
 * The CertMgr component is used to create, read, and manage certificates.
 */
export declare class certmgr extends events.EventEmitter {
    private obj;
    constructor();
    about(): string;






    on(event: "CertChain", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly certSerialNumber: string;
        readonly trustStatus: number;
        readonly trustInfo: number;
    }) => void): this;
    on(event: "CertList", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly certSerialNumber: string;
        readonly hasPrivateKey: boolean;
    }) => void): this;
    on(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "KeyList", listener: (e: {
        readonly keyContainer: string;
        readonly keyType: number;
        readonly algId: string;
        readonly keyLen: number;
    }) => void): this;
    on(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    on(event: "StoreList", listener: (e: {
        readonly certStore: string;
    }) => void): this;
    once(event: "CertChain", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly certSerialNumber: string;
        readonly trustStatus: number;
        readonly trustInfo: number;
    }) => void): this;
    once(event: "CertList", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly certSerialNumber: string;
        readonly hasPrivateKey: boolean;
    }) => void): this;
    once(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "KeyList", listener: (e: {
        readonly keyContainer: string;
        readonly keyType: number;
        readonly algId: string;
        readonly keyLen: number;
    }) => void): this;
    once(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    once(event: "StoreList", listener: (e: {
        readonly certStore: string;
    }) => void): this;
    addListener(event: "CertChain", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly certSerialNumber: string;
        readonly trustStatus: number;
        readonly trustInfo: number;
    }) => void): this;
    addListener(event: "CertList", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly certSerialNumber: string;
        readonly hasPrivateKey: boolean;
    }) => void): this;
    addListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "KeyList", listener: (e: {
        readonly keyContainer: string;
        readonly keyType: number;
        readonly algId: string;
        readonly keyLen: number;
    }) => void): this;
    addListener(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    addListener(event: "StoreList", listener: (e: {
        readonly certStore: string;
    }) => void): this;
    prependListener(event: "CertChain", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly certSerialNumber: string;
        readonly trustStatus: number;
        readonly trustInfo: number;
    }) => void): this;
    prependListener(event: "CertList", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly certSerialNumber: string;
        readonly hasPrivateKey: boolean;
    }) => void): this;
    prependListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "KeyList", listener: (e: {
        readonly keyContainer: string;
        readonly keyType: number;
        readonly algId: string;
        readonly keyLen: number;
    }) => void): this;
    prependListener(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    prependListener(event: "StoreList", listener: (e: {
        readonly certStore: string;
    }) => void): this;
    prependOnceListener(event: "CertChain", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly certSerialNumber: string;
        readonly trustStatus: number;
        readonly trustInfo: number;
    }) => void): this;
    prependOnceListener(event: "CertList", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly certSerialNumber: string;
        readonly hasPrivateKey: boolean;
    }) => void): this;
    prependOnceListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "KeyList", listener: (e: {
        readonly keyContainer: string;
        readonly keyType: number;
        readonly algId: string;
        readonly keyLen: number;
    }) => void): this;
    prependOnceListener(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    prependOnceListener(event: "StoreList", listener: (e: {
        readonly certStore: string;
    }) => void): this;
    /**
     * This method checks the Certificate Revocation List (CRL) specified by the currently loaded certificate.
     */
    checkCRL(): Promise<void>;
    /**
     * This method uses Online Certificate Status Protocol (OCSP) to check the status of the currently loaded certificate.
     */
    checkOCSP(): Promise<void>;
    /**
     * Sets or retrieves a configuration setting.
     */
    config(configurationString: string): Promise<string>;
    /**
     * This method creates a new self-signed certificate in the current store.
     */
    createCertificate(certSubject: string, serialNumber: number): Promise<void>;
    /**
     * This method creates a new keyset associated with the provided name.
     */
    createKey(keyName: string): Promise<void>;
    /**
     * This method deletes the currently selected certificate from the store.
     */
    deleteCertificate(): Promise<void>;
    /**
     * This method deletes the keyset associated with the provided name.
     */
    deleteKey(keyName: string): Promise<void>;
    /**
     * This method exports the currently selected certificate.
     */
    exportCertificate(certFile: string, password: string): Promise<void>;
    /**
     * This method generates a new Certificate Signing Request (CSR) to be sent to a signing authority.
     */
    generateCSR(certSubject: string, keyName: string): Promise<string>;
    /**
     * This method imports a certificate from a file into the current certificate store.
     */
    importCertificate(certFile: string, password: string, subject: string): Promise<void>;
    /**
     * This method imports a signed Certificate Signing Request (CSR).
     */
    importSignedCSR(signedCSR: Uint8Array, keyName: string): Promise<void>;
    /**
     * This creates a new certificate in the current store and is signed by the selected certificate.
     */
    issueCertificate(certSubject: string, serialNumber: number): Promise<void>;
    /**
     * This lists the certificate stores.
     */
    listCertificateStores(): Promise<string>;
    /**
     * This lists the keysets in a Cryptographic Service Provider (CSP).
     */
    listKeys(): Promise<string>;
    /**
     * This lists the machine certificate stores.
     */
    listMachineStores(): Promise<string>;
    /**
     * This lists the certificates in a store.
     */
    listStoreCertificates(): Promise<string>;
    /**
     * This loads a certificate from a file.
     */
    readCertificate(fileName: string): Promise<void>;
    /**
     * This reads a Certificate Signing Request (CSR).
     */
    readCSR(CSR: string): Promise<string>;
    /**
     * This resets all certificate properties to their default values.
     */
    reset(): Promise<void>;
    /**
     * This method saves the currently selected public certificate to a file.
     */
    saveCertificate(fileName: string): Promise<void>;
    /**
     * This shows the certificate chain.
     */
    showCertificateChain(): Promise<string>;
    /**
     * This creates a signed certificate from a Certificate Signing Request (CSR).
     */
    signCSR(CSR: Uint8Array, serialNumber: number): Promise<string>;
    /**
     * This is the currently selected certificate.
     */
    getCert(): Certificate;
    /**
     * This is the currently selected certificate.
     */
    setCert(cert: Certificate): void;
    getCertExtensions(): CertExtensionList;
    /**
     * This is the certificate store to search for certificates.
     */
    getCertStore(): string;
    /**
     * This is the certificate store to search for certificates.
     */
    getCertStoreB(): Uint8Array;
    /**
     * This is the certificate store to search for certificates.
     */
    setCertStore(data: Uint8Array | string): void;
    setCertStore(data: Uint8Array, offset: number, length: number): void;
    /**
     * This is the password for the certificate store (if any).
     */
    getCertStorePassword(): string;
    /**
     * This is the password for the certificate store (if any).
     */
    setCertStorePassword(certStorePassword: string): void;
    /**
     * This is the type of certificate store for CertStore .
     */
    getCertStoreType(): CertMgrCertStoreTypes;
    /**
     * This is the type of certificate store for CertStore .
     */
    setCertStoreType(certStoreType: CertMgrCertStoreTypes): void;
    /**
     * This is the exported certificate string.
     */
    getExportedCert(): string;
    /**
     * This is the exported certificate string.
     */
    getExportedCertB(): Uint8Array;
    /**
     * This is the format to which the certificate is exported.
     */
    getExportFormat(): string;
    /**
     * This is the format to which the certificate is exported.
     */
    setExportFormat(exportFormat: string): void;
    /**
     * This controls whether to export the private key.
     */
    isExportPrivateKey(): boolean;
    /**
     * This controls whether to export the private key.
     */
    setExportPrivateKey(exportPrivateKey: boolean): void;
}
/************************************************** ENUMERATED TYPES **************************************************/
export declare enum DNSProtocols {
    ptUDP = 0,
    ptTCP = 1,
    ptTLS = 2,
    ptHTTPS = 3
}
export declare enum DNSQueryTypes {
    qtAddress = 1,
    qtNS = 2,
    qtMD = 3,
    qtMF = 4,
    qtCName = 5,
    qtSOA = 6,
    qtMailBox = 7,
    qtMailGroup = 8,
    qtMR = 9,
    qtNULL = 10,
    qtWKS = 11,
    qtPointer = 12,
    qtHostInfo = 13,
    qtMailInfo = 14,
    qtMX = 15,
    qtText = 16,
    qtRP = 17,
    qtAFSDB = 18,
    qtX25 = 19,
    qtISDN = 20,
    qtRT = 21,
    qtAAAA = 28,
    qtSRV = 33,
    qtNAPTR = 35,
    qtCERT = 37,
    qtRevLookup = 100
}
export declare enum DNSRecordSources {
    rsAnswerSection = 0,
    rsNameServerSection = 1,
    rsAdditionalRecordsSection = 2
}
/**
 * The DNS component is used to query DNS for record information.
 */
export declare class dns extends events.EventEmitter {
    private obj;
    constructor();
    about(): string;





    on(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    on(event: "Response", listener: (e: {
        readonly requestId: number;
        readonly domain: string;
        readonly statusCode: number;
        readonly description: string;
        readonly authoritative: boolean;
    }) => void): this;
    on(event: "SSLServerAuthentication", listener: (e: {
        readonly remoteAddress: string;
        readonly remotePort: number;
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    on(event: "SSLStatus", listener: (e: {
        readonly remoteAddress: string;
        readonly remotePort: number;
        readonly message: string;
    }) => void): this;
    once(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    once(event: "Response", listener: (e: {
        readonly requestId: number;
        readonly domain: string;
        readonly statusCode: number;
        readonly description: string;
        readonly authoritative: boolean;
    }) => void): this;
    once(event: "SSLServerAuthentication", listener: (e: {
        readonly remoteAddress: string;
        readonly remotePort: number;
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    once(event: "SSLStatus", listener: (e: {
        readonly remoteAddress: string;
        readonly remotePort: number;
        readonly message: string;
    }) => void): this;
    addListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    addListener(event: "Response", listener: (e: {
        readonly requestId: number;
        readonly domain: string;
        readonly statusCode: number;
        readonly description: string;
        readonly authoritative: boolean;
    }) => void): this;
    addListener(event: "SSLServerAuthentication", listener: (e: {
        readonly remoteAddress: string;
        readonly remotePort: number;
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    addListener(event: "SSLStatus", listener: (e: {
        readonly remoteAddress: string;
        readonly remotePort: number;
        readonly message: string;
    }) => void): this;
    prependListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    prependListener(event: "Response", listener: (e: {
        readonly requestId: number;
        readonly domain: string;
        readonly statusCode: number;
        readonly description: string;
        readonly authoritative: boolean;
    }) => void): this;
    prependListener(event: "SSLServerAuthentication", listener: (e: {
        readonly remoteAddress: string;
        readonly remotePort: number;
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    prependListener(event: "SSLStatus", listener: (e: {
        readonly remoteAddress: string;
        readonly remotePort: number;
        readonly message: string;
    }) => void): this;
    prependOnceListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    prependOnceListener(event: "Response", listener: (e: {
        readonly requestId: number;
        readonly domain: string;
        readonly statusCode: number;
        readonly description: string;
        readonly authoritative: boolean;
    }) => void): this;
    prependOnceListener(event: "SSLServerAuthentication", listener: (e: {
        readonly remoteAddress: string;
        readonly remotePort: number;
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    prependOnceListener(event: "SSLStatus", listener: (e: {
        readonly remoteAddress: string;
        readonly remotePort: number;
        readonly message: string;
    }) => void): this;
    /**
     * Sets or retrieves a configuration setting.
     */
    config(configurationString: string): Promise<string>;
    /**
     * This method processes events from the internal message queue.
     */
    doEvents(): Promise<void>;
    /**
     * This gets the value of the field indicated from a record.
     */
    getFieldValue(recordIndex: number, fieldName: string): Promise<string>;
    /**
     * This method interrupts the current method.
     */
    interrupt(): Promise<void>;
    /**
     * This method queries a domain.
     */
    query(domain: string): Promise<void>;
    /**
     * This method will reset the class.
     */
    reset(): Promise<void>;
    /**
     * This is the port to connect to on the DNS server.
     */
    getDNSPort(): number;
    /**
     * This is the port to connect to on the DNS server.
     */
    setDNSPort(DNSPort: number): void;
    /**
     * This is the address of the DNS server.
     */
    getDNSServer(): string;
    /**
     * This is the address of the DNS server.
     */
    setDNSServer(DNSServer: string): void;
    /**
     * The current status of the class.
     */
    isIdle(): boolean;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    getLocalHost(): string;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    setLocalHost(localHost: string): void;
    /**
     * This protocol is used for the DNS request.
     */
    getProtocol(): DNSProtocols;
    /**
     * This protocol is used for the DNS request.
     */
    setProtocol(protocol: DNSProtocols): void;
    /**
     * This is the type of record to query.
     */
    getQueryType(): DNSQueryTypes;
    /**
     * This is the type of record to query.
     */
    setQueryType(queryType: DNSQueryTypes): void;
    getRecords(): DNSRecordList;
    /**
     * The source of records provided in the Records properties.
     */
    getRecordSource(): DNSRecordSources;
    /**
     * The source of records provided in the Records properties.
     */
    setRecordSource(recordSource: DNSRecordSources): void;
    /**
     * This determines whether to ask the DNSServer to recursively query other servers.
     */
    isRecursive(): boolean;
    /**
     * This determines whether to ask the DNSServer to recursively query other servers.
     */
    setRecursive(recursive: boolean): void;
    /**
     * This is the Id of the current DNS request.
     */
    getRequestId(): number;
    /**
     * This is the Id of the current DNS request.
     */
    setRequestId(requestId: number): void;
    /**
     * This is a standard string interpretation of StatusCode .
     */
    getStatus(): string;
    /**
     * This contains the success or error code for the DNS query.
     */
    getStatusCode(): number;
    /**
     * This property includes the timeout for the class.
     */
    getTimeout(): number;
    /**
     * This property includes the timeout for the class.
     */
    setTimeout(timeout: number): void;
}
/************************************************** ENUMERATED TYPES **************************************************/
export declare enum FileMailerAuthMechanisms {
    amUserPassword = 0,
    amCRAMMD5 = 1,
    amNTLM = 2,
    amAPOP = 3,
    amSASLPlain = 4,
    amSASLDigestMD5 = 5,
    amKerberos = 6,
    amXOAUTH2 = 7
}
export declare enum FileMailerImportances {
    miUnspecified = 0,
    miHigh = 1,
    miNormal = 2,
    miLow = 3
}
export declare enum FileMailerPriorities {
    epUnspecified = 0,
    epNormal = 1,
    epUrgent = 2,
    epNonUrgent = 3
}
export declare enum FileMailerSensitivities {
    esUnspecified = 0,
    esPersonal = 1,
    esPrivate = 2,
    esCompanyConfidential = 3
}
export declare enum FileMailerSSLProviders {
    sslpAutomatic = 0,
    sslpPlatform = 1,
    sslpInternal = 2
}
export declare enum FileMailerSSLStartModes {
    sslAutomatic = 0,
    sslImplicit = 1,
    sslExplicit = 2,
    sslNone = 3
}
/**
 * The FileMailer Component is used to send emails with file attachments.
 */
export declare class filemailer extends events.EventEmitter {
    private obj;
    constructor();
    about(): string;








    on(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    on(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "PITrail", listener: (e: {
        readonly direction: number;
        readonly message: string;
    }) => void): this;
    on(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    on(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    on(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    on(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    once(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    once(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "PITrail", listener: (e: {
        readonly direction: number;
        readonly message: string;
    }) => void): this;
    once(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    once(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    once(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    once(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    addListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    addListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "PITrail", listener: (e: {
        readonly direction: number;
        readonly message: string;
    }) => void): this;
    addListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    addListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    addListener(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    addListener(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    prependListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "PITrail", listener: (e: {
        readonly direction: number;
        readonly message: string;
    }) => void): this;
    prependListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    prependListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    prependListener(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependListener(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    prependOnceListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependOnceListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "PITrail", listener: (e: {
        readonly direction: number;
        readonly message: string;
    }) => void): this;
    prependOnceListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    prependOnceListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    prependOnceListener(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependOnceListener(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    /**
     * This adds FileName as an attachment.
     */
    addAttachment(fileName: string): Promise<void>;
    /**
     * Sets or retrieves a configuration setting.
     */
    config(configurationString: string): Promise<string>;
    /**
     * This method connects to the mail relay and sends the SMTP HELO command.
     */
    connect(): Promise<void>;
    /**
     * This method disconnects from the SMTP server.
     */
    disconnect(): Promise<void>;
    /**
     * This method processes events from the internal message queue.
     */
    doEvents(): Promise<void>;
    /**
     * This method interrupts the current method.
     */
    interrupt(): Promise<void>;
    /**
     * This method sends the messages that previously have been queued into QueueDir .
     */
    processQueue(queueDir: string): Promise<void>;
    /**
     * This method queues the message into QueueDir .
     */
    queue(queueDir: string): Promise<string>;
    /**
     * This method will reset the class.
     */
    reset(): Promise<void>;
    /**
     * This method resets all the message headers to empty.
     */
    resetHeaders(): Promise<void>;
    /**
     * This sends the current message and the MIME-encoded attachment.
     */
    send(): Promise<void>;
    /**
     * This method sends the exact command directly to the server.
     */
    sendCommand(command: string): Promise<void>;
    getAttachments(): FileAttachmentList;
    /**
     * This property is used when connecting to the mail server.
     */
    getAuthMechanism(): FileMailerAuthMechanisms;
    /**
     * This property is used when connecting to the mail server.
     */
    setAuthMechanism(authMechanism: FileMailerAuthMechanisms): void;
    /**
     * This property includes a comma-separated list of addresses for blind carbon copies (optional).
     */
    getBCc(): string;
    /**
     * This property includes a comma-separated list of addresses for blind carbon copies (optional).
     */
    setBCc(BCc: string): void;
    /**
     * This property includes a comma-separated list of addresses for carbon copies (optional).
     */
    getCc(): string;
    /**
     * This property includes a comma-separated list of addresses for carbon copies (optional).
     */
    setCc(cc: string): void;
    /**
     * Whether the class is connected.
     */
    isConnected(): boolean;
    /**
     * This property includes the email address to which to send a delivery notification.
     */
    getDeliveryNotificationTo(): string;
    /**
     * This property includes the email address to which to send a delivery notification.
     */
    setDeliveryNotificationTo(deliveryNotificationTo: string): void;
    /**
     * A set of properties related to firewall access.
     */
    getFirewall(): Firewall;
    /**
     * A set of properties related to firewall access.
     */
    setFirewall(firewall: Firewall): void;
    /**
     * This property includes the  email address of the sender (required).
     */
    getFrom(): string;
    /**
     * This property includes the  email address of the sender (required).
     */
    setFrom(from: string): void;
    /**
     * The current status of the class.
     */
    isIdle(): boolean;
    /**
     * This property indicates the importance of the mail message (optional).
     */
    getImportance(): FileMailerImportances;
    /**
     * This property indicates the importance of the mail message (optional).
     */
    setImportance(importance: FileMailerImportances): void;
    /**
     * This property indicates the last reply received from the server.
     */
    getLastReply(): string;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    getLocalHost(): string;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    setLocalHost(localHost: string): void;
    /**
     * This property includes the server port for SMTP (default 25).
     */
    getMailPort(): number;
    /**
     * This property includes the server port for SMTP (default 25).
     */
    setMailPort(mailPort: number): void;
    /**
     * This property includes the name or address of a mail server (mail relay).
     */
    getMailServer(): string;
    /**
     * This property includes the name or address of a mail server (mail relay).
     */
    setMailServer(mailServer: string): void;
    /**
     * This property includes the date of the mail message (optional).
     */
    getMessageDate(): string;
    /**
     * This property includes the date of the mail message (optional).
     */
    setMessageDate(messageDate: string): void;
    /**
     * This property includes the message identifier for the message.
     */
    getMessageId(): string;
    /**
     * This property includes the message identifier for the message.
     */
    setMessageId(messageId: string): void;
    getMessageRecipients(): MessageRecipientList;
    /**
     * This is the full text of the message to send (without headers).
     */
    getMessageText(): string;
    /**
     * This is the full text of the message to send (without headers).
     */
    setMessageText(messageText: string): void;
    /**
     * This property includes an RFC 822-compliant string consisting of extra headers.
     */
    getOtherHeaders(): string;
    /**
     * This property includes an RFC 822-compliant string consisting of extra headers.
     */
    setOtherHeaders(otherHeaders: string): void;
    /**
     * This property includes a password for logon to the MailServer .
     */
    getPassword(): string;
    /**
     * This property includes a password for logon to the MailServer .
     */
    setPassword(password: string): void;
    /**
     * This property includes the priority of the mail message (optional).
     */
    getPriority(): FileMailerPriorities;
    /**
     * This property includes the priority of the mail message (optional).
     */
    setPriority(priority: FileMailerPriorities): void;
    /**
     * This property includes the email address to send a read-receipt to.
     */
    getReadReceiptTo(): string;
    /**
     * This property includes the email address to send a read-receipt to.
     */
    setReadReceiptTo(readReceiptTo: string): void;
    /**
     * This property includes a mail address to which to reply (optional).
     */
    getReplyTo(): string;
    /**
     * This property includes a mail address to which to reply (optional).
     */
    setReplyTo(replyTo: string): void;
    /**
     * This property includes a comma-separated list of addresses for destinations (required).
     */
    getSendTo(): string;
    /**
     * This property includes a comma-separated list of addresses for destinations (required).
     */
    setSendTo(sendTo: string): void;
    /**
     * This property indicates the sensitivity of the mail message (optional).
     */
    getSensitivity(): FileMailerSensitivities;
    /**
     * This property indicates the sensitivity of the mail message (optional).
     */
    setSensitivity(sensitivity: FileMailerSensitivities): void;
    /**
     * Instructs the class to unconditionally accept the server certificate that matches the supplied certificate.
     */
    getSSLAcceptServerCert(): Certificate;
    /**
     * Instructs the class to unconditionally accept the server certificate that matches the supplied certificate.
     */
    setSSLAcceptServerCert(SSLAcceptServerCert: Certificate): void;
    /**
     * The certificate to be used during Secure Sockets Layer (SSL) negotiation.
     */
    getSSLCert(): Certificate;
    /**
     * The certificate to be used during Secure Sockets Layer (SSL) negotiation.
     */
    setSSLCert(SSLCert: Certificate): void;
    /**
     * This property indicates whether Transport Layer Security/Secure Sockets Layer (TLS/SSL) is enabled.
     */
    isSSLEnabled(): boolean;
    /**
     * This property indicates whether Transport Layer Security/Secure Sockets Layer (TLS/SSL) is enabled.
     */
    setSSLEnabled(SSLEnabled: boolean): void;
    /**
     * The Secure Sockets Layer/Transport Layer Security (SSL/TLS) implementation to use.
     */
    getSSLProvider(): FileMailerSSLProviders;
    /**
     * The Secure Sockets Layer/Transport Layer Security (SSL/TLS) implementation to use.
     */
    setSSLProvider(SSLProvider: FileMailerSSLProviders): void;
    /**
     * The server certificate for the last established connection.
     */
    getSSLServerCert(): Certificate;
    /**
     * This property determines how the class starts the Secure Sockets Layer (SSL) negotiation.
     */
    getSSLStartMode(): FileMailerSSLStartModes;
    /**
     * This property determines how the class starts the Secure Sockets Layer (SSL) negotiation.
     */
    setSSLStartMode(SSLStartMode: FileMailerSSLStartModes): void;
    /**
     * This property includes the subject of the mail message (optional).
     */
    getSubject(): string;
    /**
     * This property includes the subject of the mail message (optional).
     */
    setSubject(subject: string): void;
    /**
     * The timeout for the class.
     */
    getTimeout(): number;
    /**
     * The timeout for the class.
     */
    setTimeout(timeout: number): void;
    /**
     * This property includes the user identifier needed to log in as in the MailServer .
     */
    getUser(): string;
    /**
     * This property includes the user identifier needed to log in as in the MailServer .
     */
    setUser(user: string): void;
}
/************************************************** ENUMERATED TYPES **************************************************/
export declare enum FTPSSLProviders {
    sslpAutomatic = 0,
    sslpPlatform = 1,
    sslpInternal = 2
}
export declare enum FTPSSLStartModes {
    sslAutomatic = 0,
    sslImplicit = 1,
    sslExplicit = 2,
    sslNone = 3
}
export declare enum FTPTransferModes {
    tmDefault = 0,
    tmASCII = 1,
    tmBinary = 2
}
/**
 * The FTP Component can be used to transfer files to and from
FTP servers using the FTP protocol.
 */
export declare class ftp extends events.EventEmitter {
    private obj;
    constructor();
    about(): string;









    on(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "DirList", listener: (e: {
        readonly dirEntry: string;
        readonly fileName: string;
        readonly isDir: boolean;
        readonly fileSize: number;
        readonly fileTime: string;
    }) => void): this;
    on(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    on(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "PITrail", listener: (e: {
        readonly direction: number;
        readonly message: string;
    }) => void): this;
    on(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    on(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    on(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    on(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    once(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "DirList", listener: (e: {
        readonly dirEntry: string;
        readonly fileName: string;
        readonly isDir: boolean;
        readonly fileSize: number;
        readonly fileTime: string;
    }) => void): this;
    once(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    once(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "PITrail", listener: (e: {
        readonly direction: number;
        readonly message: string;
    }) => void): this;
    once(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    once(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    once(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    once(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    addListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "DirList", listener: (e: {
        readonly dirEntry: string;
        readonly fileName: string;
        readonly isDir: boolean;
        readonly fileSize: number;
        readonly fileTime: string;
    }) => void): this;
    addListener(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    addListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "PITrail", listener: (e: {
        readonly direction: number;
        readonly message: string;
    }) => void): this;
    addListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    addListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    addListener(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    addListener(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    prependListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "DirList", listener: (e: {
        readonly dirEntry: string;
        readonly fileName: string;
        readonly isDir: boolean;
        readonly fileSize: number;
        readonly fileTime: string;
    }) => void): this;
    prependListener(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "PITrail", listener: (e: {
        readonly direction: number;
        readonly message: string;
    }) => void): this;
    prependListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    prependListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    prependListener(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependListener(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    prependOnceListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "DirList", listener: (e: {
        readonly dirEntry: string;
        readonly fileName: string;
        readonly isDir: boolean;
        readonly fileSize: number;
        readonly fileTime: string;
    }) => void): this;
    prependOnceListener(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependOnceListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "PITrail", listener: (e: {
        readonly direction: number;
        readonly message: string;
    }) => void): this;
    prependOnceListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    prependOnceListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    prependOnceListener(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependOnceListener(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    /**
     * The method aborts the current upload or download.
     */
    abort(): Promise<void>;
    /**
     * This method appends data from LocalFile to a RemoteFile on an FTP server.
     */
    append(): Promise<void>;
    /**
     * This method changes the current path on the FTP server.
     */
    changeRemotePath(remotePath: string): Promise<void>;
    /**
     * This method changes the transfer mode for the current connection.
     */
    changeTransferMode(transferMode: number): Promise<void>;
    /**
     * This method returns True if the file specified by RemoteFile exists on the server.
     */
    checkFileExists(): Promise<boolean>;
    /**
     * Sets or retrieves a configuration setting.
     */
    config(configurationString: string): Promise<string>;
    /**
     * This method connects to the FTP server without logging in.
     */
    connect(): Promise<void>;
    /**
     * This method removes a file specified by FileName from an FTP server.
     */
    deleteFile(fileName: string): Promise<void>;
    /**
     * This method disconnects from the server without first logging off.
     */
    disconnect(): Promise<void>;
    /**
     * This method processes events from the internal message queue.
     */
    doEvents(): Promise<void>;
    /**
     * This method downloads a RemoteFile from an FTP server.
     */
    download(): Promise<void>;
    /**
     * This method interrupts the current method.
     */
    interrupt(): Promise<void>;
    /**
     * List the current directory specified by ChangeRemotePath on an FTP server.
     */
    listDirectory(): Promise<void>;
    /**
     * This method lists extended directory information for the remote path specified by calling ChangeRemotePath .
     */
    listDirectoryLong(): Promise<void>;
    /**
     * This method is used to log off from the FTP server by posting a QUIT command.
     */
    logoff(): Promise<void>;
    /**
     * This method is used to log on to the FTP RemoteHost using the current User and Password .
     */
    logon(): Promise<void>;
    /**
     * This method is used to create a directory on the FTP server.
     */
    makeDirectory(newDir: string): Promise<void>;
    /**
     * This returns the size of the file specified by RemoteFile .
     */
    queryFileSize(): Promise<number>;
    /**
     * This returns the modified time of the file specified by RemoteFile .
     */
    queryFileTime(): Promise<string>;
    /**
     * This queries the server for the current path.
     */
    queryRemotePath(): Promise<string>;
    /**
     * This removes a directory specified by DirName from an FTP server.
     */
    removeDirectory(dirName: string): Promise<void>;
    /**
     * This changes the name of RemoteFile to NewName .
     */
    renameFile(newName: string): Promise<void>;
    /**
     * This method will reset the class.
     */
    reset(): Promise<void>;
    /**
     * This method sends the exact command directly to the server.
     */
    sendCommand(command: string): Promise<void>;
    /**
     * This method uploads a file with a unique name to an FTP server.
     */
    storeUnique(): Promise<void>;
    /**
     * This method uploads a file specified by LocalFile to an FTP server.
     */
    upload(): Promise<void>;
    /**
     * The property includes the user account needed to log in.
     */
    getAccount(): string;
    /**
     * The property includes the user account needed to log in.
     */
    setAccount(account: string): void;
    /**
     * Whether the class is connected.
     */
    isConnected(): boolean;
    getDirList(): DirEntryList;
    /**
     * A set of properties related to firewall access.
     */
    getFirewall(): Firewall;
    /**
     * A set of properties related to firewall access.
     */
    setFirewall(firewall: Firewall): void;
    /**
     * The current status of the class.
     */
    isIdle(): boolean;
    /**
     * This property indicates the last reply received from the server.
     */
    getLastReply(): string;
    /**
     * This is the path to a local file for download or upload. If the file exists, it is overwritten.
     */
    getLocalFile(): string;
    /**
     * This is the path to a local file for download or upload. If the file exists, it is overwritten.
     */
    setLocalFile(localFile: string): void;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    getLocalHost(): string;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    setLocalHost(localHost: string): void;
    /**
     * This indicates whether or not the class should overwrite files during transfer.
     */
    isOverwrite(): boolean;
    /**
     * This indicates whether or not the class should overwrite files during transfer.
     */
    setOverwrite(overwrite: boolean): void;
    /**
     * This controls whether or not to direct the server into a passive mode. It is recommended if behind a firewall.
     */
    isPassive(): boolean;
    /**
     * This controls whether or not to direct the server into a passive mode. It is recommended if behind a firewall.
     */
    setPassive(passive: boolean): void;
    /**
     * This is the password used to log in.
     */
    getPassword(): string;
    /**
     * This is the password used to log in.
     */
    setPassword(password: string): void;
    /**
     * This is the name of the remote file for uploading, downloading, and performing other operations.
     */
    getRemoteFile(): string;
    /**
     * This is the name of the remote file for uploading, downloading, and performing other operations.
     */
    setRemoteFile(remoteFile: string): void;
    /**
     * This is the domain name or IP address of the FTP server.
     */
    getRemoteHost(): string;
    /**
     * This is the domain name or IP address of the FTP server.
     */
    setRemoteHost(remoteHost: string): void;
    /**
     * This is the port for the FTP service (default is 21).
     */
    getRemotePort(): number;
    /**
     * This is the port for the FTP service (default is 21).
     */
    setRemotePort(remotePort: number): void;
    /**
     * Instructs the class to unconditionally accept the server certificate that matches the supplied certificate.
     */
    getSSLAcceptServerCert(): Certificate;
    /**
     * Instructs the class to unconditionally accept the server certificate that matches the supplied certificate.
     */
    setSSLAcceptServerCert(SSLAcceptServerCert: Certificate): void;
    /**
     * The certificate to be used during Secure Sockets Layer (SSL) negotiation.
     */
    getSSLCert(): Certificate;
    /**
     * The certificate to be used during Secure Sockets Layer (SSL) negotiation.
     */
    setSSLCert(SSLCert: Certificate): void;
    /**
     * This property indicates whether Transport Layer Security/Secure Sockets Layer (TLS/SSL) is enabled.
     */
    isSSLEnabled(): boolean;
    /**
     * This property indicates whether Transport Layer Security/Secure Sockets Layer (TLS/SSL) is enabled.
     */
    setSSLEnabled(SSLEnabled: boolean): void;
    /**
     * The Secure Sockets Layer/Transport Layer Security (SSL/TLS) implementation to use.
     */
    getSSLProvider(): FTPSSLProviders;
    /**
     * The Secure Sockets Layer/Transport Layer Security (SSL/TLS) implementation to use.
     */
    setSSLProvider(SSLProvider: FTPSSLProviders): void;
    /**
     * The server certificate for the last established connection.
     */
    getSSLServerCert(): Certificate;
    /**
     * This property determines how the class starts the Secure Sockets Layer (SSL) negotiation.
     */
    getSSLStartMode(): FTPSSLStartModes;
    /**
     * This property determines how the class starts the Secure Sockets Layer (SSL) negotiation.
     */
    setSSLStartMode(SSLStartMode: FTPSSLStartModes): void;
    /**
     * This is the byte index in RemoteFile and LocalFile from which to start a transmission.
     */
    getStartByte(): string;
    /**
     * This is the byte index in RemoteFile and LocalFile from which to start a transmission.
     */
    setStartByte(startByte: string): void;
    /**
     * The timeout for the class.
     */
    getTimeout(): number;
    /**
     * The timeout for the class.
     */
    setTimeout(timeout: number): void;
    /**
     * This property indicates the transfer mode (ASCII or binary). If the value is 0 (default), the initial server mode will be used.
     */
    getTransferMode(): FTPTransferModes;
    /**
     * This property contains the user identifier to use to log in.
     */
    getUser(): string;
    /**
     * This property contains the user identifier to use to log in.
     */
    setUser(user: string): void;
}
/************************************************** ENUMERATED TYPES **************************************************/
export declare enum GRPCFollowRedirects {
    frNever = 0,
    frAlways = 1,
    frSameScheme = 2
}
export declare enum GRPCSSLProviders {
    sslpAutomatic = 0,
    sslpPlatform = 1,
    sslpInternal = 2
}
/**
 * The GRPC component is designed to send and receive messages over gRPC. The component can be used to both create messages to send as well as read incoming messages.
 */
export declare class grpc extends events.EventEmitter {
    private obj;
    constructor();
    about(): string;













    on(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    on(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    on(event: "MessageIn", listener: (e: {
        readonly compressed: boolean;
        readonly messageLength: number;
    }) => void): this;
    on(event: "Redirect", listener: (e: {
        readonly location: string;
        accept: boolean;
    }) => void): this;
    on(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    on(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    on(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    on(event: "Status", listener: (e: {
        readonly HTTPVersion: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    once(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    once(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    once(event: "MessageIn", listener: (e: {
        readonly compressed: boolean;
        readonly messageLength: number;
    }) => void): this;
    once(event: "Redirect", listener: (e: {
        readonly location: string;
        accept: boolean;
    }) => void): this;
    once(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    once(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    once(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    once(event: "Status", listener: (e: {
        readonly HTTPVersion: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    addListener(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    addListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    addListener(event: "MessageIn", listener: (e: {
        readonly compressed: boolean;
        readonly messageLength: number;
    }) => void): this;
    addListener(event: "Redirect", listener: (e: {
        readonly location: string;
        accept: boolean;
    }) => void): this;
    addListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    addListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    addListener(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    addListener(event: "Status", listener: (e: {
        readonly HTTPVersion: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    prependListener(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    prependListener(event: "MessageIn", listener: (e: {
        readonly compressed: boolean;
        readonly messageLength: number;
    }) => void): this;
    prependListener(event: "Redirect", listener: (e: {
        readonly location: string;
        accept: boolean;
    }) => void): this;
    prependListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    prependListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    prependListener(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependListener(event: "Status", listener: (e: {
        readonly HTTPVersion: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    prependOnceListener(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependOnceListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    prependOnceListener(event: "MessageIn", listener: (e: {
        readonly compressed: boolean;
        readonly messageLength: number;
    }) => void): this;
    prependOnceListener(event: "Redirect", listener: (e: {
        readonly location: string;
        accept: boolean;
    }) => void): this;
    prependOnceListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    prependOnceListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    prependOnceListener(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependOnceListener(event: "Status", listener: (e: {
        readonly HTTPVersion: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    /**
     * This method begins reading a message.
     */
    beginReadMessage(): Promise<void>;
    /**
     * This method begins reading a repeated packed field.
     */
    beginReadPacked(wireType: number): Promise<number>;
    /**
     * This method begins writing a new message.
     */
    beginWriteMessage(): Promise<void>;
    /**
     * This method begins writing a new packed repeated field.
     */
    beginWritePacked(): Promise<void>;
    /**
     * This method calculates the Authorization header based on provided credentials.
     */
    calcAuthorization(): Promise<void>;
    /**
     * Sets or retrieves a configuration setting.
     */
    config(configurationString: string): Promise<string>;
    /**
     * This method processes events from the internal message queue.
     */
    doEvents(): Promise<void>;
    /**
     * This method ends reading a message.
     */
    endReadMessage(): Promise<void>;
    /**
     * This method ends reading a packed repeated field.
     */
    endReadPacked(): Promise<void>;
    /**
     * This method ends writing a message.
     */
    endWriteMessage(): Promise<void>;
    /**
     * This method ends writing a packed repeated field.
     */
    endWritePacked(): Promise<void>;
    /**
     * This method determines whether a specific element exists in the document.
     */
    hasXPath(XPath: string): Promise<boolean>;
    /**
     * This method interrupts the current method.
     */
    interrupt(): Promise<void>;
    /**
     * This method posts a message to the HTTP server using the HTTP POST method.
     */
    post(URL: string): Promise<void>;
    /**
     * This method reads the Boolean value from the current field number and returns it.
     */
    readBool(): Promise<boolean>;
    /**
     * This method reads the value of type byte from the current field number and returns it.
     */
    readBytes(): Promise<Uint8Array>;
    /**
     * This method reads the value of type double from the current field number and returns it.
     */
    readDouble(): Promise<string>;
    /**
     * This method reads the next field number and returns it.
     */
    readFieldNumber(): Promise<number>;
    /**
     * This method reads the fixed int32 value from the current field number and returns it.
     */
    readFixed32(): Promise<number>;
    /**
     * This method reads the fixed int64 value from the current field number and returns it.
     */
    readFixed64(): Promise<number>;
    /**
     * This method reads the float value from the current field number and returns it.
     */
    readFloat(): Promise<string>;
    /**
     * This method reads the int32 value from the current field number and returns it.
     */
    readInt32(): Promise<number>;
    /**
     * This method reads the int64 value from the current field number and returns it.
     */
    readInt64(): Promise<number>;
    /**
     * This method reads the sint32 value from the current field number and returns it.
     */
    readSint32(): Promise<number>;
    /**
     * This method reads the sint64 value from the current field number and returns it.
     */
    readSint64(): Promise<number>;
    /**
     * This method skips reading a value from the current field.
     */
    readSkip(): Promise<void>;
    /**
     * This method reads the string value from the current field number and returns it.
     */
    readString(): Promise<string>;
    /**
     * This method will reset the class.
     */
    reset(): Promise<void>;
    /**
     * This method navigates to the specified XPath if it exists.
     */
    tryXPath(xpath: string): Promise<boolean>;
    /**
     * This method writes a Boolean value to the current field number.
     */
    writeBool(value: boolean): Promise<void>;
    /**
     * This method writes a value of type byte to the current field number.
     */
    writeBytes(value: Uint8Array): Promise<void>;
    /**
     * This method writes a value of type double to the current field number.
     */
    writeDouble(value: string): Promise<void>;
    /**
     * This method specifies the field number to write.
     */
    writeFieldNumber(value: number): Promise<void>;
    /**
     * This method writes a fixed32 value to the current field number.
     */
    writeFixed32(value: number): Promise<void>;
    /**
     * This method writes a fixed64 value to the current field number.
     */
    writeFixed64(value: number): Promise<void>;
    /**
     * This method writes a float value to the current field number specified.
     */
    writeFloat(value: string): Promise<void>;
    /**
     * This method writes an int32 value to the current field number.
     */
    writeInt32(value: number): Promise<void>;
    /**
     * This method writes an int64 value to the current field number.
     */
    writeInt64(value: number): Promise<void>;
    /**
     * This method writes an sint32 value to the current field number.
     */
    writeSint32(value: number): Promise<void>;
    /**
     * This method writes an sint64 value to the current field number.
     */
    writeSint64(value: number): Promise<void>;
    /**
     * This method writes a string value to the current field number.
     */
    writeString(value: string): Promise<void>;
    /**
     * This is the authorization string to be sent to the server.
     */
    getAuthorization(): string;
    /**
     * This is the authorization string to be sent to the server.
     */
    setAuthorization(authorization: string): void;
    /**
     * This property shows whether the class is connected.
     */
    isConnected(): boolean;
    /**
     * A set of properties related to firewall access.
     */
    getFirewall(): Firewall;
    /**
     * A set of properties related to firewall access.
     */
    setFirewall(firewall: Firewall): void;
    /**
     * This property determines what happens when the server issues a redirect.
     */
    getFollowRedirects(): GRPCFollowRedirects;
    /**
     * This property determines what happens when the server issues a redirect.
     */
    setFollowRedirects(followRedirects: GRPCFollowRedirects): void;
    /**
     * The gRPC timeout.
     */
    getGRPCTimeout(): number;
    /**
     * The gRPC timeout.
     */
    setGRPCTimeout(GRPCTimeout: number): void;
    /**
     * The current status of the class.
     */
    isIdle(): boolean;
    /**
     * This property contains the message in a raw format.
     */
    getMessageData(): string;
    /**
     * This property contains the message in a raw format.
     */
    getMessageDataB(): Uint8Array;
    /**
     * This property includes other headers as determined by the user (optional).
     */
    getOtherHeaders(): string;
    /**
     * This property includes other headers as determined by the user (optional).
     */
    setOtherHeaders(otherHeaders: string): void;
    getParsedHeaders(): HeaderList;
    /**
     * A set of properties related to proxy access.
     */
    getProxy(): Proxy;
    /**
     * A set of properties related to proxy access.
     */
    setProxy(proxy: Proxy): void;
    /**
     * Instructs the class to unconditionally accept the server certificate that matches the supplied certificate.
     */
    getSSLAcceptServerCert(): Certificate;
    /**
     * Instructs the class to unconditionally accept the server certificate that matches the supplied certificate.
     */
    setSSLAcceptServerCert(SSLAcceptServerCert: Certificate): void;
    /**
     * The certificate to be used during Secure Sockets Layer (SSL) negotiation.
     */
    getSSLCert(): Certificate;
    /**
     * The certificate to be used during Secure Sockets Layer (SSL) negotiation.
     */
    setSSLCert(SSLCert: Certificate): void;
    /**
     * The Secure Sockets Layer/Transport Layer Security (SSL/TLS) implementation to use.
     */
    getSSLProvider(): GRPCSSLProviders;
    /**
     * The Secure Sockets Layer/Transport Layer Security (SSL/TLS) implementation to use.
     */
    setSSLProvider(SSLProvider: GRPCSSLProviders): void;
    /**
     * The server certificate for the last established connection.
     */
    getSSLServerCert(): Certificate;
    /**
     * This property includes the gRPC status code.
     */
    getStatus(): string;
    /**
     * This property includes a unicode string description of an error, which is physically encoded as UTF-8 followed by percent-encoding.
     */
    getStatusDescription(): string;
    /**
     * This property is the first line of the last server response.
     */
    getStatusLine(): string;
    /**
     * The timeout for the class.
     */
    getTimeout(): number;
    /**
     * The timeout for the class.
     */
    setTimeout(timeout: number): void;
    /**
     * This property includes the contents of the last response from the server.
     */
    getTransferredData(): string;
    /**
     * This property includes the contents of the last response from the server.
     */
    getTransferredDataB(): Uint8Array;
    /**
     * This property specifies the maximum amount of data to be transferred.
     */
    getTransferredDataLimit(): number;
    /**
     * This property specifies the maximum amount of data to be transferred.
     */
    setTransferredDataLimit(transferredDataLimit: number): void;
    /**
     * This property includes the complete set of headers as received from the server.
     */
    getTransferredHeaders(): string;
    /**
     * This property includes the URL to post.
     */
    getURL(): string;
    /**
     * This property includes the URL to post.
     */
    setURL(URL: string): void;
    /**
     * This property includes the number of packed fields or instances of the field specified by XPath .
     */
    getXCount(): number;
    /**
     * This property provides a way to point to a specific field in the message.
     */
    getXPath(): string;
    /**
     * This property provides a way to point to a specific field in the message.
     */
    setXPath(XPath: string): void;
}
/************************************************** ENUMERATED TYPES **************************************************/
export declare enum HTMLMailerAuthMechanisms {
    amUserPassword = 0,
    amCRAMMD5 = 1,
    amNTLM = 2,
    amAPOP = 3,
    amSASLPlain = 4,
    amSASLDigestMD5 = 5,
    amKerberos = 6,
    amXOAUTH2 = 7
}
export declare enum HTMLMailerImportances {
    miUnspecified = 0,
    miHigh = 1,
    miNormal = 2,
    miLow = 3
}
export declare enum HTMLMailerPriorities {
    epUnspecified = 0,
    epNormal = 1,
    epUrgent = 2,
    epNonUrgent = 3
}
export declare enum HTMLMailerSensitivities {
    esUnspecified = 0,
    esPersonal = 1,
    esPrivate = 2,
    esCompanyConfidential = 3
}
export declare enum HTMLMailerSSLProviders {
    sslpAutomatic = 0,
    sslpPlatform = 1,
    sslpInternal = 2
}
export declare enum HTMLMailerSSLStartModes {
    sslAutomatic = 0,
    sslImplicit = 1,
    sslExplicit = 2,
    sslNone = 3
}
/**
 * The HTMLMailer Component is used to send HTML emails, including embedded images.
 */
export declare class htmlmailer extends events.EventEmitter {
    private obj;
    constructor();
    about(): string;








    on(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    on(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "PITrail", listener: (e: {
        readonly direction: number;
        readonly message: string;
    }) => void): this;
    on(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    on(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    on(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    on(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    once(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    once(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "PITrail", listener: (e: {
        readonly direction: number;
        readonly message: string;
    }) => void): this;
    once(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    once(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    once(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    once(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    addListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    addListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "PITrail", listener: (e: {
        readonly direction: number;
        readonly message: string;
    }) => void): this;
    addListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    addListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    addListener(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    addListener(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    prependListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "PITrail", listener: (e: {
        readonly direction: number;
        readonly message: string;
    }) => void): this;
    prependListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    prependListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    prependListener(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependListener(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    prependOnceListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependOnceListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "PITrail", listener: (e: {
        readonly direction: number;
        readonly message: string;
    }) => void): this;
    prependOnceListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    prependOnceListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    prependOnceListener(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependOnceListener(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    /**
     * This adds FileName as an attachment.
     */
    addAttachment(fileName: string): Promise<void>;
    /**
     * This method populates MessageText with the plaintext version of the message.
     */
    calcMessageText(): Promise<void>;
    /**
     * Sets or retrieves a configuration setting.
     */
    config(configurationString: string): Promise<string>;
    /**
     * This method connects to the mail relay and sends the SMTP HELO command.
     */
    connect(): Promise<void>;
    /**
     * This method disconnects from the SMTP server.
     */
    disconnect(): Promise<void>;
    /**
     * This method processes events from the internal message queue.
     */
    doEvents(): Promise<void>;
    /**
     * This method interrupts the current method.
     */
    interrupt(): Promise<void>;
    /**
     * This method sends the messages that previously have been queued into QueueDir .
     */
    processQueue(queueDir: string): Promise<void>;
    /**
     * This method queues the message into QueueDir .
     */
    queue(queueDir: string): Promise<string>;
    /**
     * This method will reset the class.
     */
    reset(): Promise<void>;
    /**
     * This method resets all the message headers to empty.
     */
    resetHeaders(): Promise<void>;
    /**
     * This method sends the current message and MIME-encoded attachment.
     */
    send(): Promise<void>;
    /**
     * This method sends the exact command directly to the server.
     */
    sendCommand(command: string): Promise<void>;
    getAttachments(): FileAttachmentList;
    /**
     * This property is used when connecting to the mail server.
     */
    getAuthMechanism(): HTMLMailerAuthMechanisms;
    /**
     * This property is used when connecting to the mail server.
     */
    setAuthMechanism(authMechanism: HTMLMailerAuthMechanisms): void;
    /**
     * This property includes a comma-separated list of addresses for blind carbon copies (optional).
     */
    getBCc(): string;
    /**
     * This property includes a comma-separated list of addresses for blind carbon copies (optional).
     */
    setBCc(BCc: string): void;
    /**
     * This property includes a comma-separated list of addresses for carbon copies (optional).
     */
    getCc(): string;
    /**
     * This property includes a comma-separated list of addresses for carbon copies (optional).
     */
    setCc(cc: string): void;
    /**
     * Whether the class is connected.
     */
    isConnected(): boolean;
    /**
     * This property includes the email address to which to send a delivery notification.
     */
    getDeliveryNotificationTo(): string;
    /**
     * This property includes the email address to which to send a delivery notification.
     */
    setDeliveryNotificationTo(deliveryNotificationTo: string): void;
    /**
     * A set of properties related to firewall access.
     */
    getFirewall(): Firewall;
    /**
     * A set of properties related to firewall access.
     */
    setFirewall(firewall: Firewall): void;
    /**
     * This property includes the  email address of the sender (required).
     */
    getFrom(): string;
    /**
     * This property includes the  email address of the sender (required).
     */
    setFrom(from: string): void;
    /**
     * This property includes the path to a local HTML file.
     */
    getHTMLFile(): string;
    /**
     * This property includes the path to a local HTML file.
     */
    setHTMLFile(HTMLFile: string): void;
    /**
     * The current status of the class.
     */
    isIdle(): boolean;
    getImages(): HTMLImageList;
    /**
     * This property indicates the importance of the mail message (optional).
     */
    getImportance(): HTMLMailerImportances;
    /**
     * This property indicates the importance of the mail message (optional).
     */
    setImportance(importance: HTMLMailerImportances): void;
    /**
     * This property indicates the last reply received from the server.
     */
    getLastReply(): string;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    getLocalHost(): string;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    setLocalHost(localHost: string): void;
    /**
     * This property includes the server port for SMTP (default 25).
     */
    getMailPort(): number;
    /**
     * This property includes the server port for SMTP (default 25).
     */
    setMailPort(mailPort: number): void;
    /**
     * This property includes the name or address of a mail server (mail relay).
     */
    getMailServer(): string;
    /**
     * This property includes the name or address of a mail server (mail relay).
     */
    setMailServer(mailServer: string): void;
    /**
     * This property includes the date of the mail message (optional).
     */
    getMessageDate(): string;
    /**
     * This property includes the date of the mail message (optional).
     */
    setMessageDate(messageDate: string): void;
    /**
     * This property includes the HTML version of the message.
     */
    getMessageHTML(): string;
    /**
     * This property includes the HTML version of the message.
     */
    setMessageHTML(messageHTML: string): void;
    /**
     * This property includes the message identifier for the message.
     */
    getMessageId(): string;
    /**
     * This property includes the message identifier for the message.
     */
    setMessageId(messageId: string): void;
    getMessageRecipients(): MessageRecipientList;
    /**
     * This property includes the plaintext version of the message.
     */
    getMessageText(): string;
    /**
     * This property includes the plaintext version of the message.
     */
    setMessageText(messageText: string): void;
    /**
     * This property includes an RFC 822-compliant string consisting of extra headers.
     */
    getOtherHeaders(): string;
    /**
     * This property includes an RFC 822-compliant string consisting of extra headers.
     */
    setOtherHeaders(otherHeaders: string): void;
    /**
     * This property controls the behavior of the MessageHTML property.
     */
    isParseHTML(): boolean;
    /**
     * This property controls the behavior of the MessageHTML property.
     */
    setParseHTML(parseHTML: boolean): void;
    /**
     * This property includes a password for logon to the MailServer .
     */
    getPassword(): string;
    /**
     * This property includes a password for logon to the MailServer .
     */
    setPassword(password: string): void;
    /**
     * This property includes the priority of the mail message (optional).
     */
    getPriority(): HTMLMailerPriorities;
    /**
     * This property includes the priority of the mail message (optional).
     */
    setPriority(priority: HTMLMailerPriorities): void;
    /**
     * This property includes the email address to send a read-receipt to.
     */
    getReadReceiptTo(): string;
    /**
     * This property includes the email address to send a read-receipt to.
     */
    setReadReceiptTo(readReceiptTo: string): void;
    /**
     * This property includes a mail address to which to reply (optional).
     */
    getReplyTo(): string;
    /**
     * This property includes a mail address to which to reply (optional).
     */
    setReplyTo(replyTo: string): void;
    /**
     * This property includes a comma-separated list of addresses for destinations (required).
     */
    getSendTo(): string;
    /**
     * This property includes a comma-separated list of addresses for destinations (required).
     */
    setSendTo(sendTo: string): void;
    /**
     * This property indicates the sensitivity of the mail message (optional).
     */
    getSensitivity(): HTMLMailerSensitivities;
    /**
     * This property indicates the sensitivity of the mail message (optional).
     */
    setSensitivity(sensitivity: HTMLMailerSensitivities): void;
    /**
     * Instructs the class to unconditionally accept the server certificate that matches the supplied certificate.
     */
    getSSLAcceptServerCert(): Certificate;
    /**
     * Instructs the class to unconditionally accept the server certificate that matches the supplied certificate.
     */
    setSSLAcceptServerCert(SSLAcceptServerCert: Certificate): void;
    /**
     * The certificate to be used during Secure Sockets Layer (SSL) negotiation.
     */
    getSSLCert(): Certificate;
    /**
     * The certificate to be used during Secure Sockets Layer (SSL) negotiation.
     */
    setSSLCert(SSLCert: Certificate): void;
    /**
     * This property indicates whether Transport Layer Security/Secure Sockets Layer (TLS/SSL) is enabled.
     */
    isSSLEnabled(): boolean;
    /**
     * This property indicates whether Transport Layer Security/Secure Sockets Layer (TLS/SSL) is enabled.
     */
    setSSLEnabled(SSLEnabled: boolean): void;
    /**
     * The Secure Sockets Layer/Transport Layer Security (SSL/TLS) implementation to use.
     */
    getSSLProvider(): HTMLMailerSSLProviders;
    /**
     * The Secure Sockets Layer/Transport Layer Security (SSL/TLS) implementation to use.
     */
    setSSLProvider(SSLProvider: HTMLMailerSSLProviders): void;
    /**
     * The server certificate for the last established connection.
     */
    getSSLServerCert(): Certificate;
    /**
     * This property determines how the class starts the Secure Sockets Layer (SSL) negotiation.
     */
    getSSLStartMode(): HTMLMailerSSLStartModes;
    /**
     * This property determines how the class starts the Secure Sockets Layer (SSL) negotiation.
     */
    setSSLStartMode(SSLStartMode: HTMLMailerSSLStartModes): void;
    /**
     * This property includes the subject of the mail message (optional).
     */
    getSubject(): string;
    /**
     * This property includes the subject of the mail message (optional).
     */
    setSubject(subject: string): void;
    /**
     * The timeout for the class.
     */
    getTimeout(): number;
    /**
     * The timeout for the class.
     */
    setTimeout(timeout: number): void;
    /**
     * This property includes the user identifier needed to log in as in the MailServer .
     */
    getUser(): string;
    /**
     * This property includes the user identifier needed to log in as in the MailServer .
     */
    setUser(user: string): void;
}
/************************************************** ENUMERATED TYPES **************************************************/
export declare enum HTTPAuthSchemes {
    authBasic = 0,
    authDigest = 1,
    authProprietary = 2,
    authNone = 3,
    authNtlm = 4,
    authNegotiate = 5,
    authOAuth = 6
}
export declare enum HTTPFollowRedirects {
    frNever = 0,
    frAlways = 1,
    frSameScheme = 2
}
export declare enum HTTPSSLProviders {
    sslpAutomatic = 0,
    sslpPlatform = 1,
    sslpInternal = 2
}
/**
 * The HTTP Component can be used to retrieve documents from the
World Wide Web.
 */
export declare class http extends events.EventEmitter {
    private obj;
    constructor();
    about(): string;














    on(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    on(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    on(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    on(event: "Redirect", listener: (e: {
        readonly location: string;
        accept: boolean;
    }) => void): this;
    on(event: "SetCookie", listener: (e: {
        readonly name: string;
        readonly value: string;
        readonly expires: string;
        readonly domain: string;
        readonly path: string;
        readonly secure: boolean;
    }) => void): this;
    on(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    on(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    on(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    on(event: "Status", listener: (e: {
        readonly HTTPVersion: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    once(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    once(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    once(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    once(event: "Redirect", listener: (e: {
        readonly location: string;
        accept: boolean;
    }) => void): this;
    once(event: "SetCookie", listener: (e: {
        readonly name: string;
        readonly value: string;
        readonly expires: string;
        readonly domain: string;
        readonly path: string;
        readonly secure: boolean;
    }) => void): this;
    once(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    once(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    once(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    once(event: "Status", listener: (e: {
        readonly HTTPVersion: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    addListener(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    addListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    addListener(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    addListener(event: "Redirect", listener: (e: {
        readonly location: string;
        accept: boolean;
    }) => void): this;
    addListener(event: "SetCookie", listener: (e: {
        readonly name: string;
        readonly value: string;
        readonly expires: string;
        readonly domain: string;
        readonly path: string;
        readonly secure: boolean;
    }) => void): this;
    addListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    addListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    addListener(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    addListener(event: "Status", listener: (e: {
        readonly HTTPVersion: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    prependListener(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    prependListener(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    prependListener(event: "Redirect", listener: (e: {
        readonly location: string;
        accept: boolean;
    }) => void): this;
    prependListener(event: "SetCookie", listener: (e: {
        readonly name: string;
        readonly value: string;
        readonly expires: string;
        readonly domain: string;
        readonly path: string;
        readonly secure: boolean;
    }) => void): this;
    prependListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    prependListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    prependListener(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependListener(event: "Status", listener: (e: {
        readonly HTTPVersion: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    prependOnceListener(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependOnceListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    prependOnceListener(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    prependOnceListener(event: "Redirect", listener: (e: {
        readonly location: string;
        accept: boolean;
    }) => void): this;
    prependOnceListener(event: "SetCookie", listener: (e: {
        readonly name: string;
        readonly value: string;
        readonly expires: string;
        readonly domain: string;
        readonly path: string;
        readonly secure: boolean;
    }) => void): this;
    prependOnceListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    prependOnceListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    prependOnceListener(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependOnceListener(event: "Status", listener: (e: {
        readonly HTTPVersion: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    /**
     * Adds a cookie and the corresponding value to the outgoing request headers.
     */
    addCookie(cookieName: string, cookieValue: string): Promise<void>;
    /**
     * This method calculates the Authorization header based on provided credentials.
     */
    calcAuthorization(): Promise<void>;
    /**
     * Sets or retrieves a configuration setting.
     */
    config(configurationString: string): Promise<string>;
    /**
     * This method connects to the remote host without performing any action.
     */
    connect(): Promise<void>;
    /**
     * This method deletes an object on the server.
     */
    delete(URL: string): Promise<void>;
    /**
     * This method disconnects from the server.
     */
    disconnect(): Promise<void>;
    /**
     * This method processes events from the internal message queue.
     */
    doEvents(): Promise<void>;
    /**
     * This retrieves the document using the HTTP GET method.
     */
    get(URL: string): Promise<void>;
    /**
     * This retrieves the document headers using the HTTP HEAD method.
     */
    head(URL: string): Promise<void>;
    /**
     * This method interrupts the current method.
     */
    interrupt(): Promise<void>;
    /**
     * This method partially updates data on the HTTP server using the HTTP PATCH method.
     */
    patch(URL: string): Promise<void>;
    /**
     * This method posts data to the HTTP server using the HTTP POST method.
     */
    post(URL: string): Promise<void>;
    /**
     * This method sends data to the HTTP server using the HTTP PUT method.
     */
    put(URL: string): Promise<void>;
    /**
     * This method will reset the class.
     */
    reset(): Promise<void>;
    /**
     * This method resets all HTTP headers, cookies, LocalFile , and AttachedFile .
     */
    resetHeaders(): Promise<void>;
    /**
     * This property includes a list of acceptable MIME types for the request.
     */
    getAccept(): string;
    /**
     * This property includes a list of acceptable MIME types for the request.
     */
    setAccept(accept: string): void;
    /**
     * This property enables HTTP compression for receiving data.
     */
    isAllowHTTPCompression(): boolean;
    /**
     * This property enables HTTP compression for receiving data.
     */
    setAllowHTTPCompression(allowHTTPCompression: boolean): void;
    /**
     * This property includes a file to append to PostData if the POST or PUT methods are used.
     */
    getAttachedFile(): string;
    /**
     * This property includes a file to append to PostData if the POST or PUT methods are used.
     */
    setAttachedFile(attachedFile: string): void;
    /**
     * This property includes the Authorization string to be sent to the server.
     */
    getAuthorization(): string;
    /**
     * This property includes the Authorization string to be sent to the server.
     */
    setAuthorization(authorization: string): void;
    /**
     * This property specifies the authentication scheme to use when server authentication is required.
     */
    getAuthScheme(): HTTPAuthSchemes;
    /**
     * This property specifies the authentication scheme to use when server authentication is required.
     */
    setAuthScheme(authScheme: HTTPAuthSchemes): void;
    /**
     * Whether the class is connected.
     */
    isConnected(): boolean;
    /**
     * This property includes the content type for posts and puts.
     */
    getContentType(): string;
    /**
     * This property includes the content type for posts and puts.
     */
    setContentType(contentType: string): void;
    getCookies(): HTTPCookieList;
    /**
     * A set of properties related to firewall access.
     */
    getFirewall(): Firewall;
    /**
     * A set of properties related to firewall access.
     */
    setFirewall(firewall: Firewall): void;
    /**
     * Determines what happens when the server issues a redirect.
     */
    getFollowRedirects(): HTTPFollowRedirects;
    /**
     * Determines what happens when the server issues a redirect.
     */
    setFollowRedirects(followRedirects: HTTPFollowRedirects): void;
    /**
     * This property includes the email address of the HTTP agent (optional).
     */
    getFrom(): string;
    /**
     * This property includes the email address of the HTTP agent (optional).
     */
    setFrom(from: string): void;
    /**
     * This property includes the HTTP method used for the request.
     */
    getHTTPMethod(): string;
    /**
     * This property includes the HTTP method used for the request.
     */
    setHTTPMethod(HTTPMethod: string): void;
    /**
     * This property includes the HTTP Version used by the class.
     */
    getHTTPVersion(): string;
    /**
     * This property includes the HTTP Version used by the class.
     */
    setHTTPVersion(HTTPVersion: string): void;
    /**
     * The current status of the class.
     */
    isIdle(): boolean;
    /**
     * This property includes a date determining the maximum age of the desired document.
     */
    getIfModifiedSince(): string;
    /**
     * This property includes a date determining the maximum age of the desired document.
     */
    setIfModifiedSince(ifModifiedSince: string): void;
    /**
     * This property includes the path to a local file for downloading. If the file exists, it is overwritten.
     */
    getLocalFile(): string;
    /**
     * This property includes the path to a local file for downloading. If the file exists, it is overwritten.
     */
    setLocalFile(localFile: string): void;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    getLocalHost(): string;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    setLocalHost(localHost: string): void;
    /**
     * Other headers as determined by the user (optional).
     */
    getOtherHeaders(): string;
    /**
     * Other headers as determined by the user (optional).
     */
    setOtherHeaders(otherHeaders: string): void;
    getParsedHeaders(): HeaderList;
    /**
     * This property includes a password if authentication is to be used.
     */
    getPassword(): string;
    /**
     * This property includes a password if authentication is to be used.
     */
    setPassword(password: string): void;
    /**
     * This property includes the data to post with the URL if the POST method is used.
     */
    getPostData(): string;
    /**
     * This property includes the data to post with the URL if the POST method is used.
     */
    getPostDataB(): Uint8Array;
    /**
     * This property includes the data to post with the URL if the POST method is used.
     */
    setPostData(data: Uint8Array | string): void;
    setPostData(data: Uint8Array, offset: number, length: number): void;
    /**
     * This property includes a browser- or server-specific header line (optional).
     */
    getPragma(): string;
    /**
     * This property includes a browser- or server-specific header line (optional).
     */
    setPragma(pragma: string): void;
    /**
     * A set of properties related to proxy access.
     */
    getProxy(): Proxy;
    /**
     * A set of properties related to proxy access.
     */
    setProxy(proxy: Proxy): void;
    /**
     * This property includes the byte-range to be sent to the server.
     */
    getRange(): string;
    /**
     * This property includes the byte-range to be sent to the server.
     */
    setRange(range: string): void;
    /**
     * This property includes the referer URL/document (optional).
     */
    getReferer(): string;
    /**
     * This property includes the referer URL/document (optional).
     */
    setReferer(referer: string): void;
    /**
     * Instructs the class to unconditionally accept the server certificate that matches the supplied certificate.
     */
    getSSLAcceptServerCert(): Certificate;
    /**
     * Instructs the class to unconditionally accept the server certificate that matches the supplied certificate.
     */
    setSSLAcceptServerCert(SSLAcceptServerCert: Certificate): void;
    /**
     * The certificate to be used during Secure Sockets Layer (SSL) negotiation.
     */
    getSSLCert(): Certificate;
    /**
     * The certificate to be used during Secure Sockets Layer (SSL) negotiation.
     */
    setSSLCert(SSLCert: Certificate): void;
    /**
     * The Secure Sockets Layer/Transport Layer Security (SSL/TLS) implementation to use.
     */
    getSSLProvider(): HTTPSSLProviders;
    /**
     * The Secure Sockets Layer/Transport Layer Security (SSL/TLS) implementation to use.
     */
    setSSLProvider(SSLProvider: HTTPSSLProviders): void;
    /**
     * The server certificate for the last established connection.
     */
    getSSLServerCert(): Certificate;
    /**
     * This property is the first line of the last server response.
     */
    getStatusLine(): string;
    /**
     * The timeout for the class.
     */
    getTimeout(): number;
    /**
     * The timeout for the class.
     */
    setTimeout(timeout: number): void;
    /**
     * This property includes the contents of the last response from the server.
     */
    getTransferredData(): string;
    /**
     * This property includes the contents of the last response from the server.
     */
    getTransferredDataB(): Uint8Array;
    /**
     * This property specifies the maximum amount of data to be transferred.
     */
    getTransferredDataLimit(): number;
    /**
     * This property specifies the maximum amount of data to be transferred.
     */
    setTransferredDataLimit(transferredDataLimit: number): void;
    /**
     * The full set of headers as received from the server.
     */
    getTransferredHeaders(): string;
    /**
     * This property specifies the URL to retrieve.
     */
    getURL(): string;
    /**
     * This property specifies the URL to retrieve.
     */
    setURL(URL: string): void;
    /**
     * This property specifies the path for the URL.
     */
    getURLPath(): string;
    /**
     * This property specifies the path for the URL.
     */
    setURLPath(URLPath: string): void;
    /**
     * This property specifies the port for the URL.
     */
    getURLPort(): number;
    /**
     * This property specifies the port for the URL.
     */
    setURLPort(URLPort: number): void;
    /**
     * This property includes the scheme for the URL.
     */
    getURLScheme(): string;
    /**
     * This property includes the scheme for the URL.
     */
    setURLScheme(URLScheme: string): void;
    /**
     * This property specifies the server for the URL.
     */
    getURLServer(): string;
    /**
     * This property specifies the server for the URL.
     */
    setURLServer(URLServer: string): void;
    /**
     * This property includes a user name if authentication is to be used.
     */
    getUser(): string;
    /**
     * This property includes a user name if authentication is to be used.
     */
    setUser(user: string): void;
}
/************************************************** ENUMERATED TYPES **************************************************/
export declare enum IMAPAuthMechanisms {
    amUserPassword = 0,
    amCRAMMD5 = 1,
    amNTLM = 2,
    amAPOP = 3,
    amSASLPlain = 4,
    amSASLDigestMD5 = 5,
    amKerberos = 6,
    amXOAUTH2 = 7
}
export declare enum IMAPSSLProviders {
    sslpAutomatic = 0,
    sslpPlatform = 1,
    sslpInternal = 2
}
export declare enum IMAPSSLStartModes {
    sslAutomatic = 0,
    sslImplicit = 1,
    sslExplicit = 2,
    sslNone = 3
}
/**
 * The IMAP Component is used to communicate with IMAP servers
using the Internet Message Access Protocol (IMAP).
 */
export declare class imap extends events.EventEmitter {
    private obj;
    constructor();
    about(): string;














    on(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    on(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    on(event: "IdleInfo", listener: (e: {
        readonly message: string;
        cancel: boolean;
    }) => void): this;
    on(event: "MailboxACL", listener: (e: {
        readonly mailbox: string;
        readonly user: string;
        readonly rights: string;
    }) => void): this;
    on(event: "MailboxList", listener: (e: {
        readonly mailbox: string;
        readonly separator: string;
        readonly flags: string;
    }) => void): this;
    on(event: "MessageInfo", listener: (e: {
        readonly messageId: string;
        readonly subject: string;
        readonly messageDate: string;
        readonly from: string;
        readonly flags: string;
        readonly size: number;
    }) => void): this;
    on(event: "MessagePart", listener: (e: {
        readonly partId: string;
        readonly size: number;
        readonly contentType: string;
        readonly fileName: string;
        readonly contentEncoding: string;
        readonly parameters: string;
        readonly multipartMode: string;
        readonly contentId: string;
        readonly contentDisposition: string;
    }) => void): this;
    on(event: "PITrail", listener: (e: {
        readonly direction: number;
        readonly message: string;
    }) => void): this;
    on(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    on(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    on(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    on(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
    }) => void): this;
    once(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    once(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    once(event: "IdleInfo", listener: (e: {
        readonly message: string;
        cancel: boolean;
    }) => void): this;
    once(event: "MailboxACL", listener: (e: {
        readonly mailbox: string;
        readonly user: string;
        readonly rights: string;
    }) => void): this;
    once(event: "MailboxList", listener: (e: {
        readonly mailbox: string;
        readonly separator: string;
        readonly flags: string;
    }) => void): this;
    once(event: "MessageInfo", listener: (e: {
        readonly messageId: string;
        readonly subject: string;
        readonly messageDate: string;
        readonly from: string;
        readonly flags: string;
        readonly size: number;
    }) => void): this;
    once(event: "MessagePart", listener: (e: {
        readonly partId: string;
        readonly size: number;
        readonly contentType: string;
        readonly fileName: string;
        readonly contentEncoding: string;
        readonly parameters: string;
        readonly multipartMode: string;
        readonly contentId: string;
        readonly contentDisposition: string;
    }) => void): this;
    once(event: "PITrail", listener: (e: {
        readonly direction: number;
        readonly message: string;
    }) => void): this;
    once(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    once(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    once(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    once(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
    }) => void): this;
    addListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    addListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    addListener(event: "IdleInfo", listener: (e: {
        readonly message: string;
        cancel: boolean;
    }) => void): this;
    addListener(event: "MailboxACL", listener: (e: {
        readonly mailbox: string;
        readonly user: string;
        readonly rights: string;
    }) => void): this;
    addListener(event: "MailboxList", listener: (e: {
        readonly mailbox: string;
        readonly separator: string;
        readonly flags: string;
    }) => void): this;
    addListener(event: "MessageInfo", listener: (e: {
        readonly messageId: string;
        readonly subject: string;
        readonly messageDate: string;
        readonly from: string;
        readonly flags: string;
        readonly size: number;
    }) => void): this;
    addListener(event: "MessagePart", listener: (e: {
        readonly partId: string;
        readonly size: number;
        readonly contentType: string;
        readonly fileName: string;
        readonly contentEncoding: string;
        readonly parameters: string;
        readonly multipartMode: string;
        readonly contentId: string;
        readonly contentDisposition: string;
    }) => void): this;
    addListener(event: "PITrail", listener: (e: {
        readonly direction: number;
        readonly message: string;
    }) => void): this;
    addListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    addListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    addListener(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    addListener(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
    }) => void): this;
    prependListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    prependListener(event: "IdleInfo", listener: (e: {
        readonly message: string;
        cancel: boolean;
    }) => void): this;
    prependListener(event: "MailboxACL", listener: (e: {
        readonly mailbox: string;
        readonly user: string;
        readonly rights: string;
    }) => void): this;
    prependListener(event: "MailboxList", listener: (e: {
        readonly mailbox: string;
        readonly separator: string;
        readonly flags: string;
    }) => void): this;
    prependListener(event: "MessageInfo", listener: (e: {
        readonly messageId: string;
        readonly subject: string;
        readonly messageDate: string;
        readonly from: string;
        readonly flags: string;
        readonly size: number;
    }) => void): this;
    prependListener(event: "MessagePart", listener: (e: {
        readonly partId: string;
        readonly size: number;
        readonly contentType: string;
        readonly fileName: string;
        readonly contentEncoding: string;
        readonly parameters: string;
        readonly multipartMode: string;
        readonly contentId: string;
        readonly contentDisposition: string;
    }) => void): this;
    prependListener(event: "PITrail", listener: (e: {
        readonly direction: number;
        readonly message: string;
    }) => void): this;
    prependListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    prependListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    prependListener(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependListener(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
    }) => void): this;
    prependOnceListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependOnceListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    prependOnceListener(event: "IdleInfo", listener: (e: {
        readonly message: string;
        cancel: boolean;
    }) => void): this;
    prependOnceListener(event: "MailboxACL", listener: (e: {
        readonly mailbox: string;
        readonly user: string;
        readonly rights: string;
    }) => void): this;
    prependOnceListener(event: "MailboxList", listener: (e: {
        readonly mailbox: string;
        readonly separator: string;
        readonly flags: string;
    }) => void): this;
    prependOnceListener(event: "MessageInfo", listener: (e: {
        readonly messageId: string;
        readonly subject: string;
        readonly messageDate: string;
        readonly from: string;
        readonly flags: string;
        readonly size: number;
    }) => void): this;
    prependOnceListener(event: "MessagePart", listener: (e: {
        readonly partId: string;
        readonly size: number;
        readonly contentType: string;
        readonly fileName: string;
        readonly contentEncoding: string;
        readonly parameters: string;
        readonly multipartMode: string;
        readonly contentId: string;
        readonly contentDisposition: string;
    }) => void): this;
    prependOnceListener(event: "PITrail", listener: (e: {
        readonly direction: number;
        readonly message: string;
    }) => void): this;
    prependOnceListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    prependOnceListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    prependOnceListener(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependOnceListener(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
    }) => void): this;
    /**
     * This method adds the specified flags to the messages specified by MessageSet .
     */
    addMessageFlags(flags: string): Promise<void>;
    /**
     * This method appends the message in MessageText to the mailbox specified by Mailbox .
     */
    appendToMailbox(): Promise<void>;
    /**
     * This method sends a CHECK command to the server.
     */
    checkMailbox(): Promise<void>;
    /**
     * This method removes all messages marked with a 'Deleted' flag from the currently selected mailbox and closes the unselected mailbox.
     */
    closeMailbox(): Promise<void>;
    /**
     * Sets or retrieves a configuration setting.
     */
    config(configurationString: string): Promise<string>;
    /**
     * This method connects to an IMAP server.
     */
    connect(): Promise<void>;
    /**
     * Copies the specified messages to another mailbox.
     */
    copyToMailbox(): Promise<void>;
    /**
     * This method creates a new mailbox specified by Mailbox .
     */
    createMailbox(): Promise<void>;
    /**
     * The method marks the messages specified by MessageSet as deleted.
     */
    deleteFromMailbox(): Promise<void>;
    /**
     * This method deletes a mailbox specified by Mailbox .
     */
    deleteMailbox(): Promise<void>;
    /**
     * This method deletes mailbox access control rights for a specific user.
     */
    deleteMailboxACL(user: string): Promise<void>;
    /**
     * This method disconnects from an IMAP server.
     */
    disconnect(): Promise<void>;
    /**
     * This method processes events from the internal message queue.
     */
    doEvents(): Promise<void>;
    /**
     * This method selects a mailbox in read-only mode.
     */
    examineMailbox(): Promise<void>;
    /**
     * This method removes all messages marked with a 'Deleted' flag from the currently selected mailbox.
     */
    expungeMailbox(): Promise<void>;
    /**
     * This method retrieves mailbox access control rights.
     */
    getMailboxACL(): Promise<void>;
    /**
     * This method interrupts the current method.
     */
    interrupt(): Promise<void>;
    /**
     * This method lists all of the mailboxes matching all criteria in the Mailbox property.
     */
    listMailboxes(): Promise<void>;
    /**
     * This method lists all subscribed mailboxes matching all criteria in the Mailbox property.
     */
    listSubscribedMailboxes(): Promise<void>;
    /**
     * This method converts a valid RFC 822 message date to a local date and time.
     */
    localizeDate(dateTime: string): Promise<string>;
    /**
     * Copies the specified messages to another mailbox and marks the original messages as deleted.
     */
    moveToMailbox(): Promise<void>;
    /**
     * This method sends a NOOP command to the server.
     */
    noop(): Promise<void>;
    /**
     * This method changes the name of Mailbox to NewName .
     */
    renameMailbox(newName: string): Promise<void>;
    /**
     * This method will reset the class.
     */
    reset(): Promise<void>;
    /**
     * This method replaces the flags of the messages specified by MessageSet with the flags specified by MessageFlags .
     */
    resetMessageFlags(): Promise<void>;
    /**
     * This method retrieves the message headers of the messages specified by the MessageSet property.
     */
    retrieveMessageHeaders(): Promise<void>;
    /**
     * This method retrieves information about messages specified by the MessageSet property.
     */
    retrieveMessageInfo(): Promise<void>;
    /**
     * This method retrieves the message part specified by PartID.
     */
    retrieveMessagePart(partId: string): Promise<void>;
    /**
     * This method retrieves the headers of message part specified by PartID.
     */
    retrieveMessagePartHeaders(partId: string): Promise<void>;
    /**
     * This method retrieves the message text of the messages specified by the MessageSet property.
     */
    retrieveMessageText(): Promise<void>;
    /**
     * This method searches the selected mailbox for specified text.
     */
    searchMailbox(searchCriteria: string): Promise<void>;
    /**
     * This method selects a mailbox.
     */
    selectMailbox(): Promise<void>;
    /**
     * This method sends the exact command directly to the server.
     */
    sendCommand(command: string): Promise<void>;
    /**
     * This method sets mailbox access control rights for a specific user.
     */
    setMailboxACL(user: string, rights: string): Promise<void>;
    /**
     * This method begins idling.
     */
    startIdle(): Promise<void>;
    /**
     * This method stops idling.
     */
    stopIdle(): Promise<void>;
    /**
     * This method subscribes to the mailbox specified by Mailbox .
     */
    subscribeMailbox(): Promise<void>;
    /**
     * This method removes the flags specified by MessageFlags from the messages specified by MessageSet .
     */
    unsetMessageFlags(): Promise<void>;
    /**
     * This method unsubscribes from the mailbox specified by Mailbox .
     */
    unsubscribeMailbox(): Promise<void>;
    /**
     * This property includes the authentication mechanism to be used when connecting to the mail server.
     */
    getAuthMechanism(): IMAPAuthMechanisms;
    /**
     * This property includes the authentication mechanism to be used when connecting to the mail server.
     */
    setAuthMechanism(authMechanism: IMAPAuthMechanisms): void;
    /**
     * This property determines whether or not to automatically decode message parts.
     */
    isAutoDecodeParts(): boolean;
    /**
     * This property determines whether or not to automatically decode message parts.
     */
    setAutoDecodeParts(autoDecodeParts: boolean): void;
    /**
     * Whether the class is connected.
     */
    isConnected(): boolean;
    /**
     * This property includes the byte index of the position where the transfer should end.
     */
    getEndByte(): number;
    /**
     * This property includes the byte index of the position where the transfer should end.
     */
    setEndByte(endByte: number): void;
    /**
     * A set of properties related to firewall access.
     */
    getFirewall(): Firewall;
    /**
     * A set of properties related to firewall access.
     */
    setFirewall(firewall: Firewall): void;
    /**
     * The current status of the class.
     */
    isIdle(): boolean;
    /**
     * This property indicates the last reply received from the server.
     */
    getLastReply(): string;
    /**
     * This property includes the path to a local file for downloading the message body.
     */
    getLocalFile(): string;
    /**
     * This property includes the path to a local file for downloading the message body.
     */
    setLocalFile(localFile: string): void;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    getLocalHost(): string;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    setLocalHost(localHost: string): void;
    /**
     * This property includes the name of the mailbox selected on the server.
     */
    getMailbox(): string;
    /**
     * This property includes the name of the mailbox selected on the server.
     */
    setMailbox(mailbox: string): void;
    /**
     * This property defines flags in the selected mailbox.
     */
    getMailboxFlags(): string;
    getMailboxList(): MailboxList;
    /**
     * This property includes the port of the IMAP server (default is 143).
     */
    getMailPort(): number;
    /**
     * This property includes the port of the IMAP server (default is 143).
     */
    setMailPort(mailPort: number): void;
    /**
     * This property includes the name or address of the mail server (IMAP server).
     */
    getMailServer(): string;
    /**
     * This property includes the name or address of the mail server (IMAP server).
     */
    setMailServer(mailServer: string): void;
    /**
     * This property provides the raw message content.
     */
    getMessage(): string;
    /**
     * This property provides the raw message content.
     */
    getMessageB(): Uint8Array;
    /**
     * This property provides the raw message content.
     */
    setMessage(data: Uint8Array | string): void;
    setMessage(data: Uint8Array, offset: number, length: number): void;
    /**
     * This property includes the ContentEncoding of the selected message.
     */
    getMessageContentEncoding(): string;
    /**
     * This property includes the ContentType of the message.
     */
    getMessageContentType(): string;
    /**
     * This property includes the total number of messages on the Mailbox .
     */
    getMessageCount(): number;
    /**
     * The property includes the time the message was created.
     */
    getMessageDate(): string;
    /**
     * This property includes the time the message was delivered to the mail server.
     */
    getMessageDeliveryTime(): string;
    /**
     * This property contains the flags of the current message.
     */
    getMessageFlags(): string;
    /**
     * This property contains the flags of the current message.
     */
    setMessageFlags(messageFlags: string): void;
    /**
     * This property includes the address of the author of the message.
     */
    getMessageFrom(): string;
    getMessageHeaders(): HeaderList;
    /**
     * This property includes the string version of the RFC 822-encoded headers in the message.
     */
    getMessageHeadersString(): string;
    /**
     * This property includes the string version of the RFC 822-encoded headers in the message.
     */
    setMessageHeadersString(messageHeadersString: string): void;
    /**
     * This property includes the message identifier of the current message.
     */
    getMessageId(): string;
    getMessageInfo(): MessageInfoList;
    /**
     * This property includes the unique message identifier of the message being replied to.
     */
    getMessageInReplyTo(): string;
    /**
     * This property includes the globally unique identifier of the message.
     */
    getMessageNetId(): string;
    getMessageParts(): MessagePartList;
    getMessageRecipients(): MessageRecipientList;
    /**
     * This property includes the email addresses to which replies to the message should be sent.
     */
    getMessageReplyTo(): string;
    /**
     * This property includes the address of the sender of the message.
     */
    getMessageSender(): string;
    /**
     * This property includes the set of messages to operate on.
     */
    getMessageSet(): string;
    /**
     * This property includes the set of messages to operate on.
     */
    setMessageSet(messageSet: string): void;
    /**
     * This property includes the size of the selected message.
     */
    getMessageSize(): number;
    /**
     * This property includes the subject of the message.
     */
    getMessageSubject(): string;
    /**
     * This property includes the body of the retrieved message.
     */
    getMessageText(): string;
    /**
     * This property includes the body of the retrieved message.
     */
    setMessageText(messageText: string): void;
    /**
     * This property indicates whether or not the class should overwrite files during transfer.
     */
    isOverwrite(): boolean;
    /**
     * This property indicates whether or not the class should overwrite files during transfer.
     */
    setOverwrite(overwrite: boolean): void;
    /**
     * This property includes the password to be used to authenticate to the MailServer .
     */
    getPassword(): string;
    /**
     * This property includes the password to be used to authenticate to the MailServer .
     */
    setPassword(password: string): void;
    /**
     * When set to True, the message Seen flag is not changed during reading.
     */
    isPeekMode(): boolean;
    /**
     * When set to True, the message Seen flag is not changed during reading.
     */
    setPeekMode(peekMode: boolean): void;
    /**
     * This property includes the number of new messages in the Mailbox .
     */
    getRecentMessageCount(): number;
    /**
     * This property sorts criteria to use for message retrieval operations.
     */
    getSortCriteria(): string;
    /**
     * This property sorts criteria to use for message retrieval operations.
     */
    setSortCriteria(sortCriteria: string): void;
    /**
     * Instructs the class to unconditionally accept the server certificate that matches the supplied certificate.
     */
    getSSLAcceptServerCert(): Certificate;
    /**
     * Instructs the class to unconditionally accept the server certificate that matches the supplied certificate.
     */
    setSSLAcceptServerCert(SSLAcceptServerCert: Certificate): void;
    /**
     * The certificate to be used during Secure Sockets Layer (SSL) negotiation.
     */
    getSSLCert(): Certificate;
    /**
     * The certificate to be used during Secure Sockets Layer (SSL) negotiation.
     */
    setSSLCert(SSLCert: Certificate): void;
    /**
     * This property indicates whether Transport Layer Security/Secure Sockets Layer (TLS/SSL) is enabled.
     */
    isSSLEnabled(): boolean;
    /**
     * This property indicates whether Transport Layer Security/Secure Sockets Layer (TLS/SSL) is enabled.
     */
    setSSLEnabled(SSLEnabled: boolean): void;
    /**
     * The Secure Sockets Layer/Transport Layer Security (SSL/TLS) implementation to use.
     */
    getSSLProvider(): IMAPSSLProviders;
    /**
     * The Secure Sockets Layer/Transport Layer Security (SSL/TLS) implementation to use.
     */
    setSSLProvider(SSLProvider: IMAPSSLProviders): void;
    /**
     * The server certificate for the last established connection.
     */
    getSSLServerCert(): Certificate;
    /**
     * This property determines how the class starts the Secure Sockets Layer (SSL) negotiation.
     */
    getSSLStartMode(): IMAPSSLStartModes;
    /**
     * This property determines how the class starts the Secure Sockets Layer (SSL) negotiation.
     */
    setSSLStartMode(SSLStartMode: IMAPSSLStartModes): void;
    /**
     * This property includes the byte index of the position where the transfer should start.
     */
    getStartByte(): number;
    /**
     * This property includes the byte index of the position where the transfer should start.
     */
    setStartByte(startByte: number): void;
    /**
     * The timeout for the class.
     */
    getTimeout(): number;
    /**
     * The timeout for the class.
     */
    setTimeout(timeout: number): void;
    /**
     * If True, this property indicates whether permanent message identifiers are used instead of the default temporary identifiers.
     */
    isUIDMode(): boolean;
    /**
     * If True, this property indicates whether permanent message identifiers are used instead of the default temporary identifiers.
     */
    setUIDMode(UIDMode: boolean): void;
    /**
     * This property includes the UIDValidity parameter sent from the server in response to SelectMailbox command.
     */
    getUIDValidity(): string;
    /**
     * This property includes the username used to authenticate to the MailServer .
     */
    getUser(): string;
    /**
     * This property includes the username used to authenticate to the MailServer .
     */
    setUser(user: string): void;
}
/************************************************** ENUMERATED TYPES **************************************************/
export declare enum JSONXElementTypes {
    etObject = 0,
    etArray = 1,
    etString = 2,
    etNumber = 3,
    etBool = 4,
    etNull = 5
}
/**
 * The JSON component can be used to parse and write JSON documents.
 */
export declare class json extends events.EventEmitter {
    private obj;
    constructor();
    about(): string;








    on(event: "Characters", listener: (e: {
        readonly text: string;
    }) => void): this;
    on(event: "EndDocument", listener: (e: {}) => void): this;
    on(event: "EndElement", listener: (e: {
        readonly element: string;
    }) => void): this;
    on(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "IgnorableWhitespace", listener: (e: {
        readonly text: string;
    }) => void): this;
    on(event: "JSON", listener: (e: {
        readonly text: string;
    }) => void): this;
    on(event: "StartDocument", listener: (e: {}) => void): this;
    on(event: "StartElement", listener: (e: {
        readonly element: string;
    }) => void): this;
    once(event: "Characters", listener: (e: {
        readonly text: string;
    }) => void): this;
    once(event: "EndDocument", listener: (e: {}) => void): this;
    once(event: "EndElement", listener: (e: {
        readonly element: string;
    }) => void): this;
    once(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "IgnorableWhitespace", listener: (e: {
        readonly text: string;
    }) => void): this;
    once(event: "JSON", listener: (e: {
        readonly text: string;
    }) => void): this;
    once(event: "StartDocument", listener: (e: {}) => void): this;
    once(event: "StartElement", listener: (e: {
        readonly element: string;
    }) => void): this;
    addListener(event: "Characters", listener: (e: {
        readonly text: string;
    }) => void): this;
    addListener(event: "EndDocument", listener: (e: {}) => void): this;
    addListener(event: "EndElement", listener: (e: {
        readonly element: string;
    }) => void): this;
    addListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "IgnorableWhitespace", listener: (e: {
        readonly text: string;
    }) => void): this;
    addListener(event: "JSON", listener: (e: {
        readonly text: string;
    }) => void): this;
    addListener(event: "StartDocument", listener: (e: {}) => void): this;
    addListener(event: "StartElement", listener: (e: {
        readonly element: string;
    }) => void): this;
    prependListener(event: "Characters", listener: (e: {
        readonly text: string;
    }) => void): this;
    prependListener(event: "EndDocument", listener: (e: {}) => void): this;
    prependListener(event: "EndElement", listener: (e: {
        readonly element: string;
    }) => void): this;
    prependListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "IgnorableWhitespace", listener: (e: {
        readonly text: string;
    }) => void): this;
    prependListener(event: "JSON", listener: (e: {
        readonly text: string;
    }) => void): this;
    prependListener(event: "StartDocument", listener: (e: {}) => void): this;
    prependListener(event: "StartElement", listener: (e: {
        readonly element: string;
    }) => void): this;
    prependOnceListener(event: "Characters", listener: (e: {
        readonly text: string;
    }) => void): this;
    prependOnceListener(event: "EndDocument", listener: (e: {}) => void): this;
    prependOnceListener(event: "EndElement", listener: (e: {
        readonly element: string;
    }) => void): this;
    prependOnceListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "IgnorableWhitespace", listener: (e: {
        readonly text: string;
    }) => void): this;
    prependOnceListener(event: "JSON", listener: (e: {
        readonly text: string;
    }) => void): this;
    prependOnceListener(event: "StartDocument", listener: (e: {}) => void): this;
    prependOnceListener(event: "StartElement", listener: (e: {
        readonly element: string;
    }) => void): this;
    /**
     * Sets or retrieves a configuration setting.
     */
    config(configurationString: string): Promise<string>;
    /**
     * This method writes the closing bracket of a JSON array.
     */
    endArray(): Promise<void>;
    /**
     * This method writes the closing brace of a JSON object.
     */
    endObject(): Promise<void>;
    /**
     * This method flushes the parser's or writer's buffers.
     */
    flush(): Promise<void>;
    /**
     * This method determines whether a specific element exists in the document.
     */
    hasXPath(XPath: string): Promise<boolean>;
    /**
     * This method inserts the specified name and value at the selected position.
     */
    insertProperty(name: string, value: string, valueType: number, position: number): Promise<void>;
    /**
     * This method inserts the specified value at the selected position.
     */
    insertValue(value: string, valueType: number, position: number): Promise<void>;
    /**
     * This method parses the specified JSON data.
     */
    parse(): Promise<void>;
    /**
     * This method writes the name of a property.
     */
    putName(name: string): Promise<void>;
    /**
     * This method writes a property and value.
     */
    putProperty(name: string, value: string, valueType: number): Promise<void>;
    /**
     * This method writes a raw JSON fragment.
     */
    putRaw(text: string): Promise<void>;
    /**
     * This method writes a value of a property.
     */
    putValue(value: string, valueType: number): Promise<void>;
    /**
     * This method removes the element or value set in XPath.
     */
    remove(): Promise<void>;
    /**
     * This method resets the class.
     */
    reset(): Promise<void>;
    /**
     * This method saves the modified JSON document.
     */
    save(): Promise<void>;
    /**
     * This method sets a new name for the element specified by XPath.
     */
    setName(name: string): Promise<void>;
    /**
     * This method sets a new value for the element specified by XPath.
     */
    setValue(value: string, valueType: number): Promise<void>;
    /**
     * This method writes the opening bracket of a JSON array.
     */
    startArray(): Promise<void>;
    /**
     * This event writes the opening brace of a JSON object.
     */
    startObject(): Promise<void>;
    /**
     * This method navigates to the specified XPath if it exists.
     */
    tryXPath(xpath: string): Promise<boolean>;
    /**
     * When True, an internal object model of the JSON document is created.
     */
    isBuildDOM(): boolean;
    /**
     * When True, an internal object model of the JSON document is created.
     */
    setBuildDOM(buildDOM: boolean): void;
    /**
     * This property includes the JSON data to parse.
     */
    getInputData(): string;
    /**
     * This property includes the JSON data to parse.
     */
    setInputData(inputData: string): void;
    /**
     * This property specifies the file to process.
     */
    getInputFile(): string;
    /**
     * This property specifies the file to process.
     */
    setInputFile(inputFile: string): void;
    /**
     * This property includes the output JSON after processing.
     */
    getOutputData(): string;
    /**
     * This property includes the output JSON after processing.
     */
    setOutputData(outputData: string): void;
    /**
     * This is the path to a local file where the output will be written.
     */
    getOutputFile(): string;
    /**
     * This is the path to a local file where the output will be written.
     */
    setOutputFile(outputFile: string): void;
    /**
     * This property indicates whether or not the class should overwrite files.
     */
    isOverwrite(): boolean;
    /**
     * This property indicates whether or not the class should overwrite files.
     */
    setOverwrite(overwrite: boolean): void;
    /**
     * This property controls whether documents are validated during parsing.
     */
    isValidate(): boolean;
    /**
     * This property controls whether documents are validated during parsing.
     */
    setValidate(validate: boolean): void;
    getXChildren(): JSONElementList;
    /**
     * This property includes the name of the current element.
     */
    getXElement(): string;
    /**
     * This property includes the name of the current element.
     */
    setXElement(XElement: string): void;
    /**
     * This property indicates the data type of the current element.
     */
    getXElementType(): JSONXElementTypes;
    /**
     * This property includes an XPath to check the server response for errors.
     */
    getXErrorPath(): string;
    /**
     * This property includes an XPath to check the server response for errors.
     */
    setXErrorPath(XErrorPath: string): void;
    /**
     * The parent of the current element.
     */
    getXParent(): string;
    /**
     * This property provides a way to point to a specific element in the response.
     */
    getXPath(): string;
    /**
     * This property provides a way to point to a specific element in the response.
     */
    setXPath(XPath: string): void;
    /**
     * This property includes a snapshot of the current element in the document.
     */
    getXSubTree(): string;
    /**
     * This property includes the text of the current element.
     */
    getXText(): string;
    /**
     * This property includes the text of the current element.
     */
    setXText(XText: string): void;
}
/************************************************** ENUMERATED TYPES **************************************************/
export declare enum LDAPAuthMechanisms {
    lamSimple = 0,
    lamDigestMD5 = 1,
    lamNegotiate = 2,
    lamKerberos = 6,
    lamSASLExternal = 7
}
export declare enum LDAPSearchDerefAliases {
    sdaNever = 0,
    sdaInSearching = 1,
    sdaFindingBaseObject = 2,
    sdaAlways = 3
}
export declare enum LDAPSearchScopes {
    ssBaseObject = 0,
    ssSingleLevel = 1,
    ssWholeSubtree = 2
}
export declare enum LDAPSSLProviders {
    sslpAutomatic = 0,
    sslpPlatform = 1,
    sslpInternal = 2
}
export declare enum LDAPSSLStartModes {
    sslAutomatic = 0,
    sslImplicit = 1,
    sslExplicit = 2,
    sslNone = 3
}
/**
 * The Lightweight Directory Access Protocol (LDAP) Component is used to search, manage, and
maintain internet directory servers.
 */
export declare class ldap extends events.EventEmitter {
    private obj;
    constructor();
    about(): string;
















    on(event: "ComputerList", listener: (e: {
        readonly name: string;
        readonly operatingSystem: string;
        readonly lastLogon: string;
        readonly logonCount: number;
        readonly dn: string;
    }) => void): this;
    on(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "ExtendedResponse", listener: (e: {
        readonly messageId: number;
        readonly DN: string;
        readonly resultCode: number;
        readonly resultDescription: string;
        readonly responseName: string;
        readonly responseValue: string;
        readonly responseValueB: Uint8Array;
    }) => void): this;
    on(event: "GroupList", listener: (e: {
        readonly name: string;
        readonly description: string;
        readonly dn: string;
    }) => void): this;
    on(event: "PITrail", listener: (e: {
        readonly direction: number;
        readonly description: string;
        readonly message: string;
    }) => void): this;
    on(event: "Result", listener: (e: {
        readonly messageId: number;
        readonly DN: string;
        readonly resultCode: number;
        readonly resultDescription: string;
    }) => void): this;
    on(event: "SearchComplete", listener: (e: {
        readonly messageId: number;
        readonly DN: string;
        readonly resultCode: number;
        readonly resultDescription: string;
    }) => void): this;
    on(event: "SearchPage", listener: (e: {
        readonly messageId: number;
        readonly DN: string;
        readonly resultCode: number;
        readonly resultDescription: string;
        cancelSearch: boolean;
    }) => void): this;
    on(event: "SearchResult", listener: (e: {
        readonly messageId: number;
        readonly DN: string;
    }) => void): this;
    on(event: "SearchResultReference", listener: (e: {
        readonly messageId: number;
        readonly ldapUrl: string;
    }) => void): this;
    on(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    on(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    on(event: "UserList", listener: (e: {
        readonly name: string;
        readonly description: string;
        readonly lastLogon: string;
        readonly memberOf: string;
        readonly dn: string;
    }) => void): this;
    once(event: "ComputerList", listener: (e: {
        readonly name: string;
        readonly operatingSystem: string;
        readonly lastLogon: string;
        readonly logonCount: number;
        readonly dn: string;
    }) => void): this;
    once(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "ExtendedResponse", listener: (e: {
        readonly messageId: number;
        readonly DN: string;
        readonly resultCode: number;
        readonly resultDescription: string;
        readonly responseName: string;
        readonly responseValue: string;
        readonly responseValueB: Uint8Array;
    }) => void): this;
    once(event: "GroupList", listener: (e: {
        readonly name: string;
        readonly description: string;
        readonly dn: string;
    }) => void): this;
    once(event: "PITrail", listener: (e: {
        readonly direction: number;
        readonly description: string;
        readonly message: string;
    }) => void): this;
    once(event: "Result", listener: (e: {
        readonly messageId: number;
        readonly DN: string;
        readonly resultCode: number;
        readonly resultDescription: string;
    }) => void): this;
    once(event: "SearchComplete", listener: (e: {
        readonly messageId: number;
        readonly DN: string;
        readonly resultCode: number;
        readonly resultDescription: string;
    }) => void): this;
    once(event: "SearchPage", listener: (e: {
        readonly messageId: number;
        readonly DN: string;
        readonly resultCode: number;
        readonly resultDescription: string;
        cancelSearch: boolean;
    }) => void): this;
    once(event: "SearchResult", listener: (e: {
        readonly messageId: number;
        readonly DN: string;
    }) => void): this;
    once(event: "SearchResultReference", listener: (e: {
        readonly messageId: number;
        readonly ldapUrl: string;
    }) => void): this;
    once(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    once(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    once(event: "UserList", listener: (e: {
        readonly name: string;
        readonly description: string;
        readonly lastLogon: string;
        readonly memberOf: string;
        readonly dn: string;
    }) => void): this;
    addListener(event: "ComputerList", listener: (e: {
        readonly name: string;
        readonly operatingSystem: string;
        readonly lastLogon: string;
        readonly logonCount: number;
        readonly dn: string;
    }) => void): this;
    addListener(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "ExtendedResponse", listener: (e: {
        readonly messageId: number;
        readonly DN: string;
        readonly resultCode: number;
        readonly resultDescription: string;
        readonly responseName: string;
        readonly responseValue: string;
        readonly responseValueB: Uint8Array;
    }) => void): this;
    addListener(event: "GroupList", listener: (e: {
        readonly name: string;
        readonly description: string;
        readonly dn: string;
    }) => void): this;
    addListener(event: "PITrail", listener: (e: {
        readonly direction: number;
        readonly description: string;
        readonly message: string;
    }) => void): this;
    addListener(event: "Result", listener: (e: {
        readonly messageId: number;
        readonly DN: string;
        readonly resultCode: number;
        readonly resultDescription: string;
    }) => void): this;
    addListener(event: "SearchComplete", listener: (e: {
        readonly messageId: number;
        readonly DN: string;
        readonly resultCode: number;
        readonly resultDescription: string;
    }) => void): this;
    addListener(event: "SearchPage", listener: (e: {
        readonly messageId: number;
        readonly DN: string;
        readonly resultCode: number;
        readonly resultDescription: string;
        cancelSearch: boolean;
    }) => void): this;
    addListener(event: "SearchResult", listener: (e: {
        readonly messageId: number;
        readonly DN: string;
    }) => void): this;
    addListener(event: "SearchResultReference", listener: (e: {
        readonly messageId: number;
        readonly ldapUrl: string;
    }) => void): this;
    addListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    addListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    addListener(event: "UserList", listener: (e: {
        readonly name: string;
        readonly description: string;
        readonly lastLogon: string;
        readonly memberOf: string;
        readonly dn: string;
    }) => void): this;
    prependListener(event: "ComputerList", listener: (e: {
        readonly name: string;
        readonly operatingSystem: string;
        readonly lastLogon: string;
        readonly logonCount: number;
        readonly dn: string;
    }) => void): this;
    prependListener(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "ExtendedResponse", listener: (e: {
        readonly messageId: number;
        readonly DN: string;
        readonly resultCode: number;
        readonly resultDescription: string;
        readonly responseName: string;
        readonly responseValue: string;
        readonly responseValueB: Uint8Array;
    }) => void): this;
    prependListener(event: "GroupList", listener: (e: {
        readonly name: string;
        readonly description: string;
        readonly dn: string;
    }) => void): this;
    prependListener(event: "PITrail", listener: (e: {
        readonly direction: number;
        readonly description: string;
        readonly message: string;
    }) => void): this;
    prependListener(event: "Result", listener: (e: {
        readonly messageId: number;
        readonly DN: string;
        readonly resultCode: number;
        readonly resultDescription: string;
    }) => void): this;
    prependListener(event: "SearchComplete", listener: (e: {
        readonly messageId: number;
        readonly DN: string;
        readonly resultCode: number;
        readonly resultDescription: string;
    }) => void): this;
    prependListener(event: "SearchPage", listener: (e: {
        readonly messageId: number;
        readonly DN: string;
        readonly resultCode: number;
        readonly resultDescription: string;
        cancelSearch: boolean;
    }) => void): this;
    prependListener(event: "SearchResult", listener: (e: {
        readonly messageId: number;
        readonly DN: string;
    }) => void): this;
    prependListener(event: "SearchResultReference", listener: (e: {
        readonly messageId: number;
        readonly ldapUrl: string;
    }) => void): this;
    prependListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    prependListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    prependListener(event: "UserList", listener: (e: {
        readonly name: string;
        readonly description: string;
        readonly lastLogon: string;
        readonly memberOf: string;
        readonly dn: string;
    }) => void): this;
    prependOnceListener(event: "ComputerList", listener: (e: {
        readonly name: string;
        readonly operatingSystem: string;
        readonly lastLogon: string;
        readonly logonCount: number;
        readonly dn: string;
    }) => void): this;
    prependOnceListener(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "ExtendedResponse", listener: (e: {
        readonly messageId: number;
        readonly DN: string;
        readonly resultCode: number;
        readonly resultDescription: string;
        readonly responseName: string;
        readonly responseValue: string;
        readonly responseValueB: Uint8Array;
    }) => void): this;
    prependOnceListener(event: "GroupList", listener: (e: {
        readonly name: string;
        readonly description: string;
        readonly dn: string;
    }) => void): this;
    prependOnceListener(event: "PITrail", listener: (e: {
        readonly direction: number;
        readonly description: string;
        readonly message: string;
    }) => void): this;
    prependOnceListener(event: "Result", listener: (e: {
        readonly messageId: number;
        readonly DN: string;
        readonly resultCode: number;
        readonly resultDescription: string;
    }) => void): this;
    prependOnceListener(event: "SearchComplete", listener: (e: {
        readonly messageId: number;
        readonly DN: string;
        readonly resultCode: number;
        readonly resultDescription: string;
    }) => void): this;
    prependOnceListener(event: "SearchPage", listener: (e: {
        readonly messageId: number;
        readonly DN: string;
        readonly resultCode: number;
        readonly resultDescription: string;
        cancelSearch: boolean;
    }) => void): this;
    prependOnceListener(event: "SearchResult", listener: (e: {
        readonly messageId: number;
        readonly DN: string;
    }) => void): this;
    prependOnceListener(event: "SearchResultReference", listener: (e: {
        readonly messageId: number;
        readonly ldapUrl: string;
    }) => void): this;
    prependOnceListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    prependOnceListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    prependOnceListener(event: "UserList", listener: (e: {
        readonly name: string;
        readonly description: string;
        readonly lastLogon: string;
        readonly memberOf: string;
        readonly dn: string;
    }) => void): this;
    /**
     * This method asks the server to abandon a request.
     */
    abandon(messageId: number): Promise<void>;
    /**
     * This method adds an entry specified by DN to the directory server using the type and value attributes defined in the Attributes properties.
     */
    add(): Promise<void>;
    /**
     * This method returns the value of the specified Lightweight Directory Access Protocol (LDAP) attribute.
     */
    attr(attrType: string): Promise<string>;
    /**
     * This method connects and binds to the directory server.
     */
    bind(): Promise<void>;
    /**
     * This method changes the password for the specified user.
     */
    changePassword(user: string, oldPassword: string, newPassword: string): Promise<void>;
    /**
     * This method compares attributes and values with those of the entry specified by DN .
     */
    compare(): Promise<void>;
    /**
     * Sets or retrieves a configuration setting.
     */
    config(configurationString: string): Promise<string>;
    /**
     * This method connects to the directory server without performing any action.
     */
    connect(): Promise<void>;
    /**
     * Deletes an entry specified by DN from the directory server.
     */
    delete(): Promise<void>;
    /**
     * This method processes events from the internal message queue.
     */
    doEvents(): Promise<void>;
    /**
     * This method performs a Lightweight Directory Access Protocol (LDAP) V3 extended operation.
     */
    extendedRequest(requestName: string, requestValue: Uint8Array): Promise<void>;
    /**
     * This method interrupts the current method.
     */
    interrupt(): Promise<void>;
    /**
     * This method lists all computers in the directory.
     */
    listComputers(): Promise<void>;
    /**
     * This method lists all members of a group.
     */
    listGroupMembers(group: string): Promise<void>;
    /**
     * This method list all groups in the directory.
     */
    listGroups(): Promise<void>;
    /**
     * This method lists all groups a user is a part of.
     */
    listUserGroups(user: string): Promise<void>;
    /**
     * This method performs a Lightweight Directory Access Protocol (LDAP) modify operation on the entry specified by DN .
     */
    modify(): Promise<void>;
    /**
     * This method performs a Lightweight Directory Access Protocol (LDAP) modify RDN operation on an entry specified by DN .
     */
    modifyRDN(newRDN: string): Promise<void>;
    /**
     * This method performs a Lightweight Directory Access Protocol (LDAP) modify operation on the entry specified by DN by changing its superior.
     */
    moveToDN(newSuperior: string): Promise<void>;
    /**
     * This method pauses data reception.
     */
    pauseData(): Promise<void>;
    /**
     * This method re-enables data reception after a call to PauseData .
     */
    processData(): Promise<void>;
    /**
     * This method will reset the class.
     */
    reset(): Promise<void>;
    /**
     * This method searches the directory server using the base object specified in DN and the search filter SearchFilter .
     */
    search(searchFilter: string): Promise<void>;
    /**
     * This method unbinds from the directory server.
     */
    unbind(): Promise<void>;
    /**
     * This property indicates whether data reception is currently enabled.
     */
    isAcceptData(): boolean;
    getAttributes(): LDAPAttributeList;
    /**
     * This property is the authentication mechanism to be used when connecting to the Lightweight Directory Access Protocol (LDAP) server.
     */
    getAuthMechanism(): LDAPAuthMechanisms;
    /**
     * This property is the authentication mechanism to be used when connecting to the Lightweight Directory Access Protocol (LDAP) server.
     */
    setAuthMechanism(authMechanism: LDAPAuthMechanisms): void;
    /**
     * This property shows whether the class is connected.
     */
    isConnected(): boolean;
    /**
     * This property controls whether the old RDN (Relative Distinguished Name) should be deleted.
     */
    isDeleteOldRDN(): boolean;
    /**
     * This property controls whether the old RDN (Relative Distinguished Name) should be deleted.
     */
    setDeleteOldRDN(deleteOldRDN: boolean): void;
    /**
     * This property includes the distinguished name used as the base for Lightweight Directory Access Protocol (LDAP) operations.
     */
    getDN(): string;
    /**
     * This property includes the distinguished name used as the base for Lightweight Directory Access Protocol (LDAP) operations.
     */
    setDN(DN: string): void;
    /**
     * A set of properties related to firewall access.
     */
    getFirewall(): Firewall;
    /**
     * A set of properties related to firewall access.
     */
    setFirewall(firewall: Firewall): void;
    /**
     * The current status of the class.
     */
    isIdle(): boolean;
    /**
     * The version of the Lightweight Directory Access Protocol (LDAP) used.
     */
    getLDAPVersion(): number;
    /**
     * The version of the Lightweight Directory Access Protocol (LDAP) used.
     */
    setLDAPVersion(LDAPVersion: number): void;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    getLocalHost(): string;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    setLocalHost(localHost: string): void;
    /**
     * This property includes the message identifier for the next Lightweight Directory Access Protocol (LDAP) request.
     */
    getMessageId(): number;
    /**
     * This property includes the message identifier for the next Lightweight Directory Access Protocol (LDAP) request.
     */
    setMessageId(messageId: number): void;
    /**
     * This property includes the maximum number of results per page for the Search method.
     */
    getPageSize(): number;
    /**
     * This property includes the maximum number of results per page for the Search method.
     */
    setPageSize(pageSize: number): void;
    /**
     * This property includes the password used to authenticate to the Lightweight Directory Access Protocol (LDAP) server.
     */
    getPassword(): string;
    /**
     * This property includes the password used to authenticate to the Lightweight Directory Access Protocol (LDAP) server.
     */
    setPassword(password: string): void;
    getReferences(): LDAPReferenceList;
    /**
     * This property includes the result code returned in the last server response.
     */
    getResultCode(): number;
    /**
     * This property includes the descriptive text returned in the last server response (if any).
     */
    getResultDescription(): string;
    /**
     * This property includes the distinguished name returned in the last server response (if any).
     */
    getResultDN(): string;
    /**
     * This property controls alias dereferencing during searching.
     */
    getSearchDerefAliases(): LDAPSearchDerefAliases;
    /**
     * This property controls alias dereferencing during searching.
     */
    setSearchDerefAliases(searchDerefAliases: LDAPSearchDerefAliases): void;
    /**
     * This property controls whether the search operation returns values of  attributes or only types.
     */
    isSearchReturnValues(): boolean;
    /**
     * This property controls whether the search operation returns values of  attributes or only types.
     */
    setSearchReturnValues(searchReturnValues: boolean): void;
    /**
     * This property controls the scope of Lightweight Directory Access Protocol (LDAP) search operations.
     */
    getSearchScope(): LDAPSearchScopes;
    /**
     * This property controls the scope of Lightweight Directory Access Protocol (LDAP) search operations.
     */
    setSearchScope(searchScope: LDAPSearchScopes): void;
    /**
     * This property includes the maximum number of entries that can be returned by the next search  operation.
     */
    getSearchSizeLimit(): number;
    /**
     * This property includes the maximum number of entries that can be returned by the next search  operation.
     */
    setSearchSizeLimit(searchSizeLimit: number): void;
    /**
     * This property includes a time limit for the next search operation (in seconds).
     */
    getSearchTimeLimit(): number;
    /**
     * This property includes a time limit for the next search operation (in seconds).
     */
    setSearchTimeLimit(searchTimeLimit: number): void;
    /**
     * This property includes the name or address of the Lightweight Directory Access Protocol (LDAP) server.
     */
    getServerName(): string;
    /**
     * This property includes the name or address of the Lightweight Directory Access Protocol (LDAP) server.
     */
    setServerName(serverName: string): void;
    /**
     * This property includes the server port for the Lightweight Directory Access Protocol (LDAP) connection (the default is 389).
     */
    getServerPort(): number;
    /**
     * This property includes the server port for the Lightweight Directory Access Protocol (LDAP) connection (the default is 389).
     */
    setServerPort(serverPort: number): void;
    /**
     * This property includes a string of attribute names to sort on with optional relative matching rules.
     */
    getSortAttributes(): string;
    /**
     * This property includes a string of attribute names to sort on with optional relative matching rules.
     */
    setSortAttributes(sortAttributes: string): void;
    /**
     * Instructs the class to unconditionally accept the server certificate that matches the supplied certificate.
     */
    getSSLAcceptServerCert(): Certificate;
    /**
     * Instructs the class to unconditionally accept the server certificate that matches the supplied certificate.
     */
    setSSLAcceptServerCert(SSLAcceptServerCert: Certificate): void;
    /**
     * The certificate to be used during Secure Sockets Layer (SSL) negotiation.
     */
    getSSLCert(): Certificate;
    /**
     * The certificate to be used during Secure Sockets Layer (SSL) negotiation.
     */
    setSSLCert(SSLCert: Certificate): void;
    /**
     * This property indicates whether Transport Layer Security/Secure Sockets Layer (TLS/SSL) is enabled.
     */
    isSSLEnabled(): boolean;
    /**
     * This property indicates whether Transport Layer Security/Secure Sockets Layer (TLS/SSL) is enabled.
     */
    setSSLEnabled(SSLEnabled: boolean): void;
    /**
     * The Secure Sockets Layer/Transport Layer Security (SSL/TLS) implementation to use.
     */
    getSSLProvider(): LDAPSSLProviders;
    /**
     * The Secure Sockets Layer/Transport Layer Security (SSL/TLS) implementation to use.
     */
    setSSLProvider(SSLProvider: LDAPSSLProviders): void;
    /**
     * The server certificate for the last established connection.
     */
    getSSLServerCert(): Certificate;
    /**
     * This property determines how the class starts the Secure Sockets Layer (SSL) negotiation.
     */
    getSSLStartMode(): LDAPSSLStartModes;
    /**
     * This property determines how the class starts the Secure Sockets Layer (SSL) negotiation.
     */
    setSSLStartMode(SSLStartMode: LDAPSSLStartModes): void;
    /**
     * This property includes the timeout for the class.
     */
    getTimeout(): number;
    /**
     * This property includes the timeout for the class.
     */
    setTimeout(timeout: number): void;
}
/************************************************** ENUMERATED TYPES **************************************************/
/**
 * The MIME component allows for the simple encoding and decoding of MIME structures, such as message
attachments and file uploads.
 */
export declare class mime extends events.EventEmitter {
    private obj;
    constructor();
    about(): string;



    on(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "Header", listener: (e: {
        readonly partIndex: number;
        readonly field: string;
        readonly value: string;
        readonly valueB: Uint8Array;
    }) => void): this;
    on(event: "Progress", listener: (e: {
        readonly percentDone: number;
    }) => void): this;
    once(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "Header", listener: (e: {
        readonly partIndex: number;
        readonly field: string;
        readonly value: string;
        readonly valueB: Uint8Array;
    }) => void): this;
    once(event: "Progress", listener: (e: {
        readonly percentDone: number;
    }) => void): this;
    addListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "Header", listener: (e: {
        readonly partIndex: number;
        readonly field: string;
        readonly value: string;
        readonly valueB: Uint8Array;
    }) => void): this;
    addListener(event: "Progress", listener: (e: {
        readonly percentDone: number;
    }) => void): this;
    prependListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "Header", listener: (e: {
        readonly partIndex: number;
        readonly field: string;
        readonly value: string;
        readonly valueB: Uint8Array;
    }) => void): this;
    prependListener(event: "Progress", listener: (e: {
        readonly percentDone: number;
    }) => void): this;
    prependOnceListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "Header", listener: (e: {
        readonly partIndex: number;
        readonly field: string;
        readonly value: string;
        readonly valueB: Uint8Array;
    }) => void): this;
    prependOnceListener(event: "Progress", listener: (e: {
        readonly percentDone: number;
    }) => void): this;
    /**
     * Sets or retrieves a configuration setting.
     */
    config(configurationString: string): Promise<string>;
    /**
     * This method decodes from a file.
     */
    decodeFromFile(): Promise<void>;
    /**
     * This method decodes from a string.
     */
    decodeFromString(): Promise<void>;
    /**
     * This method decodes the specified part.
     */
    decodePart(index: number): Promise<Uint8Array>;
    /**
     * This method decodes the specified part to a file on disk.
     */
    decodePartToFile(index: number): Promise<string>;
    /**
     * This method encodes to a file.
     */
    encodeToFile(): Promise<void>;
    /**
     * This method encodes to a string.
     */
    encodeToString(): Promise<void>;
    /**
     * This method will reset the class.
     */
    reset(): Promise<void>;
    /**
     * This method resets the values of all headers and part properties.
     */
    resetData(): Promise<void>;
    /**
     * This property includes the boundary separating the MIME parts. It has a maximum length of 80 bytes.
     */
    getBoundary(): string;
    /**
     * This property includes the boundary separating the MIME parts. It has a maximum length of 80 bytes.
     */
    setBoundary(boundary: string): void;
    /**
     * This property includes the value of the content-type header of the message that was encoded/decoded.
     */
    getContentType(): string;
    /**
     * This property includes the value of the content-type header of the message that was encoded/decoded.
     */
    setContentType(contentType: string): void;
    /**
     * This property includes the attributes of the content-type header of the message that was encoded or decoded.
     */
    getContentTypeAttr(): string;
    /**
     * This property includes the attributes of the content-type header of the message that was encoded or decoded.
     */
    setContentTypeAttr(contentTypeAttr: string): void;
    /**
     * This property contains the encoded message text or a path to a file that contains the encoded message text.
     */
    getMessage(): string;
    /**
     * This property contains the encoded message text or a path to a file that contains the encoded message text.
     */
    getMessageB(): Uint8Array;
    /**
     * This property contains the encoded message text or a path to a file that contains the encoded message text.
     */
    setMessage(data: Uint8Array | string): void;
    setMessage(data: Uint8Array, offset: number, length: number): void;
    getMessageHeaders(): HeaderList;
    /**
     * This property includes the string version of the MIME message headers.
     */
    getMessageHeadersString(): string;
    /**
     * This property includes the string version of the MIME message headers.
     */
    setMessageHeadersString(messageHeadersString: string): void;
    getParts(): MIMEPartList;
}
/************************************************** ENUMERATED TYPES **************************************************/
/**
 * The MX component enables querying of mail exchange (MX) records from a
Domain Name Server (DNS). Thus, it will find out the names of the
mail servers accepting email for a given email address or domain.
 */
export declare class mx extends events.EventEmitter {
    private obj;
    constructor();
    about(): string;


    on(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "Response", listener: (e: {
        readonly requestId: number;
        readonly domain: string;
        readonly mailServer: string;
        readonly precedence: number;
        readonly timeToLive: number;
        readonly statusCode: number;
        readonly description: string;
        readonly authoritative: boolean;
    }) => void): this;
    once(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "Response", listener: (e: {
        readonly requestId: number;
        readonly domain: string;
        readonly mailServer: string;
        readonly precedence: number;
        readonly timeToLive: number;
        readonly statusCode: number;
        readonly description: string;
        readonly authoritative: boolean;
    }) => void): this;
    addListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "Response", listener: (e: {
        readonly requestId: number;
        readonly domain: string;
        readonly mailServer: string;
        readonly precedence: number;
        readonly timeToLive: number;
        readonly statusCode: number;
        readonly description: string;
        readonly authoritative: boolean;
    }) => void): this;
    prependListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "Response", listener: (e: {
        readonly requestId: number;
        readonly domain: string;
        readonly mailServer: string;
        readonly precedence: number;
        readonly timeToLive: number;
        readonly statusCode: number;
        readonly description: string;
        readonly authoritative: boolean;
    }) => void): this;
    prependOnceListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "Response", listener: (e: {
        readonly requestId: number;
        readonly domain: string;
        readonly mailServer: string;
        readonly precedence: number;
        readonly timeToLive: number;
        readonly statusCode: number;
        readonly description: string;
        readonly authoritative: boolean;
    }) => void): this;
    /**
     * Sets or retrieves a configuration setting.
     */
    config(configurationString: string): Promise<string>;
    /**
     * This method processes events from the internal message queue.
     */
    doEvents(): Promise<void>;
    /**
     * This method interrupts the current method.
     */
    interrupt(): Promise<void>;
    /**
     * This method will reset the class.
     */
    reset(): Promise<void>;
    /**
     * This method resolves an email address.
     */
    resolve(emailAddress: string): Promise<void>;
    /**
     * This property includes the port where the DNS server is listening.
     */
    getDNSPort(): number;
    /**
     * This property includes the port where the DNS server is listening.
     */
    setDNSPort(DNSPort: number): void;
    /**
     * This is the address of the DNS server.
     */
    getDNSServer(): string;
    /**
     * This is the address of the DNS server.
     */
    setDNSServer(DNSServer: string): void;
    /**
     * The current status of the class.
     */
    isIdle(): boolean;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    getLocalHost(): string;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    setLocalHost(localHost: string): void;
    /**
     * This property includes the mail server with the lowest precedence value (lowest cost to reach).
     */
    getMailServer(): string;
    /**
     * This property identifies each request.
     */
    getRequestId(): number;
    /**
     * This property identifies each request.
     */
    setRequestId(requestId: number): void;
    /**
     * The status of the request is empty while in progress. This property is set to OK or to an error message upon completion.
     */
    getStatus(): string;
    /**
     * This property includes the timeout for the class.
     */
    getTimeout(): number;
    /**
     * This property includes the timeout for the class.
     */
    setTimeout(timeout: number): void;
}
/************************************************** ENUMERATED TYPES **************************************************/
export declare enum NetClockProtocols {
    tpTime = 0,
    tpSNTP = 1
}
/**
 * The NetClock component provides the current time in Greenwich Mean Time from an
Internet Time Server.
 */
export declare class netclock extends events.EventEmitter {
    private obj;
    constructor();
    about(): string;

    on(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    /**
     * Sets or retrieves a configuration setting.
     */
    config(configurationString: string): Promise<string>;
    /**
     * This method processes events from the internal message queue.
     */
    doEvents(): Promise<void>;
    /**
     * This method is the same as the GetTime method, but the system clock is also set to the received time.
     */
    getAndSetTime(): Promise<void>;
    /**
     * This method sends a time request to the TimeServer to get the current time.
     */
    getTime(): Promise<void>;
    /**
     * This method interrupts the current method.
     */
    interrupt(): Promise<void>;
    /**
     * This method resets the class.
     */
    reset(): Promise<void>;
    /**
     * The current status of the class.
     */
    isIdle(): boolean;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    getLocalHost(): string;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    setLocalHost(localHost: string): void;
    /**
     * This property includes the time returned by the TimeServer converted to local time.
     */
    getLocalTime(): string;
    /**
     * This property is the protocol used by the class.
     */
    getProtocol(): NetClockProtocols;
    /**
     * This property is the protocol used by the class.
     */
    setProtocol(protocol: NetClockProtocols): void;
    /**
     * This property includes the time returned by the TimeServer .
     */
    getServerTime(): string;
    /**
     * The timeout for the class.
     */
    getTimeout(): number;
    /**
     * The timeout for the class.
     */
    setTimeout(timeout: number): void;
    /**
     * This property includes the User Datagram Protocol (UDP) port where the remote time server is listening.
     */
    getTimePort(): number;
    /**
     * This property includes the User Datagram Protocol (UDP) port where the remote time server is listening.
     */
    setTimePort(timePort: number): void;
    /**
     * This property includes the time server from which to request the time.
     */
    getTimeServer(): string;
    /**
     * This property includes the time server from which to request the time.
     */
    setTimeServer(timeServer: string): void;
}
/************************************************** ENUMERATED TYPES **************************************************/
export declare enum NetCodeFormats {
    fmtUUEncode = 0,
    fmtBase64 = 1,
    fmtQP = 2,
    fmtURL = 3,
    fmtJIS = 4,
    fmtYEncode = 5,
    fmtMD5Hash = 6,
    fmtSHA1Hash = 7,
    fmtHex = 8,
    fmtHTML = 9,
    fmtHMAC = 10,
    fmtUTF8 = 11,
    fmtUTF7 = 12,
    fmtBase32 = 13,
    fmtBase64URL = 14,
    fmtSHA256Hash = 15,
    fmtPunycode = 16
}
/**
 * The NetCode component can be used to encode or decode files or strings using a variety of
popular encoding formats, such as Base64, UUencode, and URL. UUEncode , MIME's Base64  Quoted-Printable , and URL encoding formats, as well as secure hash functions such
as MD5 and SHA1, are currently supported.
 */
export declare class netcode extends events.EventEmitter {
    private obj;
    constructor();
    about(): string;


    on(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "Progress", listener: (e: {
        readonly percentDone: number;
    }) => void): this;
    once(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "Progress", listener: (e: {
        readonly percentDone: number;
    }) => void): this;
    addListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "Progress", listener: (e: {
        readonly percentDone: number;
    }) => void): this;
    prependListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "Progress", listener: (e: {
        readonly percentDone: number;
    }) => void): this;
    prependOnceListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "Progress", listener: (e: {
        readonly percentDone: number;
    }) => void): this;
    /**
     * Sets or retrieves a configuration setting.
     */
    config(configurationString: string): Promise<string>;
    /**
     * This method decodes a string.
     */
    decode(): Promise<void>;
    /**
     * This method encodes the data.
     */
    encode(): Promise<void>;
    /**
     * This method will reset the class.
     */
    reset(): Promise<void>;
    /**
     * This method resets the values of all data and stream properties.
     */
    resetData(): Promise<void>;
    /**
     * This property includes the decoded data.
     */
    getDecodedData(): string;
    /**
     * This property includes the decoded data.
     */
    getDecodedDataB(): Uint8Array;
    /**
     * This property includes the decoded data.
     */
    setDecodedData(data: Uint8Array | string): void;
    setDecodedData(data: Uint8Array, offset: number, length: number): void;
    /**
     * This property includes the filename of the decoded data.
     */
    getDecodedFile(): string;
    /**
     * This property includes the filename of the decoded data.
     */
    setDecodedFile(decodedFile: string): void;
    /**
     * This property includes the encoded data.
     */
    getEncodedData(): string;
    /**
     * This property includes the encoded data.
     */
    getEncodedDataB(): Uint8Array;
    /**
     * This property includes the encoded data.
     */
    setEncodedData(data: Uint8Array | string): void;
    setEncodedData(data: Uint8Array, offset: number, length: number): void;
    /**
     * This property includes the filename of the encoded data.
     */
    getEncodedFile(): string;
    /**
     * This property includes the filename of the encoded data.
     */
    setEncodedFile(encodedFile: string): void;
    /**
     * This property shows the number of encoded files the class has read from or written into.
     */
    getFileCnt(): number;
    /**
     * This property includes the destination filename for the encoded data.
     */
    getFileName(): string;
    /**
     * This property includes the destination filename for the encoded data.
     */
    setFileName(fileName: string): void;
    /**
     * This property includes the type of encoding to be used.
     */
    getFormat(): NetCodeFormats;
    /**
     * This property includes the type of encoding to be used.
     */
    setFormat(format: NetCodeFormats): void;
    /**
     * This property includes the UNIX-style filemode when uuencoding and uudecoding.
     */
    getMode(): string;
    /**
     * This property includes the UNIX-style filemode when uuencoding and uudecoding.
     */
    setMode(mode: string): void;
    /**
     * This property controls whether created file(s) should overwrite already existing file(s).
     */
    isOverwrite(): boolean;
    /**
     * This property controls whether created file(s) should overwrite already existing file(s).
     */
    setOverwrite(overwrite: boolean): void;
    /**
     * This property controls the granularity at which the Progress event is fired. Values are 0-100.
     */
    getProgressStep(): number;
    /**
     * This property controls the granularity at which the Progress event is fired. Values are 0-100.
     */
    setProgressStep(progressStep: number): void;
}
/************************************************** ENUMERATED TYPES **************************************************/
export declare enum OAuthClientProfiles {
    ocpApplication = 0,
    ocpWeb = 1,
    ocpDevice = 2,
    ocpMobile = 3,
    ocpJWT = 4
}
export declare enum OAuthFollowRedirects {
    frNever = 0,
    frAlways = 1,
    frSameScheme = 2
}
export declare enum OAuthGrantTypes {
    ogtAuthorizationCode = 0,
    ogtImplicit = 1,
    ogtPassword = 2,
    ogtClientCredentials = 3,
    ogtAdminConsent = 4
}
export declare enum OAuthSSLProviders {
    sslpAutomatic = 0,
    sslpPlatform = 1,
    sslpInternal = 2
}
/**
 * The OAuth component is used to authorize a client and provide an authorization string used in future requests.
 */
export declare class oauth extends events.EventEmitter {
    private obj;
    constructor();
    about(): string;
















    on(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    on(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    on(event: "LaunchBrowser", listener: (e: {
        URL: string;
        command: string;
    }) => void): this;
    on(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    on(event: "Redirect", listener: (e: {
        readonly location: string;
        accept: boolean;
    }) => void): this;
    on(event: "ReturnURL", listener: (e: {
        readonly URLPath: string;
        readonly queryString: string;
        responseHeaders: string;
        responseBody: string;
    }) => void): this;
    on(event: "SetCookie", listener: (e: {
        readonly name: string;
        readonly value: string;
        readonly expires: string;
        readonly domain: string;
        readonly path: string;
        readonly secure: boolean;
    }) => void): this;
    on(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    on(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    on(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    on(event: "Status", listener: (e: {
        readonly HTTPVersion: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    once(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    once(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    once(event: "LaunchBrowser", listener: (e: {
        URL: string;
        command: string;
    }) => void): this;
    once(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    once(event: "Redirect", listener: (e: {
        readonly location: string;
        accept: boolean;
    }) => void): this;
    once(event: "ReturnURL", listener: (e: {
        readonly URLPath: string;
        readonly queryString: string;
        responseHeaders: string;
        responseBody: string;
    }) => void): this;
    once(event: "SetCookie", listener: (e: {
        readonly name: string;
        readonly value: string;
        readonly expires: string;
        readonly domain: string;
        readonly path: string;
        readonly secure: boolean;
    }) => void): this;
    once(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    once(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    once(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    once(event: "Status", listener: (e: {
        readonly HTTPVersion: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    addListener(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    addListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    addListener(event: "LaunchBrowser", listener: (e: {
        URL: string;
        command: string;
    }) => void): this;
    addListener(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    addListener(event: "Redirect", listener: (e: {
        readonly location: string;
        accept: boolean;
    }) => void): this;
    addListener(event: "ReturnURL", listener: (e: {
        readonly URLPath: string;
        readonly queryString: string;
        responseHeaders: string;
        responseBody: string;
    }) => void): this;
    addListener(event: "SetCookie", listener: (e: {
        readonly name: string;
        readonly value: string;
        readonly expires: string;
        readonly domain: string;
        readonly path: string;
        readonly secure: boolean;
    }) => void): this;
    addListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    addListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    addListener(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    addListener(event: "Status", listener: (e: {
        readonly HTTPVersion: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    prependListener(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    prependListener(event: "LaunchBrowser", listener: (e: {
        URL: string;
        command: string;
    }) => void): this;
    prependListener(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    prependListener(event: "Redirect", listener: (e: {
        readonly location: string;
        accept: boolean;
    }) => void): this;
    prependListener(event: "ReturnURL", listener: (e: {
        readonly URLPath: string;
        readonly queryString: string;
        responseHeaders: string;
        responseBody: string;
    }) => void): this;
    prependListener(event: "SetCookie", listener: (e: {
        readonly name: string;
        readonly value: string;
        readonly expires: string;
        readonly domain: string;
        readonly path: string;
        readonly secure: boolean;
    }) => void): this;
    prependListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    prependListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    prependListener(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependListener(event: "Status", listener: (e: {
        readonly HTTPVersion: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    prependOnceListener(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependOnceListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    prependOnceListener(event: "LaunchBrowser", listener: (e: {
        URL: string;
        command: string;
    }) => void): this;
    prependOnceListener(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    prependOnceListener(event: "Redirect", listener: (e: {
        readonly location: string;
        accept: boolean;
    }) => void): this;
    prependOnceListener(event: "ReturnURL", listener: (e: {
        readonly URLPath: string;
        readonly queryString: string;
        responseHeaders: string;
        responseBody: string;
    }) => void): this;
    prependOnceListener(event: "SetCookie", listener: (e: {
        readonly name: string;
        readonly value: string;
        readonly expires: string;
        readonly domain: string;
        readonly path: string;
        readonly secure: boolean;
    }) => void): this;
    prependOnceListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    prependOnceListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    prependOnceListener(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependOnceListener(event: "Status", listener: (e: {
        readonly HTTPVersion: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    /**
     * Adds a cookie and the corresponding value to the outgoing request headers.
     */
    addCookie(cookieName: string, cookieValue: string): Promise<void>;
    /**
     * Adds a name-value pair to the query string parameters of the outgoing request.
     */
    addParam(paramName: string, paramValue: string): Promise<void>;
    /**
     * Sets or retrieves a configuration setting.
     */
    config(configurationString: string): Promise<string>;
    /**
     * This method processes events from the internal message queue.
     */
    doEvents(): Promise<void>;
    /**
     * Gets the authorization string required to access the protected resource.
     */
    getAuthorization(): Promise<string>;
    /**
     * Builds and returns the URL to which the user should be redirected for authorization.
     */
    getAuthorizationURL(): Promise<string>;
    /**
     * Gets a specific parameter from a query string.
     */
    getParam(paramName: string): Promise<string>;
    /**
     * This method interrupts the current method.
     */
    interrupt(): Promise<void>;
    /**
     * This method will reset the class.
     */
    reset(): Promise<void>;
    /**
     * Starts the embedded web server.
     */
    startWebServer(): Promise<void>;
    /**
     * Stops the embedded web server.
     */
    stopWebServer(): Promise<void>;
    /**
     * The access token returned by the authorization server.
     */
    getAccessToken(): string;
    /**
     * The access token returned by the authorization server.
     */
    setAccessToken(accessToken: string): void;
    /**
     * The lifetime of the access token.
     */
    getAccessTokenExp(): number;
    /**
     * The authorization code that is exchanged for an access token.
     */
    getAuthorizationCode(): string;
    /**
     * The authorization code that is exchanged for an access token.
     */
    setAuthorizationCode(authorizationCode: string): void;
    /**
     * The scope request or response parameter used during authorization.
     */
    getAuthorizationScope(): string;
    /**
     * The scope request or response parameter used during authorization.
     */
    setAuthorizationScope(authorizationScope: string): void;
    /**
     * The Id of the client assigned when registering the application.
     */
    getClientId(): string;
    /**
     * The Id of the client assigned when registering the application.
     */
    setClientId(clientId: string): void;
    /**
     * The type of client that is requesting authorization.
     */
    getClientProfile(): OAuthClientProfiles;
    /**
     * The type of client that is requesting authorization.
     */
    setClientProfile(clientProfile: OAuthClientProfiles): void;
    /**
     * The secret value for the client assigned when registering the application.
     */
    getClientSecret(): string;
    /**
     * The secret value for the client assigned when registering the application.
     */
    setClientSecret(clientSecret: string): void;
    /**
     * Whether the class is connected.
     */
    isConnected(): boolean;
    getCookies(): HTTPCookieList;
    /**
     * A set of properties related to firewall access.
     */
    getFirewall(): Firewall;
    /**
     * A set of properties related to firewall access.
     */
    setFirewall(firewall: Firewall): void;
    /**
     * Determines what happens when the server issues a redirect.
     */
    getFollowRedirects(): OAuthFollowRedirects;
    /**
     * Determines what happens when the server issues a redirect.
     */
    setFollowRedirects(followRedirects: OAuthFollowRedirects): void;
    /**
     * The OAuth grant type used to acquire an OAuth access token.
     */
    getGrantType(): OAuthGrantTypes;
    /**
     * The OAuth grant type used to acquire an OAuth access token.
     */
    setGrantType(grantType: OAuthGrantTypes): void;
    /**
     * The current status of the class.
     */
    isIdle(): boolean;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    getLocalHost(): string;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    setLocalHost(localHost: string): void;
    /**
     * Other headers as determined by the user (optional).
     */
    getOtherHeaders(): string;
    /**
     * Other headers as determined by the user (optional).
     */
    setOtherHeaders(otherHeaders: string): void;
    getParams(): OAuthParamList;
    /**
     * A set of properties related to proxy access.
     */
    getProxy(): Proxy;
    /**
     * A set of properties related to proxy access.
     */
    setProxy(proxy: Proxy): void;
    /**
     * The refresh token received from or sent to the authorization server.
     */
    getRefreshToken(): string;
    /**
     * The refresh token received from or sent to the authorization server.
     */
    setRefreshToken(refreshToken: string): void;
    /**
     * The URL where the user (browser) returns after authenticating.
     */
    getReturnURL(): string;
    /**
     * The URL where the user (browser) returns after authenticating.
     */
    setReturnURL(returnURL: string): void;
    /**
     * The URL of the authorization server.
     */
    getServerAuthURL(): string;
    /**
     * The URL of the authorization server.
     */
    setServerAuthURL(serverAuthURL: string): void;
    /**
     * The URL used to obtain the access token.
     */
    getServerTokenURL(): string;
    /**
     * The URL used to obtain the access token.
     */
    setServerTokenURL(serverTokenURL: string): void;
    /**
     * Instructs the class to unconditionally accept the server certificate that matches the supplied certificate.
     */
    getSSLAcceptServerCert(): Certificate;
    /**
     * Instructs the class to unconditionally accept the server certificate that matches the supplied certificate.
     */
    setSSLAcceptServerCert(SSLAcceptServerCert: Certificate): void;
    /**
     * The certificate to be used during Secure Sockets Layer (SSL) negotiation.
     */
    getSSLCert(): Certificate;
    /**
     * The certificate to be used during Secure Sockets Layer (SSL) negotiation.
     */
    setSSLCert(SSLCert: Certificate): void;
    /**
     * The Secure Sockets Layer/Transport Layer Security (SSL/TLS) implementation to use.
     */
    getSSLProvider(): OAuthSSLProviders;
    /**
     * The Secure Sockets Layer/Transport Layer Security (SSL/TLS) implementation to use.
     */
    setSSLProvider(SSLProvider: OAuthSSLProviders): void;
    /**
     * The server certificate for the last established connection.
     */
    getSSLServerCert(): Certificate;
    /**
     * The timeout for the class.
     */
    getTimeout(): number;
    /**
     * The timeout for the class.
     */
    setTimeout(timeout: number): void;
    /**
     * The contents of the last response from the server.
     */
    getTransferredData(): string;
    /**
     * The contents of the last response from the server.
     */
    getTransferredDataB(): Uint8Array;
    /**
     * The full set of headers as received from the server.
     */
    getTransferredHeaders(): string;
    /**
     * Whether Proof Key for Code Exchange (PKCE) should be used.
     */
    isUsePKCE(): boolean;
    /**
     * Whether Proof Key for Code Exchange (PKCE) should be used.
     */
    setUsePKCE(usePKCE: boolean): void;
    /**
     * The local port on which the embedded web server listens.
     */
    getWebServerPort(): number;
    /**
     * The local port on which the embedded web server listens.
     */
    setWebServerPort(webServerPort: number): void;
    /**
     * The certificate with the private key to use when a Secure Sockets Layer (SSL) is enabled.
     */
    getWebServerSSLCert(): Certificate;
    /**
     * The certificate with the private key to use when a Secure Sockets Layer (SSL) is enabled.
     */
    setWebServerSSLCert(webServerSSLCert: Certificate): void;
    /**
     * Whether the web server requires Secure Sockets Layer (SSL) connections.
     */
    isWebServerSSLEnabled(): boolean;
    /**
     * Whether the web server requires Secure Sockets Layer (SSL) connections.
     */
    setWebServerSSLEnabled(webServerSSLEnabled: boolean): void;
}
/************************************************** ENUMERATED TYPES **************************************************/
export declare enum ODataAuthSchemes {
    authBasic = 0,
    authDigest = 1,
    authProprietary = 2,
    authNone = 3,
    authNtlm = 4,
    authNegotiate = 5,
    authOAuth = 6
}
export declare enum ODataODataVersions {
    odV2 = 0,
    odV3 = 1,
    odV4 = 2,
    odAuto = 3
}
export declare enum ODataSSLProviders {
    sslpAutomatic = 0,
    sslpPlatform = 1,
    sslpInternal = 2
}
/**
 * The OData component implements the Open Data Protocol (OData). It can be used to query, parse, and update or modify
data contained within an OData service.
 */
export declare class odata extends events.EventEmitter {
    private obj;
    constructor();
    about(): string;















    on(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    on(event: "Entity", listener: (e: {
        readonly name: string;
    }) => void): this;
    on(event: "Entry", listener: (e: {
        readonly id: string;
        readonly title: string;
        readonly summary: string;
        readonly ETag: string;
    }) => void): this;
    on(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    on(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    on(event: "Property", listener: (e: {
        readonly name: string;
        readonly typeName: string;
        readonly nullable: boolean;
    }) => void): this;
    on(event: "SetCookie", listener: (e: {
        readonly name: string;
        readonly value: string;
        readonly expires: string;
        readonly domain: string;
        readonly path: string;
        readonly secure: boolean;
    }) => void): this;
    on(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    on(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    on(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    on(event: "Status", listener: (e: {
        readonly HTTPVersion: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    once(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    once(event: "Entity", listener: (e: {
        readonly name: string;
    }) => void): this;
    once(event: "Entry", listener: (e: {
        readonly id: string;
        readonly title: string;
        readonly summary: string;
        readonly ETag: string;
    }) => void): this;
    once(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    once(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    once(event: "Property", listener: (e: {
        readonly name: string;
        readonly typeName: string;
        readonly nullable: boolean;
    }) => void): this;
    once(event: "SetCookie", listener: (e: {
        readonly name: string;
        readonly value: string;
        readonly expires: string;
        readonly domain: string;
        readonly path: string;
        readonly secure: boolean;
    }) => void): this;
    once(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    once(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    once(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    once(event: "Status", listener: (e: {
        readonly HTTPVersion: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    addListener(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    addListener(event: "Entity", listener: (e: {
        readonly name: string;
    }) => void): this;
    addListener(event: "Entry", listener: (e: {
        readonly id: string;
        readonly title: string;
        readonly summary: string;
        readonly ETag: string;
    }) => void): this;
    addListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    addListener(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    addListener(event: "Property", listener: (e: {
        readonly name: string;
        readonly typeName: string;
        readonly nullable: boolean;
    }) => void): this;
    addListener(event: "SetCookie", listener: (e: {
        readonly name: string;
        readonly value: string;
        readonly expires: string;
        readonly domain: string;
        readonly path: string;
        readonly secure: boolean;
    }) => void): this;
    addListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    addListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    addListener(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    addListener(event: "Status", listener: (e: {
        readonly HTTPVersion: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    prependListener(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependListener(event: "Entity", listener: (e: {
        readonly name: string;
    }) => void): this;
    prependListener(event: "Entry", listener: (e: {
        readonly id: string;
        readonly title: string;
        readonly summary: string;
        readonly ETag: string;
    }) => void): this;
    prependListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    prependListener(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    prependListener(event: "Property", listener: (e: {
        readonly name: string;
        readonly typeName: string;
        readonly nullable: boolean;
    }) => void): this;
    prependListener(event: "SetCookie", listener: (e: {
        readonly name: string;
        readonly value: string;
        readonly expires: string;
        readonly domain: string;
        readonly path: string;
        readonly secure: boolean;
    }) => void): this;
    prependListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    prependListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    prependListener(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependListener(event: "Status", listener: (e: {
        readonly HTTPVersion: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    prependOnceListener(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependOnceListener(event: "Entity", listener: (e: {
        readonly name: string;
    }) => void): this;
    prependOnceListener(event: "Entry", listener: (e: {
        readonly id: string;
        readonly title: string;
        readonly summary: string;
        readonly ETag: string;
    }) => void): this;
    prependOnceListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    prependOnceListener(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    prependOnceListener(event: "Property", listener: (e: {
        readonly name: string;
        readonly typeName: string;
        readonly nullable: boolean;
    }) => void): this;
    prependOnceListener(event: "SetCookie", listener: (e: {
        readonly name: string;
        readonly value: string;
        readonly expires: string;
        readonly domain: string;
        readonly path: string;
        readonly secure: boolean;
    }) => void): this;
    prependOnceListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    prependOnceListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    prependOnceListener(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependOnceListener(event: "Status", listener: (e: {
        readonly HTTPVersion: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    /**
     * Sets or retrieves a configuration setting.
     */
    config(configurationString: string): Promise<string>;
    /**
     * This method creates a new entry within the specified OData service resource.
     */
    createEntry(): Promise<void>;
    /**
     * This method sends a request to the specified URL using the HTTPMethod and PostData provided.
     */
    customRequest(HTTPMethod: string, URL: string, postData: string): Promise<void>;
    /**
     * This method deletes an entry within an OData service resource.
     */
    deleteEntry(): Promise<void>;
    /**
     * This method gets an OData entry property.
     */
    getEntryProperty(XPath: string): Promise<string>;
    /**
     * This method retrieves the schema for a service.
     */
    getSchema(): Promise<void>;
    /**
     * This method determines whether a specific element exists in the document.
     */
    hasXPath(XPath: string): Promise<boolean>;
    /**
     * This method queries an OData service using the specified parameters.
     */
    queryService(): Promise<void>;
    /**
     * This method resets all of properties of the class.
     */
    reset(): Promise<void>;
    /**
     * This method is used to set an OData entry property.
     */
    setEntryProperty(XPath: string, value: string): Promise<void>;
    /**
     * This method sets the schema entity.
     */
    setSchemaEntity(name: string): Promise<void>;
    /**
     * This method sets the schema property.
     */
    setSchemaProperty(name: string): Promise<void>;
    /**
     * This method sets the schema type.
     */
    setSchemaType(name: string): Promise<void>;
    /**
     * This method updates an OData entry.
     */
    updateEntry(): Promise<void>;
    /**
     * This method updates an OData entry property.
     */
    updateProperty(XPath: string, value: string): Promise<void>;
    /**
     * This property includes the Authorization string to be sent to the server.
     */
    getAuthorization(): string;
    /**
     * This property includes the Authorization string to be sent to the server.
     */
    setAuthorization(authorization: string): void;
    /**
     * This property specifies the authentication scheme to use when server authentication is required.
     */
    getAuthScheme(): ODataAuthSchemes;
    /**
     * This property specifies the authentication scheme to use when server authentication is required.
     */
    setAuthScheme(authScheme: ODataAuthSchemes): void;
    /**
     * This includes the feed elements of a feed.
     */
    getChannel(): AtomChannel;
    /**
     * This includes the feed elements of a feed.
     */
    setChannel(channel: AtomChannel): void;
    getCookies(): HTTPCookieList;
    /**
     * This property includes the author of the current entry in an OData feed.
     */
    getEntryAuthor(): string;
    /**
     * This property includes the author of the current entry in an OData feed.
     */
    setEntryAuthor(entryAuthor: string): void;
    /**
     * This property includes the number of entries contained within an OData feed.
     */
    getEntryCount(): number;
    /**
     * This property includes the ETag of the current entry in an OData feed.
     */
    getEntryETag(): string;
    /**
     * This property includes the ETag of the current entry in an OData feed.
     */
    setEntryETag(entryETag: string): void;
    /**
     * This property includes the Id of the current entry in an OData feed.
     */
    getEntryId(): string;
    /**
     * This property includes the Id of the current entry in an OData feed.
     */
    setEntryId(entryId: string): void;
    /**
     * This property includes the index of the current entry in an OData feed.
     */
    getEntryIndex(): number;
    /**
     * This property includes the index of the current entry in an OData feed.
     */
    setEntryIndex(entryIndex: number): void;
    getEntryLinks(): ODataEntryLinkList;
    getEntryProperties(): ODataEntryPropertyList;
    /**
     * This property includes a summary of the current entry in an OData feed.
     */
    getEntrySummary(): string;
    /**
     * This property includes a summary of the current entry in an OData feed.
     */
    setEntrySummary(entrySummary: string): void;
    /**
     * This property includes the title of the current entry in an OData feed.
     */
    getEntryTitle(): string;
    /**
     * This property includes the title of the current entry in an OData feed.
     */
    setEntryTitle(entryTitle: string): void;
    /**
     * This property includes the entry category or type.
     */
    getEntryType(): string;
    /**
     * This property includes the entry category or type.
     */
    setEntryType(entryType: string): void;
    /**
     * This property includes the date-time when a current entry in an OData feed was updated.
     */
    getEntryUpdated(): string;
    /**
     * This property includes the raw XML of the current entry in an OData feed.
     */
    getEntryXML(): string;
    /**
     * This property includes the raw XML of the current entry in an OData feed.
     */
    setEntryXML(entryXML: string): void;
    /**
     * A set of properties related to firewall access.
     */
    getFirewall(): Firewall;
    /**
     * A set of properties related to firewall access.
     */
    setFirewall(firewall: Firewall): void;
    /**
     * The current status of the class.
     */
    isIdle(): boolean;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    getLocalHost(): string;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    setLocalHost(localHost: string): void;
    /**
     * This property includes the OData version.
     */
    getODataVersion(): ODataODataVersions;
    /**
     * This property includes the OData version.
     */
    setODataVersion(ODataVersion: ODataODataVersions): void;
    /**
     * Other headers as determined by the user (optional).
     */
    getOtherHeaders(): string;
    /**
     * Other headers as determined by the user (optional).
     */
    setOtherHeaders(otherHeaders: string): void;
    /**
     * This property includes additional query options to be used when querying a service.
     */
    getOtherQueryOptions(): string;
    /**
     * This property includes additional query options to be used when querying a service.
     */
    setOtherQueryOptions(otherQueryOptions: string): void;
    getParsedHeaders(): HeaderList;
    /**
     * This property includes a password if authentication is to be used.
     */
    getPassword(): string;
    /**
     * This property includes a password if authentication is to be used.
     */
    setPassword(password: string): void;
    /**
     * A set of properties related to proxy access.
     */
    getProxy(): Proxy;
    /**
     * A set of properties related to proxy access.
     */
    setProxy(proxy: Proxy): void;
    /**
     * This property selects only the entries that satisfy the specified filter (expression).
     */
    getQueryFilter(): string;
    /**
     * This property selects only the entries that satisfy the specified filter (expression).
     */
    setQueryFilter(queryFilter: string): void;
    /**
     * This property includes the value used to order entries when querying a service.
     */
    getQueryOrderBy(): string;
    /**
     * This property includes the value used to order entries when querying a service.
     */
    setQueryOrderBy(queryOrderBy: string): void;
    /**
     * This property selects only the specified properties to be returned in an entry when querying a service.
     */
    getQuerySelect(): string;
    /**
     * This property selects only the specified properties to be returned in an entry when querying a service.
     */
    setQuerySelect(querySelect: string): void;
    /**
     * This property includes the number of entries to skip when querying a service.
     */
    getQuerySkip(): string;
    /**
     * This property includes the number of entries to skip when querying a service.
     */
    setQuerySkip(querySkip: string): void;
    /**
     * This property includes the token given by an OData server when the last query result collection is too large.
     */
    getQuerySkipToken(): string;
    /**
     * This property includes the token given by an OData server when the last query result collection is too large.
     */
    setQuerySkipToken(querySkipToken: string): void;
    /**
     * This property selects the first N entries when querying a service.
     */
    getQueryTop(): string;
    /**
     * This property selects the first N entries when querying a service.
     */
    setQueryTop(queryTop: string): void;
    /**
     * This property includes the resource path of an OData service.
     */
    getResourcePath(): string;
    /**
     * This property includes the resource path of an OData service.
     */
    setResourcePath(resourcePath: string): void;
    /**
     * This property includes the navigation properties and their corresponding associations contained within an entity of a service schema.
     */
    getSchemaAssociation(): ODataSchemaAssociation;
    /**
     * This property includes the number of navigation properties contained within an OData schema entity.
     */
    getSchemaAssociationCount(): number;
    /**
     * This property includes the index of the current navigation property in an OData schema entity.
     */
    getSchemaAssociationIndex(): number;
    /**
     * This property includes the index of the current navigation property in an OData schema entity.
     */
    setSchemaAssociationIndex(schemaAssociationIndex: number): void;
    /**
     * This property includes the entities contained within a service schema.
     */
    getSchemaEntity(): ODataSchemaEntity;
    /**
     * This property includes the number of entities contained within an OData schema.
     */
    getSchemaEntityCount(): number;
    /**
     * This property includes the index of the current entity in an OData schema.
     */
    getSchemaEntityIndex(): number;
    /**
     * This property includes the index of the current entity in an OData schema.
     */
    setSchemaEntityIndex(schemaEntityIndex: number): void;
    /**
     * This property includes the keys for a schema entity.
     */
    getSchemaKeys(): Array<string>;
    /**
     * This property includes the properties contained within an entity of a service schema.
     */
    getSchemaProperty(): ODataSchemaProperty;
    /**
     * This property includes the number of properties contained within an OData schema entity.
     */
    getSchemaPropertyCount(): number;
    /**
     * This property includes the index of the current property in an OData schema entity.
     */
    getSchemaPropertyIndex(): number;
    /**
     * This property includes the index of the current property in an OData schema entity.
     */
    setSchemaPropertyIndex(schemaPropertyIndex: number): void;
    /**
     * This property includes the fields (properties) contained within a complex type.
     */
    getSchemaTypeField(): ODataSchemaProperty;
    /**
     * This property includes the number of properties contained within an OData schema complex type.
     */
    getSchemaTypeFieldCount(): number;
    /**
     * This property includes the index of the current field (property) in an OData schema complex type.
     */
    getSchemaTypeFieldIndex(): number;
    /**
     * This property includes the index of the current field (property) in an OData schema complex type.
     */
    setSchemaTypeFieldIndex(schemaTypeFieldIndex: number): void;
    /**
     * This property includes the root URI of an OData service.
     */
    getServiceRootURI(): string;
    /**
     * This property includes the root URI of an OData service.
     */
    setServiceRootURI(serviceRootURI: string): void;
    /**
     * Instructs the class to unconditionally accept the server certificate that matches the supplied certificate.
     */
    getSSLAcceptServerCert(): Certificate;
    /**
     * Instructs the class to unconditionally accept the server certificate that matches the supplied certificate.
     */
    setSSLAcceptServerCert(SSLAcceptServerCert: Certificate): void;
    /**
     * The certificate to be used during Secure Sockets Layer (SSL) negotiation.
     */
    getSSLCert(): Certificate;
    /**
     * The certificate to be used during Secure Sockets Layer (SSL) negotiation.
     */
    setSSLCert(SSLCert: Certificate): void;
    /**
     * The Secure Sockets Layer/Transport Layer Security (SSL/TLS) implementation to use.
     */
    getSSLProvider(): ODataSSLProviders;
    /**
     * The Secure Sockets Layer/Transport Layer Security (SSL/TLS) implementation to use.
     */
    setSSLProvider(SSLProvider: ODataSSLProviders): void;
    /**
     * The server certificate for the last established connection.
     */
    getSSLServerCert(): Certificate;
    /**
     * The timeout for the class.
     */
    getTimeout(): number;
    /**
     * The timeout for the class.
     */
    setTimeout(timeout: number): void;
    /**
     * This property includes the contents of the last response from the server.
     */
    getTransferredData(): string;
    /**
     * This property includes the contents of the last response from the server.
     */
    getTransferredDataB(): Uint8Array;
    /**
     * This property includes a user name if authentication is to be used.
     */
    getUser(): string;
    /**
     * This property includes a user name if authentication is to be used.
     */
    setUser(user: string): void;
}
/************************************************** ENUMERATED TYPES **************************************************/
export declare enum POPAuthMechanisms {
    amUserPassword = 0,
    amCRAMMD5 = 1,
    amNTLM = 2,
    amAPOP = 3,
    amSASLPlain = 4,
    amSASLDigestMD5 = 5,
    amKerberos = 6,
    amXOAUTH2 = 7
}
export declare enum POPSSLProviders {
    sslpAutomatic = 0,
    sslpPlatform = 1,
    sslpInternal = 2
}
export declare enum POPSSLStartModes {
    sslAutomatic = 0,
    sslImplicit = 1,
    sslExplicit = 2,
    sslNone = 3
}
/**
 * The POP Component is used to easily retrieve electronic mail from
internet post office servers (POP).
 */
export declare class pop extends events.EventEmitter {
    private obj;
    constructor();
    about(): string;










    on(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    on(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    on(event: "MessageList", listener: (e: {
        readonly messageNumber: number;
        readonly messageUID: string;
        readonly messageSize: number;
    }) => void): this;
    on(event: "PITrail", listener: (e: {
        readonly direction: number;
        readonly message: string;
    }) => void): this;
    on(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    on(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    on(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    on(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
        readonly EOL: boolean;
    }) => void): this;
    once(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    once(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    once(event: "MessageList", listener: (e: {
        readonly messageNumber: number;
        readonly messageUID: string;
        readonly messageSize: number;
    }) => void): this;
    once(event: "PITrail", listener: (e: {
        readonly direction: number;
        readonly message: string;
    }) => void): this;
    once(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    once(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    once(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    once(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
        readonly EOL: boolean;
    }) => void): this;
    addListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    addListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    addListener(event: "MessageList", listener: (e: {
        readonly messageNumber: number;
        readonly messageUID: string;
        readonly messageSize: number;
    }) => void): this;
    addListener(event: "PITrail", listener: (e: {
        readonly direction: number;
        readonly message: string;
    }) => void): this;
    addListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    addListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    addListener(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    addListener(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
        readonly EOL: boolean;
    }) => void): this;
    prependListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    prependListener(event: "MessageList", listener: (e: {
        readonly messageNumber: number;
        readonly messageUID: string;
        readonly messageSize: number;
    }) => void): this;
    prependListener(event: "PITrail", listener: (e: {
        readonly direction: number;
        readonly message: string;
    }) => void): this;
    prependListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    prependListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    prependListener(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependListener(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
        readonly EOL: boolean;
    }) => void): this;
    prependOnceListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependOnceListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    prependOnceListener(event: "MessageList", listener: (e: {
        readonly messageNumber: number;
        readonly messageUID: string;
        readonly messageSize: number;
    }) => void): this;
    prependOnceListener(event: "PITrail", listener: (e: {
        readonly direction: number;
        readonly message: string;
    }) => void): this;
    prependOnceListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    prependOnceListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    prependOnceListener(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependOnceListener(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
        readonly EOL: boolean;
    }) => void): this;
    /**
     * Sets or retrieves a configuration setting.
     */
    config(configurationString: string): Promise<string>;
    /**
     * This method connects to the mail server and attempts to log in.
     */
    connect(): Promise<void>;
    /**
     * This method deletes a message specified by MessageNumber on the server.
     */
    delete(): Promise<void>;
    /**
     * This method disconnects from the mail server.
     */
    disconnect(): Promise<void>;
    /**
     * This method processes events from the internal message queue.
     */
    doEvents(): Promise<void>;
    /**
     * This method interrupts the current method.
     */
    interrupt(): Promise<void>;
    /**
     * This method retrieves a list of all message sizes from the server.
     */
    listMessageSizes(): Promise<void>;
    /**
     * This method retrieves a list of all message UIDs from the server.
     */
    listMessageUIDs(): Promise<void>;
    /**
     * This method converts a valid RFC 822 message date to a local date and time.
     */
    localizeDate(dateTime: string): Promise<string>;
    /**
     * This method returns the size in bytes of the current message.
     */
    queryMessageSize(): Promise<number>;
    /**
     * This method returns the unique identifier (UID) of the message as specified by the server.
     */
    queryMessageUID(): Promise<string>;
    /**
     * This method returns the cumulative size in bytes of messages in the mailbox (including headers).
     */
    queryTotalSize(): Promise<number>;
    /**
     * This method resets all changes and revert back to the state when the user first connected.
     */
    reset(): Promise<void>;
    /**
     * This method retrieves a message specified by MessageNumber from the server.
     */
    retrieve(): Promise<void>;
    /**
     * This method retrieves headers for a message specified by MessageNumber .
     */
    retrieveHeaders(): Promise<void>;
    /**
     * This method sends the exact command directly to the server.
     */
    sendCommand(command: string): Promise<void>;
    /**
     * This property includes the authentication mechanism to be used when connecting to the mail server.
     */
    getAuthMechanism(): POPAuthMechanisms;
    /**
     * This property includes the authentication mechanism to be used when connecting to the mail server.
     */
    setAuthMechanism(authMechanism: POPAuthMechanisms): void;
    /**
     * Whether the class is connected.
     */
    isConnected(): boolean;
    /**
     * A set of properties related to firewall access.
     */
    getFirewall(): Firewall;
    /**
     * A set of properties related to firewall access.
     */
    setFirewall(firewall: Firewall): void;
    /**
     * The current status of the class.
     */
    isIdle(): boolean;
    /**
     * This property instructs the class to include the headers in the MessageText and LocalFile.
     */
    isIncludeHeaders(): boolean;
    /**
     * This property instructs the class to include the headers in the MessageText and LocalFile.
     */
    setIncludeHeaders(includeHeaders: boolean): void;
    /**
     * This property indicates the last reply received from the server.
     */
    getLastReply(): string;
    /**
     * This property includes the path to a local file to download the message body. If the file exists, it is overwritten (optional).
     */
    getLocalFile(): string;
    /**
     * This property includes the path to a local file to download the message body. If the file exists, it is overwritten (optional).
     */
    setLocalFile(localFile: string): void;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    getLocalHost(): string;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    setLocalHost(localHost: string): void;
    /**
     * This property includes the server port for POP (default 110).
     */
    getMailPort(): number;
    /**
     * This property includes the server port for POP (default 110).
     */
    setMailPort(mailPort: number): void;
    /**
     * This property includes the name or address of a mail server (internet post office server).
     */
    getMailServer(): string;
    /**
     * This property includes the name or address of a mail server (internet post office server).
     */
    setMailServer(mailServer: string): void;
    /**
     * This property includes the maximum number of message lines other than headers to retrieve.
     */
    getMaxLines(): number;
    /**
     * This property includes the maximum number of message lines other than headers to retrieve.
     */
    setMaxLines(maxLines: number): void;
    /**
     * This property provides the raw message content.
     */
    getMessage(): string;
    /**
     * This property provides the raw message content.
     */
    getMessageB(): Uint8Array;
    /**
     * This property includes the value of the CC header of the last retrieved message.
     */
    getMessageCc(): string;
    /**
     * This property includes the number of messages in the mailbox.
     */
    getMessageCount(): number;
    /**
     * This property includes the value of the date header of the last retrieved message.
     */
    getMessageDate(): string;
    /**
     * This property includes the value of the from header of the last retrieved message.
     */
    getMessageFrom(): string;
    getMessageHeaders(): HeaderList;
    /**
     * This property includes a string representation of the full headers of the message as retrieved from the server.
     */
    getMessageHeadersString(): string;
    /**
     * This property includes the current (selected) message.
     */
    getMessageNumber(): number;
    /**
     * This property includes the current (selected) message.
     */
    setMessageNumber(messageNumber: number): void;
    getMessageRecipients(): MessageRecipientList;
    /**
     * This property includes the value of the Reply-To header of the last retrieved message.
     */
    getMessageReplyTo(): string;
    /**
     * This property includes the value of the Subject header of the last retrieved message.
     */
    getMessageSubject(): string;
    /**
     * This property includes the full text of the message as retrieved from the server.
     */
    getMessageText(): string;
    /**
     * This property includes the value of the To header of the last retrieved message.
     */
    getMessageTo(): string;
    /**
     * This property includes the password for the mailbox user.
     */
    getPassword(): string;
    /**
     * This property includes the password for the mailbox user.
     */
    setPassword(password: string): void;
    /**
     * Instructs the class to unconditionally accept the server certificate that matches the supplied certificate.
     */
    getSSLAcceptServerCert(): Certificate;
    /**
     * Instructs the class to unconditionally accept the server certificate that matches the supplied certificate.
     */
    setSSLAcceptServerCert(SSLAcceptServerCert: Certificate): void;
    /**
     * The certificate to be used during Secure Sockets Layer (SSL) negotiation.
     */
    getSSLCert(): Certificate;
    /**
     * The certificate to be used during Secure Sockets Layer (SSL) negotiation.
     */
    setSSLCert(SSLCert: Certificate): void;
    /**
     * This property indicates whether Transport Layer Security/Secure Sockets Layer (TLS/SSL) is enabled.
     */
    isSSLEnabled(): boolean;
    /**
     * This property indicates whether Transport Layer Security/Secure Sockets Layer (TLS/SSL) is enabled.
     */
    setSSLEnabled(SSLEnabled: boolean): void;
    /**
     * The Secure Sockets Layer/Transport Layer Security (SSL/TLS) implementation to use.
     */
    getSSLProvider(): POPSSLProviders;
    /**
     * The Secure Sockets Layer/Transport Layer Security (SSL/TLS) implementation to use.
     */
    setSSLProvider(SSLProvider: POPSSLProviders): void;
    /**
     * The server certificate for the last established connection.
     */
    getSSLServerCert(): Certificate;
    /**
     * This property determines how the class starts the Secure Sockets Layer (SSL) negotiation.
     */
    getSSLStartMode(): POPSSLStartModes;
    /**
     * This property determines how the class starts the Secure Sockets Layer (SSL) negotiation.
     */
    setSSLStartMode(SSLStartMode: POPSSLStartModes): void;
    /**
     * The timeout for the class.
     */
    getTimeout(): number;
    /**
     * The timeout for the class.
     */
    setTimeout(timeout: number): void;
    /**
     * This property includes the user identifier for the mailbox.
     */
    getUser(): string;
    /**
     * This property includes the user identifier for the mailbox.
     */
    setUser(user: string): void;
}
/************************************************** ENUMERATED TYPES **************************************************/
export declare enum RCPProtocols {
    protRexec = 0,
    protRshell = 1
}
/**
 * The RCP component implements the popular UNIX Remote Copy Protocol,
used to transfer files between systems.
 */
export declare class rcp extends events.EventEmitter {
    private obj;
    constructor();
    about(): string;





    on(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "Progress", listener: (e: {
        readonly percentDone: number;
    }) => void): this;
    once(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "Progress", listener: (e: {
        readonly percentDone: number;
    }) => void): this;
    addListener(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "Progress", listener: (e: {
        readonly percentDone: number;
    }) => void): this;
    prependListener(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "Progress", listener: (e: {
        readonly percentDone: number;
    }) => void): this;
    prependOnceListener(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "Progress", listener: (e: {
        readonly percentDone: number;
    }) => void): this;
    /**
     * Sets or retrieves a configuration setting.
     */
    config(configurationString: string): Promise<string>;
    /**
     * This method processes events from the internal message queue.
     */
    doEvents(): Promise<void>;
    /**
     * This method gets the specified file.
     */
    getFile(): Promise<void>;
    /**
     * This method interrupts the current method.
     */
    interrupt(): Promise<void>;
    /**
     * This method puts a file to a specified location.
     */
    putFile(): Promise<void>;
    /**
     * This method will reset the class.
     */
    reset(): Promise<void>;
    /**
     * This property includes the file mode for the RemoteFile .
     */
    getFileMode(): string;
    /**
     * This property includes the file mode for the RemoteFile .
     */
    setFileMode(fileMode: string): void;
    /**
     * A set of properties related to firewall access.
     */
    getFirewall(): Firewall;
    /**
     * A set of properties related to firewall access.
     */
    setFirewall(firewall: Firewall): void;
    /**
     * The current status of the class.
     */
    isIdle(): boolean;
    /**
     * This property includes the file on the local host.
     */
    getLocalFile(): string;
    /**
     * This property includes the file on the local host.
     */
    setLocalFile(localFile: string): void;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    getLocalHost(): string;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    setLocalHost(localHost: string): void;
    /**
     * This property includes the Transmission Control Protocol (TCP) port in the local host where the class binds.
     */
    getLocalPort(): number;
    /**
     * This property includes the Transmission Control Protocol (TCP) port in the local host where the class binds.
     */
    setLocalPort(localPort: number): void;
    /**
     * This property includes the password associated with User .
     */
    getPassword(): string;
    /**
     * This property includes the password associated with User .
     */
    setPassword(password: string): void;
    /**
     * This property sets the protocol to use for the transfer.
     */
    getProtocol(): RCPProtocols;
    /**
     * This property sets the protocol to use for the transfer.
     */
    setProtocol(protocol: RCPProtocols): void;
    /**
     * This property includes the file on the remote host.
     */
    getRemoteFile(): string;
    /**
     * This property includes the file on the remote host.
     */
    setRemoteFile(remoteFile: string): void;
    /**
     * This property includes the remote host to which to connect.
     */
    getRemoteHost(): string;
    /**
     * This property includes the remote host to which to connect.
     */
    setRemoteHost(remoteHost: string): void;
    /**
     * This property includes the port for the service (REXEC or RSHELL).
     */
    getRemotePort(): number;
    /**
     * This property includes the port for the service (REXEC or RSHELL).
     */
    setRemotePort(remotePort: number): void;
    /**
     * The timeout for the class.
     */
    getTimeout(): number;
    /**
     * The timeout for the class.
     */
    setTimeout(timeout: number): void;
    /**
     * This property includes identification of the remote user for a transfer.
     */
    getUser(): string;
    /**
     * This property includes identification of the remote user for a transfer.
     */
    setUser(user: string): void;
}
/************************************************** ENUMERATED TYPES **************************************************/
export declare enum RESTAuthSchemes {
    authBasic = 0,
    authDigest = 1,
    authProprietary = 2,
    authNone = 3,
    authNtlm = 4,
    authNegotiate = 5,
    authOAuth = 6
}
export declare enum RESTFollowRedirects {
    frNever = 0,
    frAlways = 1,
    frSameScheme = 2
}
export declare enum RESTSSLProviders {
    sslpAutomatic = 0,
    sslpPlatform = 1,
    sslpInternal = 2
}
/**
 * The REST Component can be used to retrieve XML documents
from the World Wide Web.
 */
export declare class rest extends events.EventEmitter {
    private obj;
    constructor();
    about(): string;

























    on(event: "Characters", listener: (e: {
        readonly text: string;
    }) => void): this;
    on(event: "Comment", listener: (e: {
        readonly text: string;
    }) => void): this;
    on(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "EndElement", listener: (e: {
        readonly namespace: string;
        readonly element: string;
        readonly QName: string;
        readonly isEmpty: boolean;
    }) => void): this;
    on(event: "EndPrefixMapping", listener: (e: {
        readonly prefix: string;
    }) => void): this;
    on(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    on(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "EvalEntity", listener: (e: {
        readonly entity: string;
        value: string;
    }) => void): this;
    on(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    on(event: "IgnorableWhitespace", listener: (e: {
        readonly text: string;
    }) => void): this;
    on(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    on(event: "Meta", listener: (e: {
        readonly text: string;
    }) => void): this;
    on(event: "PI", listener: (e: {
        readonly text: string;
    }) => void): this;
    on(event: "Redirect", listener: (e: {
        readonly location: string;
        accept: boolean;
    }) => void): this;
    on(event: "SetCookie", listener: (e: {
        readonly name: string;
        readonly value: string;
        readonly expires: string;
        readonly domain: string;
        readonly path: string;
        readonly secure: boolean;
    }) => void): this;
    on(event: "SpecialSection", listener: (e: {
        readonly sectionId: string;
        readonly text: string;
    }) => void): this;
    on(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    on(event: "SSLStatus", listener: (e: {
        readonly message: string;
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
    on(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    on(event: "Status", listener: (e: {
        readonly HTTPVersion: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    once(event: "Characters", listener: (e: {
        readonly text: string;
    }) => void): this;
    once(event: "Comment", listener: (e: {
        readonly text: string;
    }) => void): this;
    once(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "EndElement", listener: (e: {
        readonly namespace: string;
        readonly element: string;
        readonly QName: string;
        readonly isEmpty: boolean;
    }) => void): this;
    once(event: "EndPrefixMapping", listener: (e: {
        readonly prefix: string;
    }) => void): this;
    once(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    once(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "EvalEntity", listener: (e: {
        readonly entity: string;
        value: string;
    }) => void): this;
    once(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    once(event: "IgnorableWhitespace", listener: (e: {
        readonly text: string;
    }) => void): this;
    once(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    once(event: "Meta", listener: (e: {
        readonly text: string;
    }) => void): this;
    once(event: "PI", listener: (e: {
        readonly text: string;
    }) => void): this;
    once(event: "Redirect", listener: (e: {
        readonly location: string;
        accept: boolean;
    }) => void): this;
    once(event: "SetCookie", listener: (e: {
        readonly name: string;
        readonly value: string;
        readonly expires: string;
        readonly domain: string;
        readonly path: string;
        readonly secure: boolean;
    }) => void): this;
    once(event: "SpecialSection", listener: (e: {
        readonly sectionId: string;
        readonly text: string;
    }) => void): this;
    once(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    once(event: "SSLStatus", listener: (e: {
        readonly message: string;
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
    once(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    once(event: "Status", listener: (e: {
        readonly HTTPVersion: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    addListener(event: "Characters", listener: (e: {
        readonly text: string;
    }) => void): this;
    addListener(event: "Comment", listener: (e: {
        readonly text: string;
    }) => void): this;
    addListener(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "EndElement", listener: (e: {
        readonly namespace: string;
        readonly element: string;
        readonly QName: string;
        readonly isEmpty: boolean;
    }) => void): this;
    addListener(event: "EndPrefixMapping", listener: (e: {
        readonly prefix: string;
    }) => void): this;
    addListener(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    addListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "EvalEntity", listener: (e: {
        readonly entity: string;
        value: string;
    }) => void): this;
    addListener(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    addListener(event: "IgnorableWhitespace", listener: (e: {
        readonly text: string;
    }) => void): this;
    addListener(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    addListener(event: "Meta", listener: (e: {
        readonly text: string;
    }) => void): this;
    addListener(event: "PI", listener: (e: {
        readonly text: string;
    }) => void): this;
    addListener(event: "Redirect", listener: (e: {
        readonly location: string;
        accept: boolean;
    }) => void): this;
    addListener(event: "SetCookie", listener: (e: {
        readonly name: string;
        readonly value: string;
        readonly expires: string;
        readonly domain: string;
        readonly path: string;
        readonly secure: boolean;
    }) => void): this;
    addListener(event: "SpecialSection", listener: (e: {
        readonly sectionId: string;
        readonly text: string;
    }) => void): this;
    addListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    addListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
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
    addListener(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    addListener(event: "Status", listener: (e: {
        readonly HTTPVersion: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    prependListener(event: "Characters", listener: (e: {
        readonly text: string;
    }) => void): this;
    prependListener(event: "Comment", listener: (e: {
        readonly text: string;
    }) => void): this;
    prependListener(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "EndElement", listener: (e: {
        readonly namespace: string;
        readonly element: string;
        readonly QName: string;
        readonly isEmpty: boolean;
    }) => void): this;
    prependListener(event: "EndPrefixMapping", listener: (e: {
        readonly prefix: string;
    }) => void): this;
    prependListener(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "EvalEntity", listener: (e: {
        readonly entity: string;
        value: string;
    }) => void): this;
    prependListener(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    prependListener(event: "IgnorableWhitespace", listener: (e: {
        readonly text: string;
    }) => void): this;
    prependListener(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    prependListener(event: "Meta", listener: (e: {
        readonly text: string;
    }) => void): this;
    prependListener(event: "PI", listener: (e: {
        readonly text: string;
    }) => void): this;
    prependListener(event: "Redirect", listener: (e: {
        readonly location: string;
        accept: boolean;
    }) => void): this;
    prependListener(event: "SetCookie", listener: (e: {
        readonly name: string;
        readonly value: string;
        readonly expires: string;
        readonly domain: string;
        readonly path: string;
        readonly secure: boolean;
    }) => void): this;
    prependListener(event: "SpecialSection", listener: (e: {
        readonly sectionId: string;
        readonly text: string;
    }) => void): this;
    prependListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    prependListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
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
    prependListener(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependListener(event: "Status", listener: (e: {
        readonly HTTPVersion: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    prependOnceListener(event: "Characters", listener: (e: {
        readonly text: string;
    }) => void): this;
    prependOnceListener(event: "Comment", listener: (e: {
        readonly text: string;
    }) => void): this;
    prependOnceListener(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "EndElement", listener: (e: {
        readonly namespace: string;
        readonly element: string;
        readonly QName: string;
        readonly isEmpty: boolean;
    }) => void): this;
    prependOnceListener(event: "EndPrefixMapping", listener: (e: {
        readonly prefix: string;
    }) => void): this;
    prependOnceListener(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependOnceListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "EvalEntity", listener: (e: {
        readonly entity: string;
        value: string;
    }) => void): this;
    prependOnceListener(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    prependOnceListener(event: "IgnorableWhitespace", listener: (e: {
        readonly text: string;
    }) => void): this;
    prependOnceListener(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    prependOnceListener(event: "Meta", listener: (e: {
        readonly text: string;
    }) => void): this;
    prependOnceListener(event: "PI", listener: (e: {
        readonly text: string;
    }) => void): this;
    prependOnceListener(event: "Redirect", listener: (e: {
        readonly location: string;
        accept: boolean;
    }) => void): this;
    prependOnceListener(event: "SetCookie", listener: (e: {
        readonly name: string;
        readonly value: string;
        readonly expires: string;
        readonly domain: string;
        readonly path: string;
        readonly secure: boolean;
    }) => void): this;
    prependOnceListener(event: "SpecialSection", listener: (e: {
        readonly sectionId: string;
        readonly text: string;
    }) => void): this;
    prependOnceListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    prependOnceListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
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
    prependOnceListener(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependOnceListener(event: "Status", listener: (e: {
        readonly HTTPVersion: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    /**
     * Adds a cookie and the corresponding value to the outgoing request headers.
     */
    addCookie(cookieName: string, cookieValue: string): Promise<void>;
    /**
     * This method returns the value of the specified attribute.
     */
    attr(attrName: string): Promise<string>;
    /**
     * Sets or retrieves a configuration setting.
     */
    config(configurationString: string): Promise<string>;
    /**
     * This method deletes an object on the server.
     */
    delete(URL: string): Promise<void>;
    /**
     * This method processes events from the internal message queue.
     */
    doEvents(): Promise<void>;
    /**
     * This method retrieves the document using the HTTP GET method.
     */
    get(URL: string): Promise<void>;
    /**
     * This method determines whether a specific element exists in the document.
     */
    hasXPath(XPath: string): Promise<boolean>;
    /**
     * This method interrupts the current method.
     */
    interrupt(): Promise<void>;
    /**
     * This method posts data to the HTTP server using the HTTP POST method.
     */
    post(URL: string): Promise<void>;
    /**
     * This method sends data to the HTTP server using the HTTP PUT method.
     */
    put(URL: string): Promise<void>;
    /**
     * This method resets the class.
     */
    reset(): Promise<void>;
    /**
     * This method navigates to the specified XPath if it exists.
     */
    tryXPath(xpath: string): Promise<boolean>;
    /**
     * This property includes a list of acceptable MIME types for the request.
     */
    getAccept(): string;
    /**
     * This property includes a list of acceptable MIME types for the request.
     */
    setAccept(accept: string): void;
    /**
     * This property includes the Authorization string to be sent to the server.
     */
    getAuthorization(): string;
    /**
     * This property includes the Authorization string to be sent to the server.
     */
    setAuthorization(authorization: string): void;
    /**
     * This property specifies the authentication scheme to use when server authentication is required.
     */
    getAuthScheme(): RESTAuthSchemes;
    /**
     * This property specifies the authentication scheme to use when server authentication is required.
     */
    setAuthScheme(authScheme: RESTAuthSchemes): void;
    /**
     * When set to True, this property creates an internal object model of the XML document.
     */
    isBuildDOM(): boolean;
    /**
     * When set to True, this property creates an internal object model of the XML document.
     */
    setBuildDOM(buildDOM: boolean): void;
    /**
     * Whether the class is connected.
     */
    isConnected(): boolean;
    /**
     * This property includes the content type for posts and puts.
     */
    getContentType(): string;
    /**
     * This property includes the content type for posts and puts.
     */
    setContentType(contentType: string): void;
    getCookies(): HTTPCookieList;
    /**
     * A set of properties related to firewall access.
     */
    getFirewall(): Firewall;
    /**
     * A set of properties related to firewall access.
     */
    setFirewall(firewall: Firewall): void;
    /**
     * Determines what happens when the server issues a redirect.
     */
    getFollowRedirects(): RESTFollowRedirects;
    /**
     * Determines what happens when the server issues a redirect.
     */
    setFollowRedirects(followRedirects: RESTFollowRedirects): void;
    /**
     * This property includes the email address of the HTTP agent (optional).
     */
    getFrom(): string;
    /**
     * This property includes the email address of the HTTP agent (optional).
     */
    setFrom(from: string): void;
    /**
     * This property includes the HTTP method used for the request.
     */
    getHTTPMethod(): string;
    /**
     * This property includes the HTTP method used for the request.
     */
    setHTTPMethod(HTTPMethod: string): void;
    /**
     * The current status of the class.
     */
    isIdle(): boolean;
    /**
     * This property includes a date determining the maximum age of the desired document.
     */
    getIfModifiedSince(): string;
    /**
     * This property includes a date determining the maximum age of the desired document.
     */
    setIfModifiedSince(ifModifiedSince: string): void;
    /**
     * This property includes the path to a local file for downloading. If the file exists, it is overwritten.
     */
    getLocalFile(): string;
    /**
     * This property includes the path to a local file for downloading. If the file exists, it is overwritten.
     */
    setLocalFile(localFile: string): void;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    getLocalHost(): string;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    setLocalHost(localHost: string): void;
    getNamespaces(): XMLNamespaceList;
    /**
     * Other headers as determined by the user (optional).
     */
    getOtherHeaders(): string;
    /**
     * Other headers as determined by the user (optional).
     */
    setOtherHeaders(otherHeaders: string): void;
    getParsedHeaders(): HeaderList;
    /**
     * This property includes a password if authentication is to be used.
     */
    getPassword(): string;
    /**
     * This property includes a password if authentication is to be used.
     */
    setPassword(password: string): void;
    /**
     * This property includes the data to post with the URL if the POST method is used.
     */
    getPostData(): string;
    /**
     * This property includes the data to post with the URL if the POST method is used.
     */
    getPostDataB(): Uint8Array;
    /**
     * This property includes the data to post with the URL if the POST method is used.
     */
    setPostData(data: Uint8Array | string): void;
    setPostData(data: Uint8Array, offset: number, length: number): void;
    /**
     * A set of properties related to proxy access.
     */
    getProxy(): Proxy;
    /**
     * A set of properties related to proxy access.
     */
    setProxy(proxy: Proxy): void;
    /**
     * This property includes the referer URL/document (optional).
     */
    getReferer(): string;
    /**
     * This property includes the referer URL/document (optional).
     */
    setReferer(referer: string): void;
    /**
     * Instructs the class to unconditionally accept the server certificate that matches the supplied certificate.
     */
    getSSLAcceptServerCert(): Certificate;
    /**
     * Instructs the class to unconditionally accept the server certificate that matches the supplied certificate.
     */
    setSSLAcceptServerCert(SSLAcceptServerCert: Certificate): void;
    /**
     * The certificate to be used during Secure Sockets Layer (SSL) negotiation.
     */
    getSSLCert(): Certificate;
    /**
     * The certificate to be used during Secure Sockets Layer (SSL) negotiation.
     */
    setSSLCert(SSLCert: Certificate): void;
    /**
     * The Secure Sockets Layer/Transport Layer Security (SSL/TLS) implementation to use.
     */
    getSSLProvider(): RESTSSLProviders;
    /**
     * The Secure Sockets Layer/Transport Layer Security (SSL/TLS) implementation to use.
     */
    setSSLProvider(SSLProvider: RESTSSLProviders): void;
    /**
     * The server certificate for the last established connection.
     */
    getSSLServerCert(): Certificate;
    /**
     * This property is the first line of the last server response.
     */
    getStatusLine(): string;
    /**
     * The timeout for the class.
     */
    getTimeout(): number;
    /**
     * The timeout for the class.
     */
    setTimeout(timeout: number): void;
    /**
     * This property includes the content of the last response from the server.
     */
    getTransferredData(): string;
    /**
     * This property includes the content of the last response from the server.
     */
    getTransferredDataB(): Uint8Array;
    /**
     * This property includes the maximum number of bytes of data to be transferred.
     */
    getTransferredDataLimit(): number;
    /**
     * This property includes the maximum number of bytes of data to be transferred.
     */
    setTransferredDataLimit(transferredDataLimit: number): void;
    /**
     * The full set of headers as received from the server.
     */
    getTransferredHeaders(): string;
    /**
     * This property includes the URL to which the information is posted.
     */
    getURL(): string;
    /**
     * This property includes the URL to which the information is posted.
     */
    setURL(URL: string): void;
    /**
     * This property includes a user name if authentication is to be used.
     */
    getUser(): string;
    /**
     * This property includes a user name if authentication is to be used.
     */
    setUser(user: string): void;
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
     * This property includes the name of the current element.
     */
    getXElement(): string;
    /**
     * This property includes the XPath to check the server response for errors.
     */
    getXErrorPath(): string;
    /**
     * This property includes the XPath to check the server response for errors.
     */
    setXErrorPath(XErrorPath: string): void;
    /**
     * This property includes the namespace of the current element.
     */
    getXNamespace(): string;
    /**
     * This property includes the parent of the current element.
     */
    getXParent(): string;
    /**
     * This property provides a way to point to a specific element in the response.
     */
    getXPath(): string;
    /**
     * This property provides a way to point to a specific element in the response.
     */
    setXPath(XPath: string): void;
    /**
     * This property includes the prefix of the current element.
     */
    getXPrefix(): string;
    /**
     * This property includes a snapshot of the current element in the document.
     */
    getXSubTree(): string;
    /**
     * This property includes the text of the current element.
     */
    getXText(): string;
}
/************************************************** ENUMERATED TYPES **************************************************/
export declare enum RSSAuthSchemes {
    authBasic = 0,
    authDigest = 1,
    authProprietary = 2,
    authNone = 3,
    authNtlm = 4,
    authNegotiate = 5,
    authOAuth = 6
}
export declare enum RSSFollowRedirects {
    frNever = 0,
    frAlways = 1,
    frSameScheme = 2
}
export declare enum RSSRSSVersions {
    rssVersionUndefined = 0,
    rssVersion091 = 1,
    rssVersion092 = 2,
    rssVersion200 = 3
}
export declare enum RSSSSLProviders {
    sslpAutomatic = 0,
    sslpPlatform = 1,
    sslpInternal = 2
}
/**
 * The RSS Component is used to retrieve, parse, edit, and write RSS-syndicated content.
 */
export declare class rss extends events.EventEmitter {
    private obj;
    constructor();
    about(): string;
















    on(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    on(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    on(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    on(event: "OPMLHeader", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    on(event: "OPMLOutline", listener: (e: {
        readonly level: number;
        readonly text: string;
        readonly typeName: string;
        readonly title: string;
        readonly URL: string;
        readonly XMLURL: string;
        readonly HTMLURL: string;
        readonly created: string;
        readonly description: string;
        readonly otherAttrs: string;
    }) => void): this;
    on(event: "Redirect", listener: (e: {
        readonly location: string;
        accept: boolean;
    }) => void): this;
    on(event: "SetCookie", listener: (e: {
        readonly name: string;
        readonly value: string;
        readonly expires: string;
        readonly domain: string;
        readonly path: string;
        readonly secure: boolean;
    }) => void): this;
    on(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    on(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    on(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    on(event: "Status", listener: (e: {
        readonly HTTPVersion: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    once(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    once(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    once(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    once(event: "OPMLHeader", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    once(event: "OPMLOutline", listener: (e: {
        readonly level: number;
        readonly text: string;
        readonly typeName: string;
        readonly title: string;
        readonly URL: string;
        readonly XMLURL: string;
        readonly HTMLURL: string;
        readonly created: string;
        readonly description: string;
        readonly otherAttrs: string;
    }) => void): this;
    once(event: "Redirect", listener: (e: {
        readonly location: string;
        accept: boolean;
    }) => void): this;
    once(event: "SetCookie", listener: (e: {
        readonly name: string;
        readonly value: string;
        readonly expires: string;
        readonly domain: string;
        readonly path: string;
        readonly secure: boolean;
    }) => void): this;
    once(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    once(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    once(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    once(event: "Status", listener: (e: {
        readonly HTTPVersion: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    addListener(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    addListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    addListener(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    addListener(event: "OPMLHeader", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    addListener(event: "OPMLOutline", listener: (e: {
        readonly level: number;
        readonly text: string;
        readonly typeName: string;
        readonly title: string;
        readonly URL: string;
        readonly XMLURL: string;
        readonly HTMLURL: string;
        readonly created: string;
        readonly description: string;
        readonly otherAttrs: string;
    }) => void): this;
    addListener(event: "Redirect", listener: (e: {
        readonly location: string;
        accept: boolean;
    }) => void): this;
    addListener(event: "SetCookie", listener: (e: {
        readonly name: string;
        readonly value: string;
        readonly expires: string;
        readonly domain: string;
        readonly path: string;
        readonly secure: boolean;
    }) => void): this;
    addListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    addListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    addListener(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    addListener(event: "Status", listener: (e: {
        readonly HTTPVersion: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    prependListener(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    prependListener(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    prependListener(event: "OPMLHeader", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    prependListener(event: "OPMLOutline", listener: (e: {
        readonly level: number;
        readonly text: string;
        readonly typeName: string;
        readonly title: string;
        readonly URL: string;
        readonly XMLURL: string;
        readonly HTMLURL: string;
        readonly created: string;
        readonly description: string;
        readonly otherAttrs: string;
    }) => void): this;
    prependListener(event: "Redirect", listener: (e: {
        readonly location: string;
        accept: boolean;
    }) => void): this;
    prependListener(event: "SetCookie", listener: (e: {
        readonly name: string;
        readonly value: string;
        readonly expires: string;
        readonly domain: string;
        readonly path: string;
        readonly secure: boolean;
    }) => void): this;
    prependListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    prependListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    prependListener(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependListener(event: "Status", listener: (e: {
        readonly HTTPVersion: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    prependOnceListener(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependOnceListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    prependOnceListener(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    prependOnceListener(event: "OPMLHeader", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    prependOnceListener(event: "OPMLOutline", listener: (e: {
        readonly level: number;
        readonly text: string;
        readonly typeName: string;
        readonly title: string;
        readonly URL: string;
        readonly XMLURL: string;
        readonly HTMLURL: string;
        readonly created: string;
        readonly description: string;
        readonly otherAttrs: string;
    }) => void): this;
    prependOnceListener(event: "Redirect", listener: (e: {
        readonly location: string;
        accept: boolean;
    }) => void): this;
    prependOnceListener(event: "SetCookie", listener: (e: {
        readonly name: string;
        readonly value: string;
        readonly expires: string;
        readonly domain: string;
        readonly path: string;
        readonly secure: boolean;
    }) => void): this;
    prependOnceListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    prependOnceListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    prependOnceListener(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependOnceListener(event: "Status", listener: (e: {
        readonly HTTPVersion: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    /**
     * Adds a cookie and the corresponding value to the outgoing request headers.
     */
    addCookie(cookieName: string, cookieValue: string): Promise<void>;
    /**
     * This method inserts a new item into the beginning of an RSS feed.
     */
    addItem(title: string, description: string, link: string): Promise<void>;
    /**
     * This method adds a namespace to the Namespaces properties.
     */
    addNamespace(prefix: string, namespaceURI: string): Promise<void>;
    /**
     * Sets or retrieves a configuration setting.
     */
    config(configurationString: string): Promise<string>;
    /**
     * This method processes events from the internal message queue.
     */
    doEvents(): Promise<void>;
    /**
     * This method retrieves an RSS feed.
     */
    getFeed(URL: string): Promise<void>;
    /**
     * This method gets the value of a specific RSS feed item element or attribute.
     */
    getProperty(propertyName: string): Promise<string>;
    /**
     * This method retrieves an RSS feed.
     */
    getURL(URL: string): Promise<void>;
    /**
     * This method interrupts the current method.
     */
    interrupt(): Promise<void>;
    /**
     * This method returns the value of the attribute specified in the parameter.
     */
    OPMLAttr(attrName: string): Promise<string>;
    /**
     * This method sends data to the HTTP server using the HTTP PUT method.
     */
    put(URL: string): Promise<void>;
    /**
     * This method loads an RSS file into the class.
     */
    readFile(fileName: string): Promise<void>;
    /**
     * This method reads and parses an OPML file.
     */
    readOPML(OPMLFile: string): Promise<void>;
    /**
     * This method resets all properties of the class.
     */
    reset(): Promise<void>;
    /**
     * This method sets the value of a specific RSS feed property.
     */
    setProperty(propertyName: string, propertyValue: string): Promise<void>;
    /**
     * This method writes an RSS feed from the class.
     */
    writeFile(fileName: string): Promise<void>;
    /**
     * This property includes a list of acceptable MIME types for the request.
     */
    getAccept(): string;
    /**
     * This property includes a list of acceptable MIME types for the request.
     */
    setAccept(accept: string): void;
    /**
     * This property includes the Authorization string to be sent to the server.
     */
    getAuthorization(): string;
    /**
     * This property includes the Authorization string to be sent to the server.
     */
    setAuthorization(authorization: string): void;
    /**
     * This property specifies the authentication scheme to use when server authentication is required.
     */
    getAuthScheme(): RSSAuthSchemes;
    /**
     * This property specifies the authentication scheme to use when server authentication is required.
     */
    setAuthScheme(authScheme: RSSAuthSchemes): void;
    /**
     * This property includes the channel data for the feed.
     */
    getChannel(): RSSChannel;
    /**
     * This property includes the channel data for the feed.
     */
    setChannel(channel: RSSChannel): void;
    /**
     * Whether the class is connected.
     */
    isConnected(): boolean;
    getCookies(): HTTPCookieList;
    /**
     * A set of properties related to firewall access.
     */
    getFirewall(): Firewall;
    /**
     * A set of properties related to firewall access.
     */
    setFirewall(firewall: Firewall): void;
    /**
     * Determines what happens when the server issues a redirect.
     */
    getFollowRedirects(): RSSFollowRedirects;
    /**
     * Determines what happens when the server issues a redirect.
     */
    setFollowRedirects(followRedirects: RSSFollowRedirects): void;
    /**
     * The current status of the class.
     */
    isIdle(): boolean;
    /**
     * This property includes a date determining the maximum age of the desired document.
     */
    getIfModifiedSince(): string;
    /**
     * This property includes a date determining the maximum age of the desired document.
     */
    setIfModifiedSince(ifModifiedSince: string): void;
    getItems(): RSSItemList;
    /**
     * This property includes the path to a local file for downloading. If the file exists, it is overwritten.
     */
    getLocalFile(): string;
    /**
     * This property includes the path to a local file for downloading. If the file exists, it is overwritten.
     */
    setLocalFile(localFile: string): void;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    getLocalHost(): string;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    setLocalHost(localHost: string): void;
    getNamespaces(): XMLNamespaceList;
    /**
     * Other headers as determined by the user (optional).
     */
    getOtherHeaders(): string;
    /**
     * Other headers as determined by the user (optional).
     */
    setOtherHeaders(otherHeaders: string): void;
    getParsedHeaders(): HeaderList;
    /**
     * This property includes a password if authentication is to be used.
     */
    getPassword(): string;
    /**
     * This property includes a password if authentication is to be used.
     */
    setPassword(password: string): void;
    /**
     * A set of properties related to proxy access.
     */
    getProxy(): Proxy;
    /**
     * A set of properties related to proxy access.
     */
    setProxy(proxy: Proxy): void;
    /**
     * This property includes the referer URL/document (optional).
     */
    getReferer(): string;
    /**
     * This property includes the referer URL/document (optional).
     */
    setReferer(referer: string): void;
    /**
     * This property includes the complete text of the RSS XML file.
     */
    getRSSData(): string;
    /**
     * This property includes the complete text of the RSS XML file.
     */
    setRSSData(RSSData: string): void;
    /**
     * This property includes the RSS protocol version of the current RSS feed.
     */
    getRSSVersion(): RSSRSSVersions;
    /**
     * This property includes the RSS protocol version of the current RSS feed.
     */
    setRSSVersion(RSSVersion: RSSRSSVersions): void;
    /**
     * Instructs the class to unconditionally accept the server certificate that matches the supplied certificate.
     */
    getSSLAcceptServerCert(): Certificate;
    /**
     * Instructs the class to unconditionally accept the server certificate that matches the supplied certificate.
     */
    setSSLAcceptServerCert(SSLAcceptServerCert: Certificate): void;
    /**
     * The certificate to be used during Secure Sockets Layer (SSL) negotiation.
     */
    getSSLCert(): Certificate;
    /**
     * The certificate to be used during Secure Sockets Layer (SSL) negotiation.
     */
    setSSLCert(SSLCert: Certificate): void;
    /**
     * The Secure Sockets Layer/Transport Layer Security (SSL/TLS) implementation to use.
     */
    getSSLProvider(): RSSSSLProviders;
    /**
     * The Secure Sockets Layer/Transport Layer Security (SSL/TLS) implementation to use.
     */
    setSSLProvider(SSLProvider: RSSSSLProviders): void;
    /**
     * The server certificate for the last established connection.
     */
    getSSLServerCert(): Certificate;
    /**
     * The timeout for the class.
     */
    getTimeout(): number;
    /**
     * The timeout for the class.
     */
    setTimeout(timeout: number): void;
    /**
     * This property includes the contents of the last response from the server.
     */
    getTransferredData(): string;
    /**
     * This property includes the contents of the last response from the server.
     */
    getTransferredDataB(): Uint8Array;
    /**
     * This property includes the maximum number of bytes of data to be transferred.
     */
    getTransferredDataLimit(): number;
    /**
     * This property includes the maximum number of bytes of data to be transferred.
     */
    setTransferredDataLimit(transferredDataLimit: number): void;
    /**
     * The full set of headers as received from the server.
     */
    getTransferredHeaders(): string;
    /**
     * This property includes a user name if authentication is to be used.
     */
    getUser(): string;
    /**
     * This property includes a user name if authentication is to be used.
     */
    setUser(user: string): void;
}
/************************************************** ENUMERATED TYPES **************************************************/
export declare enum S3AccessPolicies {
    ptPrivate = 0,
    ptPublicRead = 1,
    ptPublicReadWrite = 2,
    ptAuthenticatedRead = 3,
    ptBucketOwnerRead = 4,
    ptBucketOwnerFullControl = 5,
    ptNone = 6
}
export declare enum S3CompressionMethods {
    cmNone = 0,
    cmDeflate = 1,
    cmZlib = 2,
    cmGzip = 3
}
export declare enum S3EncryptionAlgorithms {
    eaAES = 0,
    eaBlowfish = 1,
    eaCAST = 2,
    eaDES = 3,
    eaIDEA = 4,
    eaRC2 = 5,
    eaRC4 = 6,
    eaTEA = 7,
    eaTripleDES = 8,
    eaTwofish = 9,
    eaRijndael = 10,
    eaChaCha = 11,
    eaXSalsa20 = 12
}
export declare enum S3FollowRedirects {
    frNever = 0,
    frAlways = 1,
    frSameScheme = 2
}
export declare enum S3ServiceProviders {
    spAmazonS3 = 0,
    spDigitalOcean = 1,
    spGoogleStorage = 2,
    spWasabi = 3,
    spBackblazeB2 = 4,
    spHuawei = 5,
    spAlibaba = 6,
    spIBM = 7,
    spOracle = 8,
    spLinode = 9,
    spCloudflareR2 = 10,
    spSeagateLyveCloud = 11,
    spOortDSS = 12,
    spCustom = 255
}
export declare enum S3SSLProviders {
    sslpAutomatic = 0,
    sslpPlatform = 1,
    sslpInternal = 2
}
/**
 * The S3 component provides an easy-to-use interface for Amazon S3 and other S3-compatible services.
 */
export declare class s3 extends events.EventEmitter {
    private obj;
    constructor();
    about(): string;















    on(event: "BucketList", listener: (e: {
        readonly bucketName: string;
        readonly creationDate: string;
        readonly ownerId: string;
        readonly ownerName: string;
    }) => void): this;
    on(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    on(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "FragmentComplete", listener: (e: {
        readonly fragmentNumber: number;
        readonly fragmentCount: number;
        interrupt: boolean;
    }) => void): this;
    on(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    on(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    on(event: "MetadataList", listener: (e: {
        readonly name: string;
        readonly value: string;
    }) => void): this;
    on(event: "ObjectList", listener: (e: {
        readonly bucketName: string;
        readonly objectName: string;
        readonly lastModified: string;
        readonly size: number;
        readonly ETag: string;
        readonly ownerId: string;
        readonly ownerName: string;
        readonly uploadId: string;
        readonly versionId: string;
        readonly latestVersion: boolean;
        readonly deleted: boolean;
    }) => void): this;
    on(event: "PartList", listener: (e: {
        readonly partNumber: number;
        readonly objectName: string;
        readonly lastModified: string;
        readonly size: number;
        readonly ETag: string;
        readonly ownerId: string;
        readonly ownerName: string;
    }) => void): this;
    on(event: "PrefixList", listener: (e: {
        readonly bucketName: string;
        readonly prefix: string;
    }) => void): this;
    on(event: "Progress", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly totalBytes: number;
        readonly percentDone: number;
    }) => void): this;
    on(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    on(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    on(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    on(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    once(event: "BucketList", listener: (e: {
        readonly bucketName: string;
        readonly creationDate: string;
        readonly ownerId: string;
        readonly ownerName: string;
    }) => void): this;
    once(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    once(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "FragmentComplete", listener: (e: {
        readonly fragmentNumber: number;
        readonly fragmentCount: number;
        interrupt: boolean;
    }) => void): this;
    once(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    once(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    once(event: "MetadataList", listener: (e: {
        readonly name: string;
        readonly value: string;
    }) => void): this;
    once(event: "ObjectList", listener: (e: {
        readonly bucketName: string;
        readonly objectName: string;
        readonly lastModified: string;
        readonly size: number;
        readonly ETag: string;
        readonly ownerId: string;
        readonly ownerName: string;
        readonly uploadId: string;
        readonly versionId: string;
        readonly latestVersion: boolean;
        readonly deleted: boolean;
    }) => void): this;
    once(event: "PartList", listener: (e: {
        readonly partNumber: number;
        readonly objectName: string;
        readonly lastModified: string;
        readonly size: number;
        readonly ETag: string;
        readonly ownerId: string;
        readonly ownerName: string;
    }) => void): this;
    once(event: "PrefixList", listener: (e: {
        readonly bucketName: string;
        readonly prefix: string;
    }) => void): this;
    once(event: "Progress", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly totalBytes: number;
        readonly percentDone: number;
    }) => void): this;
    once(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    once(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    once(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    once(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    addListener(event: "BucketList", listener: (e: {
        readonly bucketName: string;
        readonly creationDate: string;
        readonly ownerId: string;
        readonly ownerName: string;
    }) => void): this;
    addListener(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    addListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "FragmentComplete", listener: (e: {
        readonly fragmentNumber: number;
        readonly fragmentCount: number;
        interrupt: boolean;
    }) => void): this;
    addListener(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    addListener(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    addListener(event: "MetadataList", listener: (e: {
        readonly name: string;
        readonly value: string;
    }) => void): this;
    addListener(event: "ObjectList", listener: (e: {
        readonly bucketName: string;
        readonly objectName: string;
        readonly lastModified: string;
        readonly size: number;
        readonly ETag: string;
        readonly ownerId: string;
        readonly ownerName: string;
        readonly uploadId: string;
        readonly versionId: string;
        readonly latestVersion: boolean;
        readonly deleted: boolean;
    }) => void): this;
    addListener(event: "PartList", listener: (e: {
        readonly partNumber: number;
        readonly objectName: string;
        readonly lastModified: string;
        readonly size: number;
        readonly ETag: string;
        readonly ownerId: string;
        readonly ownerName: string;
    }) => void): this;
    addListener(event: "PrefixList", listener: (e: {
        readonly bucketName: string;
        readonly prefix: string;
    }) => void): this;
    addListener(event: "Progress", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly totalBytes: number;
        readonly percentDone: number;
    }) => void): this;
    addListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    addListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    addListener(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    addListener(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    prependListener(event: "BucketList", listener: (e: {
        readonly bucketName: string;
        readonly creationDate: string;
        readonly ownerId: string;
        readonly ownerName: string;
    }) => void): this;
    prependListener(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "FragmentComplete", listener: (e: {
        readonly fragmentNumber: number;
        readonly fragmentCount: number;
        interrupt: boolean;
    }) => void): this;
    prependListener(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    prependListener(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    prependListener(event: "MetadataList", listener: (e: {
        readonly name: string;
        readonly value: string;
    }) => void): this;
    prependListener(event: "ObjectList", listener: (e: {
        readonly bucketName: string;
        readonly objectName: string;
        readonly lastModified: string;
        readonly size: number;
        readonly ETag: string;
        readonly ownerId: string;
        readonly ownerName: string;
        readonly uploadId: string;
        readonly versionId: string;
        readonly latestVersion: boolean;
        readonly deleted: boolean;
    }) => void): this;
    prependListener(event: "PartList", listener: (e: {
        readonly partNumber: number;
        readonly objectName: string;
        readonly lastModified: string;
        readonly size: number;
        readonly ETag: string;
        readonly ownerId: string;
        readonly ownerName: string;
    }) => void): this;
    prependListener(event: "PrefixList", listener: (e: {
        readonly bucketName: string;
        readonly prefix: string;
    }) => void): this;
    prependListener(event: "Progress", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly totalBytes: number;
        readonly percentDone: number;
    }) => void): this;
    prependListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    prependListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    prependListener(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependListener(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    prependOnceListener(event: "BucketList", listener: (e: {
        readonly bucketName: string;
        readonly creationDate: string;
        readonly ownerId: string;
        readonly ownerName: string;
    }) => void): this;
    prependOnceListener(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependOnceListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "FragmentComplete", listener: (e: {
        readonly fragmentNumber: number;
        readonly fragmentCount: number;
        interrupt: boolean;
    }) => void): this;
    prependOnceListener(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    prependOnceListener(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    prependOnceListener(event: "MetadataList", listener: (e: {
        readonly name: string;
        readonly value: string;
    }) => void): this;
    prependOnceListener(event: "ObjectList", listener: (e: {
        readonly bucketName: string;
        readonly objectName: string;
        readonly lastModified: string;
        readonly size: number;
        readonly ETag: string;
        readonly ownerId: string;
        readonly ownerName: string;
        readonly uploadId: string;
        readonly versionId: string;
        readonly latestVersion: boolean;
        readonly deleted: boolean;
    }) => void): this;
    prependOnceListener(event: "PartList", listener: (e: {
        readonly partNumber: number;
        readonly objectName: string;
        readonly lastModified: string;
        readonly size: number;
        readonly ETag: string;
        readonly ownerId: string;
        readonly ownerName: string;
    }) => void): this;
    prependOnceListener(event: "PrefixList", listener: (e: {
        readonly bucketName: string;
        readonly prefix: string;
    }) => void): this;
    prependOnceListener(event: "Progress", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly totalBytes: number;
        readonly percentDone: number;
    }) => void): this;
    prependOnceListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    prependOnceListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    prependOnceListener(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependOnceListener(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    /**
     * This method aborts a multipart upload.
     */
    abortMultipartUpload(objectName: string, uploadId: string): Promise<void>;
    /**
     * Adds a metadata item to the Metadata properties.
     */
    addMetadata(name: string, value: string): Promise<void>;
    /**
     * This method adds a query parameter to the QueryParams properties.
     */
    addQueryParam(name: string, value: string): Promise<void>;
    /**
     * This method appends data to the end of the existing object specified by ObjectName .
     */
    appendObject(objectName: string): Promise<void>;
    /**
     * This method checks whether the bucket exists.
     */
    bucketExists(): Promise<boolean>;
    /**
     * This method checks whether versioning is enabled for the currently selected bucket.
     */
    checkVersioningEnabled(): Promise<boolean>;
    /**
     * This method completes a multipart upload by assembling previously uploaded parts.
     */
    completeMultipartUpload(objectName: string, uploadId: string): Promise<void>;
    /**
     * Sets or retrieves a configuration setting.
     */
    config(configurationString: string): Promise<string>;
    /**
     * This method copies an object.
     */
    copyObject(srcObjectName: string, destBucket: string, destObjectName: string): Promise<void>;
    /**
     * This method copies the specified object as a part of a multipart upload.
     */
    copyPart(srcObjectName: string, destBucket: string, destObjectName: string, destPartNumber: number, destUploadId: string): Promise<void>;
    /**
     * This method creates a new bucket.
     */
    createBucket(): Promise<void>;
    /**
     * This method creates a new object in the currently selected bucket.
     */
    createObject(objectName: string): Promise<void>;
    /**
     * This method deletes a bucket.
     */
    deleteBucket(): Promise<void>;
    /**
     * This method deletes an object.
     */
    deleteObject(objectName: string): Promise<void>;
    /**
     * This method disables versioning for the currently selected bucket.
     */
    disableVersioning(): Promise<void>;
    /**
     * This method processes events from the internal message queue.
     */
    doEvents(): Promise<void>;
    /**
     * This method enables versioning for the currently selected bucket.
     */
    enableVersioning(): Promise<void>;
    /**
     * This method gets a bucket's location.
     */
    getBucketLocation(): Promise<string>;
    /**
     * This method creates a link that provides access to an object for a specified amount of time.
     */
    getLink(objectName: string, expires: number): Promise<string>;
    /**
     * This method downloads an object.
     */
    getObject(objectName: string): Promise<void>;
    /**
     * This method gets an object's information and metadata.
     */
    getObjectInfo(objectName: string): Promise<void>;
    /**
     * This method interrupts the current method.
     */
    interrupt(): Promise<void>;
    /**
     * This method lists all buckets in the account.
     */
    listBuckets(): Promise<void>;
    /**
     * This method lists the current multipart uploads.
     */
    listMultipartUploads(): Promise<void>;
    /**
     * This method lists the objects in a bucket.
     */
    listObjects(): Promise<void>;
    /**
     * This method lists the parts in a multipart upload.
     */
    listParts(objectName: string, uploadId: string): Promise<void>;
    /**
     * This method lists the object versions in a bucket.
     */
    listVersions(): Promise<void>;
    /**
     * This method resets the class to its initial state.
     */
    reset(): Promise<void>;
    /**
     * This method resets all HTTP headers, cookies, and LocalFile.
     */
    resetHeaders(): Promise<void>;
    /**
     * This method sends a custom request to the server.
     */
    sendCustomRequest(httpMethod: string, objectName: string, requestBody: string): Promise<void>;
    /**
     * This method starts a new manual multipart upload.
     */
    startMultipartUpload(objectName: string): Promise<string>;
    /**
     * This method updates a bucket's canned access policy.
     */
    updateBucketACL(): Promise<void>;
    /**
     * This method updates an object's canned access policy.
     */
    updateObjectACL(objectName: string): Promise<void>;
    /**
     * This method uploads a multipart upload part.
     */
    uploadPart(objectName: string, partNumber: number, uploadId: string): Promise<void>;
    /**
     * This property includes the access key to use for authentication.
     */
    getAccessKey(): string;
    /**
     * This property includes the access key to use for authentication.
     */
    setAccessKey(accessKey: string): void;
    /**
     * This property includes the canned access policy to apply to a bucket or object.
     */
    getAccessPolicy(): S3AccessPolicies;
    /**
     * This property includes the canned access policy to apply to a bucket or object.
     */
    setAccessPolicy(accessPolicy: S3AccessPolicies): void;
    /**
     * This property selects a bucket.
     */
    getBucket(): string;
    /**
     * This property selects a bucket.
     */
    setBucket(bucket: string): void;
    getBuckets(): S3BucketList;
    /**
     * Specifies an optional compression method.
     */
    getCompressionMethod(): S3CompressionMethods;
    /**
     * Specifies an optional compression method.
     */
    setCompressionMethod(compressionMethod: S3CompressionMethods): void;
    /**
     * This property includes content disposition to send for an object.
     */
    getContentDisposition(): string;
    /**
     * This property includes content disposition to send for an object.
     */
    setContentDisposition(contentDisposition: string): void;
    /**
     * This property includes the content type to send for an object.
     */
    getContentType(): string;
    /**
     * This property includes the content type to send for an object.
     */
    setContentType(contentType: string): void;
    /**
     * This property includes the encryption algorithm.
     */
    getEncryptionAlgorithm(): S3EncryptionAlgorithms;
    /**
     * This property includes the encryption algorithm.
     */
    setEncryptionAlgorithm(encryptionAlgorithm: S3EncryptionAlgorithms): void;
    /**
     * This property includes the encryption password.
     */
    getEncryptionPassword(): string;
    /**
     * This property includes the encryption password.
     */
    setEncryptionPassword(encryptionPassword: string): void;
    /**
     * A set of properties related to firewall access.
     */
    getFirewall(): Firewall;
    /**
     * A set of properties related to firewall access.
     */
    setFirewall(firewall: Firewall): void;
    /**
     * This property determines what happens when the server issues a redirect.
     */
    getFollowRedirects(): S3FollowRedirects;
    /**
     * This property determines what happens when the server issues a redirect.
     */
    setFollowRedirects(followRedirects: S3FollowRedirects): void;
    /**
     * The current status of the class.
     */
    isIdle(): boolean;
    /**
     * This property includes the location of the local file.
     */
    getLocalFile(): string;
    /**
     * This property includes the location of the local file.
     */
    setLocalFile(localFile: string): void;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    getLocalHost(): string;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    setLocalHost(localHost: string): void;
    getMetadata(): S3MetadataList;
    /**
     * This property includes the data that were downloaded or that should be uploaded.
     */
    getObjectData(): string;
    /**
     * This property includes the data that were downloaded or that should be uploaded.
     */
    getObjectDataB(): Uint8Array;
    /**
     * This property includes the data that were downloaded or that should be uploaded.
     */
    setObjectData(data: Uint8Array | string): void;
    setObjectData(data: Uint8Array, offset: number, length: number): void;
    /**
     * This property includes the delimiter string to use when listing objects.
     */
    getObjectDelimiter(): string;
    /**
     * This property includes the delimiter string to use when listing objects.
     */
    setObjectDelimiter(objectDelimiter: string): void;
    /**
     * This property includes a marker indicating what page of objects to return next.
     */
    getObjectMarker(): string;
    /**
     * This property includes a marker indicating what page of objects to return next.
     */
    setObjectMarker(objectMarker: string): void;
    /**
     * This property includes a prefix used to restrict the results returned when listing objects.
     */
    getObjectPrefix(): string;
    /**
     * This property includes a prefix used to restrict the results returned when listing objects.
     */
    setObjectPrefix(objectPrefix: string): void;
    getObjects(): S3ObjectList;
    /**
     * Other headers as determined by the user (optional).
     */
    getOtherHeaders(): string;
    /**
     * Other headers as determined by the user (optional).
     */
    setOtherHeaders(otherHeaders: string): void;
    /**
     * This property determines if local files are overwritten.
     */
    isOverwrite(): boolean;
    /**
     * This property determines if local files are overwritten.
     */
    setOverwrite(overwrite: boolean): void;
    getParsedHeaders(): HeaderList;
    /**
     * This property includes a marker indicating what page of parts to return next.
     */
    getPartMarker(): string;
    /**
     * This property includes a marker indicating what page of parts to return next.
     */
    setPartMarker(partMarker: string): void;
    getParts(): S3PartList;
    /**
     * A set of properties related to proxy access.
     */
    getProxy(): Proxy;
    /**
     * A set of properties related to proxy access.
     */
    setProxy(proxy: Proxy): void;
    getQueryParams(): S3QueryParamList;
    /**
     * This property includes the range of bytes to request.
     */
    getRange(): string;
    /**
     * This property includes the range of bytes to request.
     */
    setRange(range: string): void;
    /**
     * This property includes the region the class will make requests against.
     */
    getRegion(): string;
    /**
     * This property includes the region the class will make requests against.
     */
    setRegion(region: string): void;
    /**
     * This property includes the secret key to use for authentication.
     */
    getSecretKey(): string;
    /**
     * This property includes the secret key to use for authentication.
     */
    setSecretKey(secretKey: string): void;
    /**
     * This property includes the S3 service provider to use.
     */
    getServiceProvider(): S3ServiceProviders;
    /**
     * This property includes the S3 service provider to use.
     */
    setServiceProvider(serviceProvider: S3ServiceProviders): void;
    /**
     * Instructs the class to unconditionally accept the server certificate that matches the supplied certificate.
     */
    getSSLAcceptServerCert(): Certificate;
    /**
     * Instructs the class to unconditionally accept the server certificate that matches the supplied certificate.
     */
    setSSLAcceptServerCert(SSLAcceptServerCert: Certificate): void;
    /**
     * The certificate to be used during Secure Sockets Layer (SSL) negotiation.
     */
    getSSLCert(): Certificate;
    /**
     * The certificate to be used during Secure Sockets Layer (SSL) negotiation.
     */
    setSSLCert(SSLCert: Certificate): void;
    /**
     * The Secure Sockets Layer/Transport Layer Security (SSL/TLS) implementation to use.
     */
    getSSLProvider(): S3SSLProviders;
    /**
     * The Secure Sockets Layer/Transport Layer Security (SSL/TLS) implementation to use.
     */
    setSSLProvider(SSLProvider: S3SSLProviders): void;
    /**
     * The server certificate for the last established connection.
     */
    getSSLServerCert(): Certificate;
    /**
     * This property includes the byte offset from which to resume the upload or download.
     */
    getStartByte(): number;
    /**
     * This property includes the byte offset from which to resume the upload or download.
     */
    setStartByte(startByte: number): void;
    /**
     * The timeout for the class.
     */
    getTimeout(): number;
    /**
     * The timeout for the class.
     */
    setTimeout(timeout: number): void;
    /**
     * This method includes whether to use SSL/TLS when connecting.
     */
    isUseSSL(): boolean;
    /**
     * This method includes whether to use SSL/TLS when connecting.
     */
    setUseSSL(useSSL: boolean): void;
    /**
     * This property determines which URL style to use when making requests.
     */
    isUseVirtualHosting(): boolean;
    /**
     * This property determines which URL style to use when making requests.
     */
    setUseVirtualHosting(useVirtualHosting: boolean): void;
    /**
     * This property includes the object version to make requests against.
     */
    getVersionId(): string;
    /**
     * This property includes the object version to make requests against.
     */
    setVersionId(versionId: string): void;
    /**
     * This property includes a marker indicating what page of object versions to return next.
     */
    getVersionMarker(): string;
    /**
     * This property includes a marker indicating what page of object versions to return next.
     */
    setVersionMarker(versionMarker: string): void;
}
/************************************************** ENUMERATED TYPES **************************************************/
export declare enum SMPPMessagePriorities {
    smppMessagePriorityLow = 0,
    smppMessagePriorityNormal = 1,
    smppMessagePriorityHigh = 2,
    smppMessagePriorityUrgent = 3
}
export declare enum SMPPProtocols {
    smppSMPP = 0,
    smppCIMD2 = 1
}
export declare enum SMPPServiceTypes {
    smppServiceDefault = 0,
    smppServiceCMT = 1,
    smppServiceCPT = 2,
    smppServiceVMN = 3,
    smppServiceVMA = 4,
    smppServiceWAP = 5,
    smppServiceUSSD = 6,
    smppServiceCBS = 7
}
export declare enum SMPPSMPPVersions {
    smppVersion50 = 0,
    smppVersion34 = 1,
    smppVersion33 = 2
}
export declare enum SMPPSSLProviders {
    sslpAutomatic = 0,
    sslpPlatform = 1,
    sslpInternal = 2
}
export declare enum SMPPSSLStartModes {
    sslAutomatic = 0,
    sslImplicit = 1,
    sslExplicit = 2,
    sslNone = 3
}
/**
 * The SMPP Component implements a lightweight message transmission
interface using the Short Message Peer-to-Peer protocol, most known
for its use in cellular text messaging.
 */
export declare class smpp extends events.EventEmitter {
    private obj;
    constructor();
    about(): string;










    on(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "MessageIn", listener: (e: {
        readonly sourceAddress: string;
        readonly scheduleDeliveryTime: string;
        readonly validityPeriod: string;
        readonly message: string;
        readonly messagePart: number;
        readonly messagePartCount: number;
        readonly messagePartReference: number;
        readonly destinationAddress: string;
        responseErrorCode: number;
    }) => void): this;
    on(event: "MessageStatus", listener: (e: {
        readonly messageId: string;
        readonly messageState: number;
        readonly messageError: number;
        readonly finalDate: string;
    }) => void): this;
    on(event: "PITrail", listener: (e: {
        readonly direction: number;
        readonly PDU: string;
        readonly PDUB: Uint8Array;
        readonly commandLength: number;
        readonly commandId: number;
        readonly commandDescription: string;
        readonly commandStatus: string;
        readonly sequenceNumber: number;
    }) => void): this;
    on(event: "ReadyToSend", listener: (e: {}) => void): this;
    on(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    on(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    once(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "MessageIn", listener: (e: {
        readonly sourceAddress: string;
        readonly scheduleDeliveryTime: string;
        readonly validityPeriod: string;
        readonly message: string;
        readonly messagePart: number;
        readonly messagePartCount: number;
        readonly messagePartReference: number;
        readonly destinationAddress: string;
        responseErrorCode: number;
    }) => void): this;
    once(event: "MessageStatus", listener: (e: {
        readonly messageId: string;
        readonly messageState: number;
        readonly messageError: number;
        readonly finalDate: string;
    }) => void): this;
    once(event: "PITrail", listener: (e: {
        readonly direction: number;
        readonly PDU: string;
        readonly PDUB: Uint8Array;
        readonly commandLength: number;
        readonly commandId: number;
        readonly commandDescription: string;
        readonly commandStatus: string;
        readonly sequenceNumber: number;
    }) => void): this;
    once(event: "ReadyToSend", listener: (e: {}) => void): this;
    once(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    once(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    addListener(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "MessageIn", listener: (e: {
        readonly sourceAddress: string;
        readonly scheduleDeliveryTime: string;
        readonly validityPeriod: string;
        readonly message: string;
        readonly messagePart: number;
        readonly messagePartCount: number;
        readonly messagePartReference: number;
        readonly destinationAddress: string;
        responseErrorCode: number;
    }) => void): this;
    addListener(event: "MessageStatus", listener: (e: {
        readonly messageId: string;
        readonly messageState: number;
        readonly messageError: number;
        readonly finalDate: string;
    }) => void): this;
    addListener(event: "PITrail", listener: (e: {
        readonly direction: number;
        readonly PDU: string;
        readonly PDUB: Uint8Array;
        readonly commandLength: number;
        readonly commandId: number;
        readonly commandDescription: string;
        readonly commandStatus: string;
        readonly sequenceNumber: number;
    }) => void): this;
    addListener(event: "ReadyToSend", listener: (e: {}) => void): this;
    addListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    addListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    prependListener(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "MessageIn", listener: (e: {
        readonly sourceAddress: string;
        readonly scheduleDeliveryTime: string;
        readonly validityPeriod: string;
        readonly message: string;
        readonly messagePart: number;
        readonly messagePartCount: number;
        readonly messagePartReference: number;
        readonly destinationAddress: string;
        responseErrorCode: number;
    }) => void): this;
    prependListener(event: "MessageStatus", listener: (e: {
        readonly messageId: string;
        readonly messageState: number;
        readonly messageError: number;
        readonly finalDate: string;
    }) => void): this;
    prependListener(event: "PITrail", listener: (e: {
        readonly direction: number;
        readonly PDU: string;
        readonly PDUB: Uint8Array;
        readonly commandLength: number;
        readonly commandId: number;
        readonly commandDescription: string;
        readonly commandStatus: string;
        readonly sequenceNumber: number;
    }) => void): this;
    prependListener(event: "ReadyToSend", listener: (e: {}) => void): this;
    prependListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    prependListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    prependOnceListener(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "MessageIn", listener: (e: {
        readonly sourceAddress: string;
        readonly scheduleDeliveryTime: string;
        readonly validityPeriod: string;
        readonly message: string;
        readonly messagePart: number;
        readonly messagePartCount: number;
        readonly messagePartReference: number;
        readonly destinationAddress: string;
        responseErrorCode: number;
    }) => void): this;
    prependOnceListener(event: "MessageStatus", listener: (e: {
        readonly messageId: string;
        readonly messageState: number;
        readonly messageError: number;
        readonly finalDate: string;
    }) => void): this;
    prependOnceListener(event: "PITrail", listener: (e: {
        readonly direction: number;
        readonly PDU: string;
        readonly PDUB: Uint8Array;
        readonly commandLength: number;
        readonly commandId: number;
        readonly commandDescription: string;
        readonly commandStatus: string;
        readonly sequenceNumber: number;
    }) => void): this;
    prependOnceListener(event: "ReadyToSend", listener: (e: {}) => void): this;
    prependOnceListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    prependOnceListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    /**
     * This method will add a recipient of the specified type to the recipient list.
     */
    addRecipient(recipientType: number, recipientAddress: string): Promise<void>;
    /**
     * This method will cancel the specified message.
     */
    cancelMessage(messageId: string): Promise<void>;
    /**
     * This method will check the connection to the server.
     */
    checkLink(): Promise<void>;
    /**
     * This method will retrieve the status of the specified message.
     */
    checkMessageStatus(messageId: string): Promise<void>;
    /**
     * Sets or retrieves a configuration setting.
     */
    config(configurationString: string): Promise<string>;
    /**
     * This method will bind as a transceiver to the SMPP service.
     */
    connect(): Promise<void>;
    /**
     * This method will bind as a transceiver to the SMPP service.
     */
    connectTo(userId: string, password: string): Promise<void>;
    /**
     * This method will disconnect from the SMPP service.
     */
    disconnect(): Promise<void>;
    /**
     * This method processes events from the internal message queue.
     */
    doEvents(): Promise<void>;
    /**
     * This method interrupts the current method.
     */
    interrupt(): Promise<void>;
    /**
     * This method replaces a previously sent message with a new one.
     */
    replaceMessage(messageId: string, newMessage: string): Promise<void>;
    /**
     * This method will reset the class.
     */
    reset(): Promise<void>;
    /**
     * This method will format and send a protocol data unit (PDU) using the specified command identifier and payload.
     */
    sendCommand(commandId: number, payload: Uint8Array): Promise<Uint8Array>;
    /**
     * This method sends raw data to Recipients .
     */
    sendData(data: Uint8Array): Promise<string>;
    /**
     * This method sends a message to all recipients in the recipient list.
     */
    sendMessage(message: string): Promise<string>;
    /**
     * This property indicates whether the class is connected.
     */
    isConnected(): boolean;
    /**
     * A set of properties related to firewall access.
     */
    getFirewall(): Firewall;
    /**
     * A set of properties related to firewall access.
     */
    setFirewall(firewall: Firewall): void;
    /**
     * The current status of the class.
     */
    isIdle(): boolean;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    getLocalHost(): string;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    setLocalHost(localHost: string): void;
    /**
     * This property denotes the validity period of the current message.
     */
    getMessageExpiration(): string;
    /**
     * This property denotes the validity period of the current message.
     */
    setMessageExpiration(messageExpiration: string): void;
    /**
     * This property indicates the identifier of the most recently sent message.
     */
    getMessageId(): string;
    /**
     * This property indicates the priority level of the current message.
     */
    getMessagePriority(): SMPPMessagePriorities;
    /**
     * This property indicates the priority level of the current message.
     */
    setMessagePriority(messagePriority: SMPPMessagePriorities): void;
    /**
     * This property contains the user's password.
     */
    getPassword(): string;
    /**
     * This property contains the user's password.
     */
    setPassword(password: string): void;
    /**
     * This property defines the SMPP protocol to be used.
     */
    getProtocol(): SMPPProtocols;
    /**
     * This property defines the SMPP protocol to be used.
     */
    setProtocol(protocol: SMPPProtocols): void;
    getRecipients(): SMPPRecipientList;
    /**
     * This property tells the server when to deliver the current message.
     */
    getScheduledDelivery(): string;
    /**
     * This property tells the server when to deliver the current message.
     */
    setScheduledDelivery(scheduledDelivery: string): void;
    /**
     * This property contains the address of the External Short Messaging Entity (ESME).
     */
    getSenderAddress(): string;
    /**
     * This property contains the address of the External Short Messaging Entity (ESME).
     */
    setSenderAddress(senderAddress: string): void;
    /**
     * This property indicates the type of service for the current message.
     */
    getServiceType(): SMPPServiceTypes;
    /**
     * This property indicates the type of service for the current message.
     */
    setServiceType(serviceType: SMPPServiceTypes): void;
    /**
     * This property contains the server port for secure SMPP (default 2775).
     */
    getSMPPPort(): number;
    /**
     * This property contains the server port for secure SMPP (default 2775).
     */
    setSMPPPort(SMPPPort: number): void;
    /**
     * This property is the SMPP entity to which the class will connect.
     */
    getSMPPServer(): string;
    /**
     * This property is the SMPP entity to which the class will connect.
     */
    setSMPPServer(SMPPServer: string): void;
    /**
     * This property indicates the SMPP version to be used throughout the connection.
     */
    getSMPPVersion(): SMPPSMPPVersions;
    /**
     * This property indicates the SMPP version to be used throughout the connection.
     */
    setSMPPVersion(SMPPVersion: SMPPSMPPVersions): void;
    /**
     * Instructs the class to unconditionally accept the server certificate that matches the supplied certificate.
     */
    getSSLAcceptServerCert(): Certificate;
    /**
     * Instructs the class to unconditionally accept the server certificate that matches the supplied certificate.
     */
    setSSLAcceptServerCert(SSLAcceptServerCert: Certificate): void;
    /**
     * The certificate to be used during Secure Sockets Layer (SSL) negotiation.
     */
    getSSLCert(): Certificate;
    /**
     * The certificate to be used during Secure Sockets Layer (SSL) negotiation.
     */
    setSSLCert(SSLCert: Certificate): void;
    /**
     * This property indicates whether Transport Layer Security/Secure Sockets Layer (TLS/SSL) is enabled.
     */
    isSSLEnabled(): boolean;
    /**
     * This property indicates whether Transport Layer Security/Secure Sockets Layer (TLS/SSL) is enabled.
     */
    setSSLEnabled(SSLEnabled: boolean): void;
    /**
     * The Secure Sockets Layer/Transport Layer Security (SSL/TLS) implementation to use.
     */
    getSSLProvider(): SMPPSSLProviders;
    /**
     * The Secure Sockets Layer/Transport Layer Security (SSL/TLS) implementation to use.
     */
    setSSLProvider(SSLProvider: SMPPSSLProviders): void;
    /**
     * The server certificate for the last established connection.
     */
    getSSLServerCert(): Certificate;
    /**
     * This property determines how the class starts the Secure Sockets Layer (SSL) negotiation.
     */
    getSSLStartMode(): SMPPSSLStartModes;
    /**
     * This property determines how the class starts the Secure Sockets Layer (SSL) negotiation.
     */
    setSSLStartMode(SSLStartMode: SMPPSSLStartModes): void;
    /**
     * This property contains a string representing the type of system during a connection.
     */
    getSystemType(): string;
    /**
     * This property contains a string representing the type of system during a connection.
     */
    setSystemType(systemType: string): void;
    /**
     * The timeout for the class.
     */
    getTimeout(): number;
    /**
     * The timeout for the class.
     */
    setTimeout(timeout: number): void;
    /**
     * This property is used for identification with the SMPP service.
     */
    getUserId(): string;
    /**
     * This property is used for identification with the SMPP service.
     */
    setUserId(userId: string): void;
}
/************************************************** ENUMERATED TYPES **************************************************/
export declare enum SMTPAuthMechanisms {
    amUserPassword = 0,
    amCRAMMD5 = 1,
    amNTLM = 2,
    amAPOP = 3,
    amSASLPlain = 4,
    amSASLDigestMD5 = 5,
    amKerberos = 6,
    amXOAUTH2 = 7
}
export declare enum SMTPImportances {
    miUnspecified = 0,
    miHigh = 1,
    miNormal = 2,
    miLow = 3
}
export declare enum SMTPPriorities {
    epUnspecified = 0,
    epNormal = 1,
    epUrgent = 2,
    epNonUrgent = 3
}
export declare enum SMTPSensitivities {
    esUnspecified = 0,
    esPersonal = 1,
    esPrivate = 2,
    esCompanyConfidential = 3
}
export declare enum SMTPSSLProviders {
    sslpAutomatic = 0,
    sslpPlatform = 1,
    sslpInternal = 2
}
export declare enum SMTPSSLStartModes {
    sslAutomatic = 0,
    sslImplicit = 1,
    sslExplicit = 2,
    sslNone = 3
}
/**
 * The SMTP Component is used to send internet mail using the SMTP protocol
(the internet mail standard).
 */
export declare class smtp extends events.EventEmitter {
    private obj;
    constructor();
    about(): string;









    on(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    on(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "Expand", listener: (e: {
        readonly address: string;
    }) => void): this;
    on(event: "PITrail", listener: (e: {
        readonly direction: number;
        readonly message: string;
    }) => void): this;
    on(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    on(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    on(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    on(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    once(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    once(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "Expand", listener: (e: {
        readonly address: string;
    }) => void): this;
    once(event: "PITrail", listener: (e: {
        readonly direction: number;
        readonly message: string;
    }) => void): this;
    once(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    once(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    once(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    once(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    addListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    addListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "Expand", listener: (e: {
        readonly address: string;
    }) => void): this;
    addListener(event: "PITrail", listener: (e: {
        readonly direction: number;
        readonly message: string;
    }) => void): this;
    addListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    addListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    addListener(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    addListener(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    prependListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "Expand", listener: (e: {
        readonly address: string;
    }) => void): this;
    prependListener(event: "PITrail", listener: (e: {
        readonly direction: number;
        readonly message: string;
    }) => void): this;
    prependListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    prependListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    prependListener(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependListener(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    prependOnceListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependOnceListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "Expand", listener: (e: {
        readonly address: string;
    }) => void): this;
    prependOnceListener(event: "PITrail", listener: (e: {
        readonly direction: number;
        readonly message: string;
    }) => void): this;
    prependOnceListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    prependOnceListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    prependOnceListener(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependOnceListener(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    /**
     * Sets or retrieves a configuration setting.
     */
    config(configurationString: string): Promise<string>;
    /**
     * This method connects to the mail relay and sends the SMTP HELO command.
     */
    connect(): Promise<void>;
    /**
     * This method disconnects from the SMTP server.
     */
    disconnect(): Promise<void>;
    /**
     * This method processes events from the internal message queue.
     */
    doEvents(): Promise<void>;
    /**
     * This method asks the MailServer to expand a name or mailing list.
     */
    expand(emailAddress: string): Promise<void>;
    /**
     * This method interrupts the current method.
     */
    interrupt(): Promise<void>;
    /**
     * This method sends the messages that previously have been queued into QueueDir .
     */
    processQueue(queueDir: string): Promise<void>;
    /**
     * This method queues the message into QueueDir .
     */
    queue(queueDir: string): Promise<string>;
    /**
     * This method will reset the class.
     */
    reset(): Promise<void>;
    /**
     * This method resets all the message headers to empty.
     */
    resetHeaders(): Promise<void>;
    /**
     * This method sends the current message.
     */
    send(): Promise<void>;
    /**
     * This method sends the exact command directly to the server.
     */
    sendCommand(command: string): Promise<void>;
    /**
     * This method sends to terminal and email.
     */
    sendToTerminalAndEmail(): Promise<void>;
    /**
     * This method sends to terminal only.
     */
    sendToTerminalOnly(): Promise<void>;
    /**
     * This method sends to terminal or email.
     */
    sendToTerminalOrEmail(): Promise<void>;
    /**
     * This method sends a verification request to the SMTP server.
     */
    verify(emailAddress: string): Promise<void>;
    /**
     * This property is a switch allowing the class to use ESMTP features (Extended SMTP).
     */
    isAllowExtensions(): boolean;
    /**
     * This property is a switch allowing the class to use ESMTP features (Extended SMTP).
     */
    setAllowExtensions(allowExtensions: boolean): void;
    /**
     * This property is used when connecting to the mail server.
     */
    getAuthMechanism(): SMTPAuthMechanisms;
    /**
     * This property is used when connecting to the mail server.
     */
    setAuthMechanism(authMechanism: SMTPAuthMechanisms): void;
    /**
     * This property includes a comma-separated list of addresses for blind carbon copies (optional).
     */
    getBCc(): string;
    /**
     * This property includes a comma-separated list of addresses for blind carbon copies (optional).
     */
    setBCc(BCc: string): void;
    /**
     * This property includes a comma-separated list of addresses for carbon copies (optional).
     */
    getCc(): string;
    /**
     * This property includes a comma-separated list of addresses for carbon copies (optional).
     */
    setCc(cc: string): void;
    /**
     * Whether the class is connected.
     */
    isConnected(): boolean;
    /**
     * This property includes the email address to which to send a delivery notification.
     */
    getDeliveryNotificationTo(): string;
    /**
     * This property includes the email address to which to send a delivery notification.
     */
    setDeliveryNotificationTo(deliveryNotificationTo: string): void;
    /**
     * A set of properties related to firewall access.
     */
    getFirewall(): Firewall;
    /**
     * A set of properties related to firewall access.
     */
    setFirewall(firewall: Firewall): void;
    /**
     * This property includes the  email address of the sender (required).
     */
    getFrom(): string;
    /**
     * This property includes the  email address of the sender (required).
     */
    setFrom(from: string): void;
    /**
     * The current status of the class.
     */
    isIdle(): boolean;
    /**
     * This property indicates the importance of the mail message (optional).
     */
    getImportance(): SMTPImportances;
    /**
     * This property indicates the importance of the mail message (optional).
     */
    setImportance(importance: SMTPImportances): void;
    /**
     * This property indicates the last reply received from the server.
     */
    getLastReply(): string;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    getLocalHost(): string;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    setLocalHost(localHost: string): void;
    /**
     * This property includes the server port for SMTP (default 25).
     */
    getMailPort(): number;
    /**
     * This property includes the server port for SMTP (default 25).
     */
    setMailPort(mailPort: number): void;
    /**
     * This property includes the name or address of a mail server (mail relay).
     */
    getMailServer(): string;
    /**
     * This property includes the name or address of a mail server (mail relay).
     */
    setMailServer(mailServer: string): void;
    /**
     * This property provides a way to set the raw message content.
     */
    getMessage(): string;
    /**
     * This property provides a way to set the raw message content.
     */
    getMessageB(): Uint8Array;
    /**
     * This property provides a way to set the raw message content.
     */
    setMessage(data: Uint8Array | string): void;
    setMessage(data: Uint8Array, offset: number, length: number): void;
    /**
     * This property includes the date of the mail message (optional).
     */
    getMessageDate(): string;
    /**
     * This property includes the date of the mail message (optional).
     */
    setMessageDate(messageDate: string): void;
    getMessageHeaders(): HeaderList;
    /**
     * This property includes the string representation of RFC 822-encoded headers of the message.
     */
    getMessageHeadersString(): string;
    /**
     * This property includes the message identifier for the message.
     */
    getMessageId(): string;
    /**
     * This property includes the message identifier for the message.
     */
    setMessageId(messageId: string): void;
    getMessageRecipients(): MessageRecipientList;
    /**
     * This property includes the full text of the message to send (without headers).
     */
    getMessageText(): string;
    /**
     * This property includes the full text of the message to send (without headers).
     */
    setMessageText(messageText: string): void;
    /**
     * This property includes an RFC 822-compliant string consisting of extra headers.
     */
    getOtherHeaders(): string;
    /**
     * This property includes an RFC 822-compliant string consisting of extra headers.
     */
    setOtherHeaders(otherHeaders: string): void;
    /**
     * This property includes a password for logon to the MailServer .
     */
    getPassword(): string;
    /**
     * This property includes a password for logon to the MailServer .
     */
    setPassword(password: string): void;
    /**
     * This property includes the priority of the mail message (optional).
     */
    getPriority(): SMTPPriorities;
    /**
     * This property includes the priority of the mail message (optional).
     */
    setPriority(priority: SMTPPriorities): void;
    /**
     * This property includes the email address to send a read-receipt to.
     */
    getReadReceiptTo(): string;
    /**
     * This property includes the email address to send a read-receipt to.
     */
    setReadReceiptTo(readReceiptTo: string): void;
    /**
     * This property includes a mail address to which to reply (optional).
     */
    getReplyTo(): string;
    /**
     * This property includes a mail address to which to reply (optional).
     */
    setReplyTo(replyTo: string): void;
    /**
     * This property sets the Return-Path to be used for sending email.
     */
    getReturnPath(): string;
    /**
     * This property sets the Return-Path to be used for sending email.
     */
    setReturnPath(returnPath: string): void;
    /**
     * This property includes a comma-separated list of addresses for destinations (required).
     */
    getSendTo(): string;
    /**
     * This property includes a comma-separated list of addresses for destinations (required).
     */
    setSendTo(sendTo: string): void;
    /**
     * This property indicates the sensitivity of the mail message (optional).
     */
    getSensitivity(): SMTPSensitivities;
    /**
     * This property indicates the sensitivity of the mail message (optional).
     */
    setSensitivity(sensitivity: SMTPSensitivities): void;
    /**
     * Instructs the class to unconditionally accept the server certificate that matches the supplied certificate.
     */
    getSSLAcceptServerCert(): Certificate;
    /**
     * Instructs the class to unconditionally accept the server certificate that matches the supplied certificate.
     */
    setSSLAcceptServerCert(SSLAcceptServerCert: Certificate): void;
    /**
     * The certificate to be used during Secure Sockets Layer (SSL) negotiation.
     */
    getSSLCert(): Certificate;
    /**
     * The certificate to be used during Secure Sockets Layer (SSL) negotiation.
     */
    setSSLCert(SSLCert: Certificate): void;
    /**
     * This property indicates whether Transport Layer Security/Secure Sockets Layer (TLS/SSL) is enabled.
     */
    isSSLEnabled(): boolean;
    /**
     * This property indicates whether Transport Layer Security/Secure Sockets Layer (TLS/SSL) is enabled.
     */
    setSSLEnabled(SSLEnabled: boolean): void;
    /**
     * The Secure Sockets Layer/Transport Layer Security (SSL/TLS) implementation to use.
     */
    getSSLProvider(): SMTPSSLProviders;
    /**
     * The Secure Sockets Layer/Transport Layer Security (SSL/TLS) implementation to use.
     */
    setSSLProvider(SSLProvider: SMTPSSLProviders): void;
    /**
     * The server certificate for the last established connection.
     */
    getSSLServerCert(): Certificate;
    /**
     * This property determines how the class starts the Secure Sockets Layer (SSL) negotiation.
     */
    getSSLStartMode(): SMTPSSLStartModes;
    /**
     * This property determines how the class starts the Secure Sockets Layer (SSL) negotiation.
     */
    setSSLStartMode(SSLStartMode: SMTPSSLStartModes): void;
    /**
     * This property includes the subject of the mail message (optional).
     */
    getSubject(): string;
    /**
     * This property includes the subject of the mail message (optional).
     */
    setSubject(subject: string): void;
    /**
     * The timeout for the class.
     */
    getTimeout(): number;
    /**
     * The timeout for the class.
     */
    setTimeout(timeout: number): void;
    /**
     * This property includes the user identifier needed to log in as in the MailServer .
     */
    getUser(): string;
    /**
     * This property includes the user identifier needed to log in as in the MailServer .
     */
    setUser(user: string): void;
}
/************************************************** ENUMERATED TYPES **************************************************/
export declare enum SOAPAuthSchemes {
    authBasic = 0,
    authDigest = 1,
    authProprietary = 2,
    authNone = 3,
    authNtlm = 4,
    authNegotiate = 5,
    authOAuth = 6
}
export declare enum SOAPFollowRedirects {
    frNever = 0,
    frAlways = 1,
    frSameScheme = 2
}
export declare enum SOAPSSLProviders {
    sslpAutomatic = 0,
    sslpPlatform = 1,
    sslpInternal = 2
}
export declare enum SOAPValueFormats {
    vfText = 0,
    vfXML = 1,
    vfFullXML = 2
}
/**
 * The SOAP Component is a generic SOAP client supporting SOAP 1.1 that is
used to communicate with SOAP servers.
 */
export declare class soap extends events.EventEmitter {
    private obj;
    constructor();
    about(): string;














    on(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    on(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    on(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    on(event: "Redirect", listener: (e: {
        readonly location: string;
        accept: boolean;
    }) => void): this;
    on(event: "SetCookie", listener: (e: {
        readonly name: string;
        readonly value: string;
        readonly expires: string;
        readonly domain: string;
        readonly path: string;
        readonly secure: boolean;
    }) => void): this;
    on(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    on(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    on(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    on(event: "Status", listener: (e: {
        readonly HTTPVersion: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
    }) => void): this;
    once(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    once(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    once(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    once(event: "Redirect", listener: (e: {
        readonly location: string;
        accept: boolean;
    }) => void): this;
    once(event: "SetCookie", listener: (e: {
        readonly name: string;
        readonly value: string;
        readonly expires: string;
        readonly domain: string;
        readonly path: string;
        readonly secure: boolean;
    }) => void): this;
    once(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    once(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    once(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    once(event: "Status", listener: (e: {
        readonly HTTPVersion: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
    }) => void): this;
    addListener(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    addListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    addListener(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    addListener(event: "Redirect", listener: (e: {
        readonly location: string;
        accept: boolean;
    }) => void): this;
    addListener(event: "SetCookie", listener: (e: {
        readonly name: string;
        readonly value: string;
        readonly expires: string;
        readonly domain: string;
        readonly path: string;
        readonly secure: boolean;
    }) => void): this;
    addListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    addListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    addListener(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    addListener(event: "Status", listener: (e: {
        readonly HTTPVersion: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
    }) => void): this;
    prependListener(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    prependListener(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    prependListener(event: "Redirect", listener: (e: {
        readonly location: string;
        accept: boolean;
    }) => void): this;
    prependListener(event: "SetCookie", listener: (e: {
        readonly name: string;
        readonly value: string;
        readonly expires: string;
        readonly domain: string;
        readonly path: string;
        readonly secure: boolean;
    }) => void): this;
    prependListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    prependListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    prependListener(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependListener(event: "Status", listener: (e: {
        readonly HTTPVersion: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
    }) => void): this;
    prependOnceListener(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependOnceListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    prependOnceListener(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    prependOnceListener(event: "Redirect", listener: (e: {
        readonly location: string;
        accept: boolean;
    }) => void): this;
    prependOnceListener(event: "SetCookie", listener: (e: {
        readonly name: string;
        readonly value: string;
        readonly expires: string;
        readonly domain: string;
        readonly path: string;
        readonly secure: boolean;
    }) => void): this;
    prependOnceListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    prependOnceListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    prependOnceListener(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependOnceListener(event: "Status", listener: (e: {
        readonly HTTPVersion: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
    }) => void): this;
    /**
     * Adds a cookie and the corresponding value to the outgoing request headers.
     */
    addCookie(cookieName: string, cookieValue: string): Promise<void>;
    /**
     * This method adds a namespace to the Namespaces properties.
     */
    addNamespace(prefix: string, namespaceURI: string): Promise<void>;
    /**
     * This method adds a parameter-value pair.
     */
    addParam(paramName: string, paramValue: string): Promise<void>;
    /**
     * This method returns the value of the specified attribute.
     */
    attr(attrName: string): Promise<string>;
    /**
     * This method builds the request packet.
     */
    buildPacket(): Promise<void>;
    /**
     * Sets or retrieves a configuration setting.
     */
    config(configurationString: string): Promise<string>;
    /**
     * This method processes events from the internal message queue.
     */
    doEvents(): Promise<void>;
    /**
     * This method evaluates the packet in SOAPPacket .
     */
    evalPacket(): Promise<void>;
    /**
     * This method determines whether a specific element exists in the document.
     */
    hasXPath(XPath: string): Promise<boolean>;
    /**
     * This method interrupts the current method.
     */
    interrupt(): Promise<void>;
    /**
     * This method resets the class.
     */
    reset(): Promise<void>;
    /**
     * This method sends the packet.
     */
    sendPacket(): Promise<void>;
    /**
     * This method sends the request.
     */
    sendRequest(): Promise<void>;
    /**
     * This method navigates to the specified XPath if it exists.
     */
    tryXPath(xpath: string): Promise<boolean>;
    /**
     * This method returns the value of a parameter.
     */
    value(paramName: string): Promise<string>;
    /**
     * This property includes a list of acceptable MIME types for the request.
     */
    getAccept(): string;
    /**
     * This property includes a list of acceptable MIME types for the request.
     */
    setAccept(accept: string): void;
    /**
     * This property includes the value of the SOAP-action header.
     */
    getActionURI(): string;
    /**
     * This property includes the value of the SOAP-action header.
     */
    setActionURI(actionURI: string): void;
    /**
     * This property includes the Authorization string to be sent to the server.
     */
    getAuthorization(): string;
    /**
     * This property includes the Authorization string to be sent to the server.
     */
    setAuthorization(authorization: string): void;
    /**
     * This property specifies the authentication scheme to use when server authentication is required.
     */
    getAuthScheme(): SOAPAuthSchemes;
    /**
     * This property specifies the authentication scheme to use when server authentication is required.
     */
    setAuthScheme(authScheme: SOAPAuthSchemes): void;
    /**
     * Whether the class is connected.
     */
    isConnected(): boolean;
    /**
     * This property includes the content type for SOAP request data.
     */
    getContentType(): string;
    /**
     * This property includes the content type for SOAP request data.
     */
    setContentType(contentType: string): void;
    getCookies(): HTTPCookieList;
    /**
     * This property includes the actor of any faults returned by the SOAP server.
     */
    getFaultActor(): string;
    /**
     * This property includes the code of any faults returned by the SOAP server.
     */
    getFaultCode(): string;
    /**
     * This property includes the textual description of any faults returned by the SOAP server.
     */
    getFaultString(): string;
    /**
     * A set of properties related to firewall access.
     */
    getFirewall(): Firewall;
    /**
     * A set of properties related to firewall access.
     */
    setFirewall(firewall: Firewall): void;
    /**
     * Determines what happens when the server issues a redirect.
     */
    getFollowRedirects(): SOAPFollowRedirects;
    /**
     * Determines what happens when the server issues a redirect.
     */
    setFollowRedirects(followRedirects: SOAPFollowRedirects): void;
    /**
     * The current status of the class.
     */
    isIdle(): boolean;
    /**
     * This property includes a date determining the maximum age of the desired document.
     */
    getIfModifiedSince(): string;
    /**
     * This property includes a date determining the maximum age of the desired document.
     */
    setIfModifiedSince(ifModifiedSince: string): void;
    /**
     * This property includes the path to a local file for downloading. If the file exists, it is overwritten.
     */
    getLocalFile(): string;
    /**
     * This property includes the path to a local file for downloading. If the file exists, it is overwritten.
     */
    setLocalFile(localFile: string): void;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    getLocalHost(): string;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    setLocalHost(localHost: string): void;
    /**
     * This property includes the remote Method .
     */
    getMethod(): string;
    /**
     * This property includes the remote Method .
     */
    setMethod(method: string): void;
    /**
     * This property includes the URI corresponding to the SOAP Method .
     */
    getMethodURI(): string;
    /**
     * This property includes the URI corresponding to the SOAP Method .
     */
    setMethodURI(methodURI: string): void;
    getNamespaces(): XMLNamespaceList;
    /**
     * Other headers as determined by the user (optional).
     */
    getOtherHeaders(): string;
    /**
     * Other headers as determined by the user (optional).
     */
    setOtherHeaders(otherHeaders: string): void;
    getParams(): SOAPParamList;
    getParsedHeaders(): HeaderList;
    /**
     * This property includes a password if authentication is to be used.
     */
    getPassword(): string;
    /**
     * This property includes a password if authentication is to be used.
     */
    setPassword(password: string): void;
    /**
     * This property includes a browser- or server-specific header line (optional).
     */
    getPragma(): string;
    /**
     * This property includes a browser- or server-specific header line (optional).
     */
    setPragma(pragma: string): void;
    /**
     * A set of properties related to proxy access.
     */
    getProxy(): Proxy;
    /**
     * A set of properties related to proxy access.
     */
    setProxy(proxy: Proxy): void;
    /**
     * This property includes the referer URL/document (optional).
     */
    getReferer(): string;
    /**
     * This property includes the referer URL/document (optional).
     */
    setReferer(referer: string): void;
    /**
     * This property includes the value returned by the SOAP Method .
     */
    getReturnValue(): string;
    /**
     * This property includes the type of SOAP encoding used for SOAP requests.
     */
    getSOAPEncoding(): string;
    /**
     * This property includes the type of SOAP encoding used for SOAP requests.
     */
    setSOAPEncoding(SOAPEncoding: string): void;
    /**
     * This property includes the contents of the optional SOAP header sent to the server.
     */
    getSOAPHeader(): string;
    /**
     * This property includes the contents of the optional SOAP header sent to the server.
     */
    setSOAPHeader(SOAPHeader: string): void;
    /**
     * This property includes the full contents of the SOAP packet.
     */
    getSOAPPacket(): string;
    /**
     * This property includes the full contents of the SOAP packet.
     */
    setSOAPPacket(SOAPPacket: string): void;
    /**
     * Instructs the class to unconditionally accept the server certificate that matches the supplied certificate.
     */
    getSSLAcceptServerCert(): Certificate;
    /**
     * Instructs the class to unconditionally accept the server certificate that matches the supplied certificate.
     */
    setSSLAcceptServerCert(SSLAcceptServerCert: Certificate): void;
    /**
     * The certificate to be used during Secure Sockets Layer (SSL) negotiation.
     */
    getSSLCert(): Certificate;
    /**
     * The certificate to be used during Secure Sockets Layer (SSL) negotiation.
     */
    setSSLCert(SSLCert: Certificate): void;
    /**
     * The Secure Sockets Layer/Transport Layer Security (SSL/TLS) implementation to use.
     */
    getSSLProvider(): SOAPSSLProviders;
    /**
     * The Secure Sockets Layer/Transport Layer Security (SSL/TLS) implementation to use.
     */
    setSSLProvider(SSLProvider: SOAPSSLProviders): void;
    /**
     * The server certificate for the last established connection.
     */
    getSSLServerCert(): Certificate;
    /**
     * This property is the first line of the last server response.
     */
    getStatusLine(): string;
    /**
     * The timeout for the class.
     */
    getTimeout(): number;
    /**
     * The timeout for the class.
     */
    setTimeout(timeout: number): void;
    /**
     * This property includes the contents of the last response from the server.
     */
    getTransferredData(): string;
    /**
     * This property includes the contents of the last response from the server.
     */
    getTransferredDataB(): Uint8Array;
    /**
     * This property specifies the maximum amount of data to be transferred.
     */
    getTransferredDataLimit(): number;
    /**
     * This property specifies the maximum amount of data to be transferred.
     */
    setTransferredDataLimit(transferredDataLimit: number): void;
    /**
     * The full set of headers as received from the server.
     */
    getTransferredHeaders(): string;
    /**
     * This property specifies the URL to retrieve.
     */
    getURL(): string;
    /**
     * This property specifies the URL to retrieve.
     */
    setURL(URL: string): void;
    /**
     * This property includes a user name if authentication is to be used.
     */
    getUser(): string;
    /**
     * This property includes a user name if authentication is to be used.
     */
    setUser(user: string): void;
    /**
     * This property includes the format of data returned or set.
     */
    getValueFormat(): SOAPValueFormats;
    /**
     * This property includes the format of data returned or set.
     */
    setValueFormat(valueFormat: SOAPValueFormats): void;
    getXAttributes(): XMLAttributeList;
    getXChildren(): XMLElementList;
    /**
     * This property includes the name of the element pointed to by XPath .
     */
    getXElement(): string;
    /**
     * This property includes the namespace of the element pointed to by XPath .
     */
    getXNamespace(): string;
    /**
     * This property includes the parent of the element pointed to by XPath .
     */
    getXParent(): string;
    /**
     * This property includes a path into the SOAPPacket received by the server.
     */
    getXPath(): string;
    /**
     * This property includes a path into the SOAPPacket received by the server.
     */
    setXPath(XPath: string): void;
    /**
     * This property includes the prefix of the element pointed to by XPath .
     */
    getXPrefix(): string;
    /**
     * This property includes the text of the element pointed to by XPath .
     */
    getXText(): string;
}
/************************************************** ENUMERATED TYPES **************************************************/
/**
 * The Syslog component is used to send and receive network system log packets.
 */
export declare class syslog extends events.EventEmitter {
    private obj;
    constructor();
    about(): string;








    on(event: "Connected", listener: (e: {
        readonly remoteAddress: string;
        readonly remotePort: number;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "Disconnected", listener: (e: {
        readonly remoteAddress: string;
        readonly remotePort: number;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "PacketIn", listener: (e: {
        readonly facilityCode: number;
        readonly facility: string;
        readonly severityCode: number;
        readonly severity: string;
        readonly timestamp: string;
        readonly hostname: string;
        readonly message: string;
        readonly conforms: boolean;
        readonly packet: string;
        readonly packetB: Uint8Array;
        readonly sourceAddress: string;
        readonly sourcePort: number;
    }) => void): this;
    on(event: "SSLClientAuthentication", listener: (e: {
        readonly remoteAddress: string;
        readonly remotePort: number;
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    on(event: "SSLServerAuthentication", listener: (e: {
        readonly remoteAddress: string;
        readonly remotePort: number;
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    on(event: "SSLStatus", listener: (e: {
        readonly remoteAddress: string;
        readonly remotePort: number;
        readonly message: string;
    }) => void): this;
    once(event: "Connected", listener: (e: {
        readonly remoteAddress: string;
        readonly remotePort: number;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "Disconnected", listener: (e: {
        readonly remoteAddress: string;
        readonly remotePort: number;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "PacketIn", listener: (e: {
        readonly facilityCode: number;
        readonly facility: string;
        readonly severityCode: number;
        readonly severity: string;
        readonly timestamp: string;
        readonly hostname: string;
        readonly message: string;
        readonly conforms: boolean;
        readonly packet: string;
        readonly packetB: Uint8Array;
        readonly sourceAddress: string;
        readonly sourcePort: number;
    }) => void): this;
    once(event: "SSLClientAuthentication", listener: (e: {
        readonly remoteAddress: string;
        readonly remotePort: number;
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    once(event: "SSLServerAuthentication", listener: (e: {
        readonly remoteAddress: string;
        readonly remotePort: number;
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    once(event: "SSLStatus", listener: (e: {
        readonly remoteAddress: string;
        readonly remotePort: number;
        readonly message: string;
    }) => void): this;
    addListener(event: "Connected", listener: (e: {
        readonly remoteAddress: string;
        readonly remotePort: number;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "Disconnected", listener: (e: {
        readonly remoteAddress: string;
        readonly remotePort: number;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "PacketIn", listener: (e: {
        readonly facilityCode: number;
        readonly facility: string;
        readonly severityCode: number;
        readonly severity: string;
        readonly timestamp: string;
        readonly hostname: string;
        readonly message: string;
        readonly conforms: boolean;
        readonly packet: string;
        readonly packetB: Uint8Array;
        readonly sourceAddress: string;
        readonly sourcePort: number;
    }) => void): this;
    addListener(event: "SSLClientAuthentication", listener: (e: {
        readonly remoteAddress: string;
        readonly remotePort: number;
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    addListener(event: "SSLServerAuthentication", listener: (e: {
        readonly remoteAddress: string;
        readonly remotePort: number;
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    addListener(event: "SSLStatus", listener: (e: {
        readonly remoteAddress: string;
        readonly remotePort: number;
        readonly message: string;
    }) => void): this;
    prependListener(event: "Connected", listener: (e: {
        readonly remoteAddress: string;
        readonly remotePort: number;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "Disconnected", listener: (e: {
        readonly remoteAddress: string;
        readonly remotePort: number;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "PacketIn", listener: (e: {
        readonly facilityCode: number;
        readonly facility: string;
        readonly severityCode: number;
        readonly severity: string;
        readonly timestamp: string;
        readonly hostname: string;
        readonly message: string;
        readonly conforms: boolean;
        readonly packet: string;
        readonly packetB: Uint8Array;
        readonly sourceAddress: string;
        readonly sourcePort: number;
    }) => void): this;
    prependListener(event: "SSLClientAuthentication", listener: (e: {
        readonly remoteAddress: string;
        readonly remotePort: number;
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    prependListener(event: "SSLServerAuthentication", listener: (e: {
        readonly remoteAddress: string;
        readonly remotePort: number;
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    prependListener(event: "SSLStatus", listener: (e: {
        readonly remoteAddress: string;
        readonly remotePort: number;
        readonly message: string;
    }) => void): this;
    prependOnceListener(event: "Connected", listener: (e: {
        readonly remoteAddress: string;
        readonly remotePort: number;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "Disconnected", listener: (e: {
        readonly remoteAddress: string;
        readonly remotePort: number;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "PacketIn", listener: (e: {
        readonly facilityCode: number;
        readonly facility: string;
        readonly severityCode: number;
        readonly severity: string;
        readonly timestamp: string;
        readonly hostname: string;
        readonly message: string;
        readonly conforms: boolean;
        readonly packet: string;
        readonly packetB: Uint8Array;
        readonly sourceAddress: string;
        readonly sourcePort: number;
    }) => void): this;
    prependOnceListener(event: "SSLClientAuthentication", listener: (e: {
        readonly remoteAddress: string;
        readonly remotePort: number;
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    prependOnceListener(event: "SSLServerAuthentication", listener: (e: {
        readonly remoteAddress: string;
        readonly remotePort: number;
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    prependOnceListener(event: "SSLStatus", listener: (e: {
        readonly remoteAddress: string;
        readonly remotePort: number;
        readonly message: string;
    }) => void): this;
    /**
     * This method enables sending and receiving of data.
     */
    activate(): Promise<void>;
    /**
     * Sets or retrieves a configuration setting.
     */
    config(configurationString: string): Promise<string>;
    /**
     * This method disables sending and receive of data.
     */
    deactivate(): Promise<void>;
    /**
     * This method processes events from the internal message queue.
     */
    doEvents(): Promise<void>;
    /**
     * This method will reset the class.
     */
    reset(): Promise<void>;
    /**
     * This method resolves the hostname in RemoteHost to an IP address.
     */
    resolveRemoteHost(): Promise<void>;
    /**
     * This method sends a log packet to RemoteHost .
     */
    sendPacket(facility: number, severity: number, message: string): Promise<void>;
    /**
     * This property indicates whether the class is active.
     */
    isActive(): boolean;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    getLocalHost(): string;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    setLocalHost(localHost: string): void;
    /**
     * This property indicates the port in the local host where Syslog binds.
     */
    getLocalPort(): number;
    /**
     * This property indicates the port in the local host where Syslog binds.
     */
    setLocalPort(localPort: number): void;
    /**
     * This property sets a specific host for outgoing log packets.
     */
    getRemoteHost(): string;
    /**
     * This property sets a specific host for outgoing log packets.
     */
    setRemoteHost(remoteHost: string): void;
    /**
     * This property sets a specific port for outgoing log packets.
     */
    getRemotePort(): number;
    /**
     * This property sets a specific port for outgoing log packets.
     */
    setRemotePort(remotePort: number): void;
    /**
     * Instructs the class to unconditionally accept the server certificate that matches the supplied certificate.
     */
    getSSLAcceptServerCert(): Certificate;
    /**
     * Instructs the class to unconditionally accept the server certificate that matches the supplied certificate.
     */
    setSSLAcceptServerCert(SSLAcceptServerCert: Certificate): void;
    /**
     * If set to True, the server asks the client(s) for a certificate.
     */
    isSSLAuthenticateClients(): boolean;
    /**
     * If set to True, the server asks the client(s) for a certificate.
     */
    setSSLAuthenticateClients(SSLAuthenticateClients: boolean): void;
    /**
     * The certificate to be used during Secure Sockets Layer (SSL) negotiation.
     */
    getSSLCert(): Certificate;
    /**
     * The certificate to be used during Secure Sockets Layer (SSL) negotiation.
     */
    setSSLCert(SSLCert: Certificate): void;
    /**
     * This property indicates whether Secure Sockets Layer/Transport Layer Security (TLS/SSL) is enabled.
     */
    isSSLEnabled(): boolean;
    /**
     * This property indicates whether Secure Sockets Layer/Transport Layer Security (TLS/SSL) is enabled.
     */
    setSSLEnabled(SSLEnabled: boolean): void;
    /**
     * The server certificate for the last established connection.
     */
    getSSLServerCert(): Certificate;
    /**
     * This property specifies whether Transmission Control Protocol (TCP) is used.
     */
    isUseTCP(): boolean;
    /**
     * This property specifies whether Transmission Control Protocol (TCP) is used.
     */
    setUseTCP(useTCP: boolean): void;
}
/************************************************** ENUMERATED TYPES **************************************************/
export declare enum TCPClientSSLProviders {
    sslpAutomatic = 0,
    sslpPlatform = 1,
    sslpInternal = 2
}
export declare enum TCPClientSSLStartModes {
    sslAutomatic = 0,
    sslImplicit = 1,
    sslExplicit = 2,
    sslNone = 3
}
/**
 * The TCPClient Component is a generic Transmission Control Protocol (TCP) stream client based on an asynchronous, event-driven architecture.
 */
export declare class tcpclient extends events.EventEmitter {
    private obj;
    constructor();
    about(): string;








    on(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "DataIn", listener: (e: {
        readonly text: string;
        readonly textB: Uint8Array;
        readonly EOL: boolean;
    }) => void): this;
    on(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "ReadyToSend", listener: (e: {}) => void): this;
    on(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    on(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    once(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "DataIn", listener: (e: {
        readonly text: string;
        readonly textB: Uint8Array;
        readonly EOL: boolean;
    }) => void): this;
    once(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "ReadyToSend", listener: (e: {}) => void): this;
    once(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    once(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    addListener(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "DataIn", listener: (e: {
        readonly text: string;
        readonly textB: Uint8Array;
        readonly EOL: boolean;
    }) => void): this;
    addListener(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "ReadyToSend", listener: (e: {}) => void): this;
    addListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    addListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    prependListener(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "DataIn", listener: (e: {
        readonly text: string;
        readonly textB: Uint8Array;
        readonly EOL: boolean;
    }) => void): this;
    prependListener(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "ReadyToSend", listener: (e: {}) => void): this;
    prependListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    prependListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    prependOnceListener(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "DataIn", listener: (e: {
        readonly text: string;
        readonly textB: Uint8Array;
        readonly EOL: boolean;
    }) => void): this;
    prependOnceListener(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "ReadyToSend", listener: (e: {}) => void): this;
    prependOnceListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    prependOnceListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    /**
     * This method changes the length of received data records.
     */
    changeRecordLength(recordLength: number): Promise<void>;
    /**
     * Sets or retrieves a configuration setting.
     */
    config(configurationString: string): Promise<string>;
    /**
     * This method connects to a remote host.
     */
    connect(): Promise<void>;
    /**
     * This method connects to a remote host.
     */
    connectTo(host: string, port: number): Promise<void>;
    /**
     * This method disconnects from the remote host.
     */
    disconnect(): Promise<void>;
    /**
     * This method processes events from the internal message queue.
     */
    doEvents(): Promise<void>;
    /**
     * This method gets a line of text from the server.
     */
    getLine(): Promise<string>;
    /**
     * This method interrupts the current action.
     */
    interrupt(): Promise<void>;
    /**
     * This method pauses data reception.
     */
    pauseData(): Promise<void>;
    /**
     * This method reenables data reception after a call to PauseData .
     */
    processData(): Promise<void>;
    /**
     * This method will reset the class.
     */
    reset(): Promise<void>;
    /**
     * This method sends binary data to the remote host.
     */
    send(text: Uint8Array): Promise<void>;
    /**
     * This method sends binary data to the remote host.
     */
    sendBytes(data: Uint8Array): Promise<void>;
    sendBytes(data: Uint8Array, offset: number, lenData: number): Promise<void>;
    /**
     * This method sends a file to the remote host.
     */
    sendFile(fileName: string): Promise<void>;
    /**
     * This method sends a string followed by a newline.
     */
    sendLine(text: string): Promise<void>;
    /**
     * This method sends text to the remote host.
     */
    sendText(text: string): Promise<void>;
    /**
     * This method starts Secure Sockets Layer (SSL) negotiation on a plaintext connection.
     */
    startSSL(): Promise<void>;
    /**
     * This property indicates whether data reception is currently enabled.
     */
    isAcceptData(): boolean;
    /**
     * This property includes the number of bytes actually sent after a call to the SendBytes method.
     */
    getBytesSent(): number;
    /**
     * This property indicates whether the class is connected.
     */
    isConnected(): boolean;
    /**
     * This property is used to break the incoming data stream into chunks separated by EOL .
     */
    getEOL(): string;
    /**
     * This property is used to break the incoming data stream into chunks separated by EOL .
     */
    getEOLB(): Uint8Array;
    /**
     * This property is used to break the incoming data stream into chunks separated by EOL .
     */
    setEOL(data: Uint8Array | string): void;
    setEOL(data: Uint8Array, offset: number, length: number): void;
    /**
     * A set of properties related to firewall access.
     */
    getFirewall(): Firewall;
    /**
     * A set of properties related to firewall access.
     */
    setFirewall(firewall: Firewall): void;
    /**
     * When True, KEEPALIVE packets are enabled (for long connections).
     */
    isKeepAlive(): boolean;
    /**
     * When True, KEEPALIVE packets are enabled (for long connections).
     */
    setKeepAlive(keepAlive: boolean): void;
    /**
     * When set to True, this property ensures that connections are terminated gracefully.
     */
    isLinger(): boolean;
    /**
     * When set to True, this property ensures that connections are terminated gracefully.
     */
    setLinger(linger: boolean): void;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    getLocalHost(): string;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    setLocalHost(localHost: string): void;
    /**
     * The TCP port in the local host where the class binds.
     */
    getLocalPort(): number;
    /**
     * The TCP port in the local host where the class binds.
     */
    setLocalPort(localPort: number): void;
    /**
     * This property indicates whether the class is ready to send data.
     */
    isReadyToSend(): boolean;
    /**
     * This property indicates the length of received data records.
     */
    getRecordLength(): number;
    /**
     * This property includes the address of the remote host. Domain names are resolved to IP addresses.
     */
    getRemoteHost(): string;
    /**
     * This property includes the address of the remote host. Domain names are resolved to IP addresses.
     */
    setRemoteHost(remoteHost: string): void;
    /**
     * This property includes the Transmission Control Protocol (TCP) port in the remote host.
     */
    getRemotePort(): number;
    /**
     * This property includes the Transmission Control Protocol (TCP) port in the remote host.
     */
    setRemotePort(remotePort: number): void;
    /**
     * This property includes a special mode for line-oriented protocols.
     */
    isSingleLineMode(): boolean;
    /**
     * This property includes a special mode for line-oriented protocols.
     */
    setSingleLineMode(singleLineMode: boolean): void;
    /**
     * Instructs the class to unconditionally accept the server certificate that matches the supplied certificate.
     */
    getSSLAcceptServerCert(): Certificate;
    /**
     * Instructs the class to unconditionally accept the server certificate that matches the supplied certificate.
     */
    setSSLAcceptServerCert(SSLAcceptServerCert: Certificate): void;
    /**
     * The certificate to be used during Secure Sockets Layer (SSL) negotiation.
     */
    getSSLCert(): Certificate;
    /**
     * The certificate to be used during Secure Sockets Layer (SSL) negotiation.
     */
    setSSLCert(SSLCert: Certificate): void;
    /**
     * This property indicates whether Transport Layer Security/Secure Sockets Layer (TLS/SSL) is enabled.
     */
    isSSLEnabled(): boolean;
    /**
     * This property indicates whether Transport Layer Security/Secure Sockets Layer (TLS/SSL) is enabled.
     */
    setSSLEnabled(SSLEnabled: boolean): void;
    /**
     * The Secure Sockets Layer/Transport Layer Security (SSL/TLS) implementation to use.
     */
    getSSLProvider(): TCPClientSSLProviders;
    /**
     * The Secure Sockets Layer/Transport Layer Security (SSL/TLS) implementation to use.
     */
    setSSLProvider(SSLProvider: TCPClientSSLProviders): void;
    /**
     * The server certificate for the last established connection.
     */
    getSSLServerCert(): Certificate;
    /**
     * This property determines how the class starts the Secure Sockets Layer (SSL) negotiation.
     */
    getSSLStartMode(): TCPClientSSLStartModes;
    /**
     * This property determines how the class starts the Secure Sockets Layer (SSL) negotiation.
     */
    setSSLStartMode(SSLStartMode: TCPClientSSLStartModes): void;
    /**
     * This property includes the timeout for the class.
     */
    getTimeout(): number;
    /**
     * This property includes the timeout for the class.
     */
    setTimeout(timeout: number): void;
}
/************************************************** ENUMERATED TYPES **************************************************/
export declare enum TCPServerSSLProviders {
    sslpAutomatic = 0,
    sslpPlatform = 1,
    sslpInternal = 2
}
export declare enum TCPServerSSLStartModes {
    sslAutomatic = 0,
    sslImplicit = 1,
    sslExplicit = 2,
    sslNone = 3
}
/**
 * The TCPServer Component is a generic Transmission Control Protocol (TCP) server component based on
an asynchronous, event-driven architecture. It is designed to balance the load between connections for a fast, powerful server.
 */
export declare class tcpserver extends events.EventEmitter {
    private obj;
    constructor();
    about(): string;









    on(event: "Connected", listener: (e: {
        readonly connectionId: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "ConnectionRequest", listener: (e: {
        readonly address: string;
        readonly port: number;
        accept: boolean;
    }) => void): this;
    on(event: "DataIn", listener: (e: {
        readonly connectionId: string;
        readonly text: string;
        readonly textB: Uint8Array;
        readonly EOL: boolean;
    }) => void): this;
    on(event: "Disconnected", listener: (e: {
        readonly connectionId: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "Error", listener: (e: {
        readonly connectionId: string;
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "ReadyToSend", listener: (e: {
        readonly connectionId: string;
    }) => void): this;
    on(event: "SSLClientAuthentication", listener: (e: {
        readonly connectionId: string;
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    on(event: "SSLConnectionRequest", listener: (e: {
        readonly connectionId: string;
        readonly supportedCipherSuites: string;
        readonly supportedSignatureAlgs: string;
        certStoreType: number;
        certStore: string;
        certPassword: string;
        certSubject: string;
    }) => void): this;
    on(event: "SSLStatus", listener: (e: {
        readonly connectionId: string;
        readonly message: string;
    }) => void): this;
    once(event: "Connected", listener: (e: {
        readonly connectionId: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "ConnectionRequest", listener: (e: {
        readonly address: string;
        readonly port: number;
        accept: boolean;
    }) => void): this;
    once(event: "DataIn", listener: (e: {
        readonly connectionId: string;
        readonly text: string;
        readonly textB: Uint8Array;
        readonly EOL: boolean;
    }) => void): this;
    once(event: "Disconnected", listener: (e: {
        readonly connectionId: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "Error", listener: (e: {
        readonly connectionId: string;
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "ReadyToSend", listener: (e: {
        readonly connectionId: string;
    }) => void): this;
    once(event: "SSLClientAuthentication", listener: (e: {
        readonly connectionId: string;
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    once(event: "SSLConnectionRequest", listener: (e: {
        readonly connectionId: string;
        readonly supportedCipherSuites: string;
        readonly supportedSignatureAlgs: string;
        certStoreType: number;
        certStore: string;
        certPassword: string;
        certSubject: string;
    }) => void): this;
    once(event: "SSLStatus", listener: (e: {
        readonly connectionId: string;
        readonly message: string;
    }) => void): this;
    addListener(event: "Connected", listener: (e: {
        readonly connectionId: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "ConnectionRequest", listener: (e: {
        readonly address: string;
        readonly port: number;
        accept: boolean;
    }) => void): this;
    addListener(event: "DataIn", listener: (e: {
        readonly connectionId: string;
        readonly text: string;
        readonly textB: Uint8Array;
        readonly EOL: boolean;
    }) => void): this;
    addListener(event: "Disconnected", listener: (e: {
        readonly connectionId: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "Error", listener: (e: {
        readonly connectionId: string;
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "ReadyToSend", listener: (e: {
        readonly connectionId: string;
    }) => void): this;
    addListener(event: "SSLClientAuthentication", listener: (e: {
        readonly connectionId: string;
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    addListener(event: "SSLConnectionRequest", listener: (e: {
        readonly connectionId: string;
        readonly supportedCipherSuites: string;
        readonly supportedSignatureAlgs: string;
        certStoreType: number;
        certStore: string;
        certPassword: string;
        certSubject: string;
    }) => void): this;
    addListener(event: "SSLStatus", listener: (e: {
        readonly connectionId: string;
        readonly message: string;
    }) => void): this;
    prependListener(event: "Connected", listener: (e: {
        readonly connectionId: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "ConnectionRequest", listener: (e: {
        readonly address: string;
        readonly port: number;
        accept: boolean;
    }) => void): this;
    prependListener(event: "DataIn", listener: (e: {
        readonly connectionId: string;
        readonly text: string;
        readonly textB: Uint8Array;
        readonly EOL: boolean;
    }) => void): this;
    prependListener(event: "Disconnected", listener: (e: {
        readonly connectionId: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "Error", listener: (e: {
        readonly connectionId: string;
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "ReadyToSend", listener: (e: {
        readonly connectionId: string;
    }) => void): this;
    prependListener(event: "SSLClientAuthentication", listener: (e: {
        readonly connectionId: string;
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    prependListener(event: "SSLConnectionRequest", listener: (e: {
        readonly connectionId: string;
        readonly supportedCipherSuites: string;
        readonly supportedSignatureAlgs: string;
        certStoreType: number;
        certStore: string;
        certPassword: string;
        certSubject: string;
    }) => void): this;
    prependListener(event: "SSLStatus", listener: (e: {
        readonly connectionId: string;
        readonly message: string;
    }) => void): this;
    prependOnceListener(event: "Connected", listener: (e: {
        readonly connectionId: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "ConnectionRequest", listener: (e: {
        readonly address: string;
        readonly port: number;
        accept: boolean;
    }) => void): this;
    prependOnceListener(event: "DataIn", listener: (e: {
        readonly connectionId: string;
        readonly text: string;
        readonly textB: Uint8Array;
        readonly EOL: boolean;
    }) => void): this;
    prependOnceListener(event: "Disconnected", listener: (e: {
        readonly connectionId: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "Error", listener: (e: {
        readonly connectionId: string;
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "ReadyToSend", listener: (e: {
        readonly connectionId: string;
    }) => void): this;
    prependOnceListener(event: "SSLClientAuthentication", listener: (e: {
        readonly connectionId: string;
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    prependOnceListener(event: "SSLConnectionRequest", listener: (e: {
        readonly connectionId: string;
        readonly supportedCipherSuites: string;
        readonly supportedSignatureAlgs: string;
        certStoreType: number;
        certStore: string;
        certPassword: string;
        certSubject: string;
    }) => void): this;
    prependOnceListener(event: "SSLStatus", listener: (e: {
        readonly connectionId: string;
        readonly message: string;
    }) => void): this;
    /**
     * This method changes the length of received data records.
     */
    changeRecordLength(connectionId: string, recordLength: number): Promise<void>;
    /**
     * Sets or retrieves a configuration setting.
     */
    config(configurationString: string): Promise<string>;
    /**
     * This method disconnects the specified client.
     */
    disconnect(connectionId: string): Promise<void>;
    /**
     * This method processes events from the internal message queue.
     */
    doEvents(): Promise<void>;
    /**
     * This method interrupts a synchronous send to the remote host.
     */
    interrupt(connectionId: string): Promise<void>;
    /**
     * This method pauses data reception.
     */
    pauseData(connectionId: string): Promise<void>;
    /**
     * This method reenables data reception after a call to PauseData .
     */
    processData(connectionId: string): Promise<void>;
    /**
     * This method will reset the class.
     */
    reset(): Promise<void>;
    /**
     * This method sends binary data to the specified client.
     */
    send(connectionId: string, text: Uint8Array): Promise<void>;
    /**
     * This method sends binary data to the specified client.
     */
    sendBytes(connectionId: string, data: Uint8Array): Promise<void>;
    sendBytes(connectionId: string, data: Uint8Array, offset: number, lenData: number): Promise<void>;
    /**
     * This method sends the file to the remote host.
     */
    sendFile(connectionId: string, fileName: string): Promise<void>;
    /**
     * This method sends a string followed by a new line.
     */
    sendLine(connectionId: string, text: string): Promise<void>;
    /**
     * This method sends text to the specified client.
     */
    sendText(connectionId: string, text: string): Promise<void>;
    /**
     * This method shuts down the server.
     */
    shutdown(): Promise<void>;
    /**
     * This method starts listening for incoming connections.
     */
    startListening(): Promise<void>;
    /**
     * This method starts the Secure Sockets Layer (SSL) negotiation on a connection.
     */
    startSSL(connectionId: string): Promise<void>;
    /**
     * This method stops listening for new connections.
     */
    stopListening(): Promise<void>;
    /**
     * This property includes the maximum number of pending connections maintained by the Transmission Control Protocol (TCP)/IP subsystem.
     */
    getConnectionBacklog(): number;
    /**
     * This property includes the maximum number of pending connections maintained by the Transmission Control Protocol (TCP)/IP subsystem.
     */
    setConnectionBacklog(connectionBacklog: number): void;
    getConnections(): ConnectionMap;
    /**
     * This property includes a default end-of-line (EOL) value to be used by incoming connections.
     */
    getDefaultEOL(): string;
    /**
     * This property includes a default end-of-line (EOL) value to be used by incoming connections.
     */
    getDefaultEOLB(): Uint8Array;
    /**
     * This property includes a default end-of-line (EOL) value to be used by incoming connections.
     */
    setDefaultEOL(data: Uint8Array | string): void;
    setDefaultEOL(data: Uint8Array, offset: number, length: number): void;
    /**
     * This property includes the default idle timeout for inactive clients.
     */
    getDefaultIdleTimeout(): number;
    /**
     * This property includes the default idle timeout for inactive clients.
     */
    setDefaultIdleTimeout(defaultIdleTimeout: number): void;
    /**
     * The property includes the default maximum line length value for inbound connections.
     */
    getDefaultMaxLineLength(): number;
    /**
     * The property includes the default maximum line length value for inbound connections.
     */
    setDefaultMaxLineLength(defaultMaxLineLength: number): void;
    /**
     * This property tells the class whether or not to treat new connections as line oriented.
     */
    isDefaultSingleLineMode(): boolean;
    /**
     * This property tells the class whether or not to treat new connections as line oriented.
     */
    setDefaultSingleLineMode(defaultSingleLineMode: boolean): void;
    /**
     * This property includes an initial timeout value to be used by incoming connections.
     */
    getDefaultTimeout(): number;
    /**
     * This property includes an initial timeout value to be used by incoming connections.
     */
    setDefaultTimeout(defaultTimeout: number): void;
    /**
     * When True, KEEPALIVE packets are enabled (for long connections).
     */
    isKeepAlive(): boolean;
    /**
     * When True, KEEPALIVE packets are enabled (for long connections).
     */
    setKeepAlive(keepAlive: boolean): void;
    /**
     * When set to True, connections are terminated gracefully.
     */
    isLinger(): boolean;
    /**
     * When set to True, connections are terminated gracefully.
     */
    setLinger(linger: boolean): void;
    /**
     * This property indicates whether the class is listening for incoming connections on LocalPort.
     */
    isListening(): boolean;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    getLocalHost(): string;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    setLocalHost(localHost: string): void;
    /**
     * This property includes the Transmission Control Protocol (TCP) port in the local host where the class listens.
     */
    getLocalPort(): number;
    /**
     * This property includes the Transmission Control Protocol (TCP) port in the local host where the class listens.
     */
    setLocalPort(localPort: number): void;
    /**
     * If set to True, the server asks the client(s) for a certificate.
     */
    isSSLAuthenticateClients(): boolean;
    /**
     * If set to True, the server asks the client(s) for a certificate.
     */
    setSSLAuthenticateClients(SSLAuthenticateClients: boolean): void;
    /**
     * The certificate to be used during Secure Sockets Layer (SSL) negotiation.
     */
    getSSLCert(): Certificate;
    /**
     * The certificate to be used during Secure Sockets Layer (SSL) negotiation.
     */
    setSSLCert(SSLCert: Certificate): void;
    /**
     * This property indicates whether Transport Layer Security/Secure Sockets Layer (TLS/SSL) is enabled.
     */
    isSSLEnabled(): boolean;
    /**
     * This property indicates whether Transport Layer Security/Secure Sockets Layer (TLS/SSL) is enabled.
     */
    setSSLEnabled(SSLEnabled: boolean): void;
    /**
     * The Secure Sockets Layer/Transport Layer Security (SSL/TLS) implementation to use.
     */
    getSSLProvider(): TCPServerSSLProviders;
    /**
     * The Secure Sockets Layer/Transport Layer Security (SSL/TLS) implementation to use.
     */
    setSSLProvider(SSLProvider: TCPServerSSLProviders): void;
    /**
     * This property determines how the class starts the Secure Sockets Layer (SSL) negotiation.
     */
    getSSLStartMode(): TCPServerSSLStartModes;
    /**
     * This property determines how the class starts the Secure Sockets Layer (SSL) negotiation.
     */
    setSSLStartMode(SSLStartMode: TCPServerSSLStartModes): void;
}
/************************************************** ENUMERATED TYPES **************************************************/
export declare enum TelnetSSLProviders {
    sslpAutomatic = 0,
    sslpPlatform = 1,
    sslpInternal = 2
}
export declare enum TelnetSSLStartModes {
    sslAutomatic = 0,
    sslImplicit = 1,
    sslExplicit = 2,
    sslNone = 3
}
/**
 * The Telnet Component is used to communicate with servers implementing the
TELNET protocol.
 */
export declare class telnet extends events.EventEmitter {
    private obj;
    constructor();
    about(): string;














    on(event: "Command", listener: (e: {
        readonly commandCode: number;
    }) => void): this;
    on(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "DataIn", listener: (e: {
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    on(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "Do", listener: (e: {
        readonly optionCode: number;
    }) => void): this;
    on(event: "Dont", listener: (e: {
        readonly optionCode: number;
    }) => void): this;
    on(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "ReadyToSend", listener: (e: {}) => void): this;
    on(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    on(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    on(event: "SubOption", listener: (e: {
        readonly subOption: string;
        readonly subOptionB: Uint8Array;
    }) => void): this;
    on(event: "Will", listener: (e: {
        readonly optionCode: number;
    }) => void): this;
    on(event: "Wont", listener: (e: {
        readonly optionCode: number;
    }) => void): this;
    once(event: "Command", listener: (e: {
        readonly commandCode: number;
    }) => void): this;
    once(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "DataIn", listener: (e: {
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    once(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "Do", listener: (e: {
        readonly optionCode: number;
    }) => void): this;
    once(event: "Dont", listener: (e: {
        readonly optionCode: number;
    }) => void): this;
    once(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "ReadyToSend", listener: (e: {}) => void): this;
    once(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    once(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    once(event: "SubOption", listener: (e: {
        readonly subOption: string;
        readonly subOptionB: Uint8Array;
    }) => void): this;
    once(event: "Will", listener: (e: {
        readonly optionCode: number;
    }) => void): this;
    once(event: "Wont", listener: (e: {
        readonly optionCode: number;
    }) => void): this;
    addListener(event: "Command", listener: (e: {
        readonly commandCode: number;
    }) => void): this;
    addListener(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "DataIn", listener: (e: {
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    addListener(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "Do", listener: (e: {
        readonly optionCode: number;
    }) => void): this;
    addListener(event: "Dont", listener: (e: {
        readonly optionCode: number;
    }) => void): this;
    addListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "ReadyToSend", listener: (e: {}) => void): this;
    addListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    addListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    addListener(event: "SubOption", listener: (e: {
        readonly subOption: string;
        readonly subOptionB: Uint8Array;
    }) => void): this;
    addListener(event: "Will", listener: (e: {
        readonly optionCode: number;
    }) => void): this;
    addListener(event: "Wont", listener: (e: {
        readonly optionCode: number;
    }) => void): this;
    prependListener(event: "Command", listener: (e: {
        readonly commandCode: number;
    }) => void): this;
    prependListener(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "DataIn", listener: (e: {
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    prependListener(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "Do", listener: (e: {
        readonly optionCode: number;
    }) => void): this;
    prependListener(event: "Dont", listener: (e: {
        readonly optionCode: number;
    }) => void): this;
    prependListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "ReadyToSend", listener: (e: {}) => void): this;
    prependListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    prependListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    prependListener(event: "SubOption", listener: (e: {
        readonly subOption: string;
        readonly subOptionB: Uint8Array;
    }) => void): this;
    prependListener(event: "Will", listener: (e: {
        readonly optionCode: number;
    }) => void): this;
    prependListener(event: "Wont", listener: (e: {
        readonly optionCode: number;
    }) => void): this;
    prependOnceListener(event: "Command", listener: (e: {
        readonly commandCode: number;
    }) => void): this;
    prependOnceListener(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "DataIn", listener: (e: {
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    prependOnceListener(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "Do", listener: (e: {
        readonly optionCode: number;
    }) => void): this;
    prependOnceListener(event: "Dont", listener: (e: {
        readonly optionCode: number;
    }) => void): this;
    prependOnceListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "ReadyToSend", listener: (e: {}) => void): this;
    prependOnceListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    prependOnceListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    prependOnceListener(event: "SubOption", listener: (e: {
        readonly subOption: string;
        readonly subOptionB: Uint8Array;
    }) => void): this;
    prependOnceListener(event: "Will", listener: (e: {
        readonly optionCode: number;
    }) => void): this;
    prependOnceListener(event: "Wont", listener: (e: {
        readonly optionCode: number;
    }) => void): this;
    /**
     * Sets or retrieves a configuration setting.
     */
    config(configurationString: string): Promise<string>;
    /**
     * This method connects to a remote host.
     */
    connect(): Promise<void>;
    /**
     * This method connects to a remote host.
     */
    connectTo(host: string): Promise<void>;
    /**
     * This method disconnects from the remote host.
     */
    disconnect(): Promise<void>;
    /**
     * This method processes events from the internal message queue.
     */
    doEvents(): Promise<void>;
    /**
     * This method pauses data reception.
     */
    pauseData(): Promise<void>;
    /**
     * This method reenables data reception after a call to PauseData .
     */
    processData(): Promise<void>;
    /**
     * This method will reset the class.
     */
    reset(): Promise<void>;
    /**
     * This method sends binary data to the remote host.
     */
    send(text: Uint8Array): Promise<void>;
    /**
     * This method sends binary data to the remote host.
     */
    sendBytes(data: Uint8Array): Promise<void>;
    sendBytes(data: Uint8Array, offset: number, lenData: number): Promise<void>;
    /**
     * This method sends a single-character Telnet command code to the server.
     */
    sendCommand(command: number): Promise<void>;
    /**
     * This method sends a single-character Telnet option code to the server with the Telnet DONT command.
     */
    sendDontOption(dontOption: number): Promise<void>;
    /**
     * This method sends a single-character Telnet option code to the server with the Telnet DO command.
     */
    sendDoOption(doOption: number): Promise<void>;
    /**
     * This methods sends a Telnet SubOption to send to the server with the SubOption command.
     */
    sendDoSubOption(doSubOption: Uint8Array): Promise<void>;
    /**
     * This method sends text to the remote host.
     */
    sendText(text: string): Promise<void>;
    /**
     * This method urgently sends binary data to the remote host.
     */
    sendUrgentBytes(urgentBytes: Uint8Array): Promise<void>;
    sendUrgentBytes(urgentBytes: Uint8Array, offset: number, lenUrgentBytes: number): Promise<void>;
    /**
     * This method urgently sends text to the remote host.
     */
    sendUrgentText(urgentText: string): Promise<void>;
    /**
     * This method sends a single-character Telnet option code the server with the Telnet WILL command.
     */
    sendWillOption(willOption: number): Promise<void>;
    /**
     * This method sends a single-character Telnet option code to the server with the Telnet WONT command.
     */
    sendWontOption(wontOption: number): Promise<void>;
    /**
     * This property indicates whether data reception is currently enabled.
     */
    isAcceptData(): boolean;
    /**
     * This property includes the number of bytes actually sent after a call to the SendBytes method.
     */
    getBytesSent(): number;
    /**
     * This property indicates whether the class is connected.
     */
    isConnected(): boolean;
    /**
     * A set of properties related to firewall access.
     */
    getFirewall(): Firewall;
    /**
     * A set of properties related to firewall access.
     */
    setFirewall(firewall: Firewall): void;
    /**
     * When True, KEEPALIVE packets are enabled (for long connections).
     */
    isKeepAlive(): boolean;
    /**
     * When True, KEEPALIVE packets are enabled (for long connections).
     */
    setKeepAlive(keepAlive: boolean): void;
    /**
     * When set to True, this property ensures that connections are terminated gracefully.
     */
    isLinger(): boolean;
    /**
     * When set to True, this property ensures that connections are terminated gracefully.
     */
    setLinger(linger: boolean): void;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    getLocalHost(): string;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    setLocalHost(localHost: string): void;
    /**
     * This property includes the Transmission Control Protocol (TCP) port in the local host where the TCPClient binds.
     */
    getLocalPort(): number;
    /**
     * This property includes the Transmission Control Protocol (TCP) port in the local host where the TCPClient binds.
     */
    setLocalPort(localPort: number): void;
    /**
     * This property includes the address of the remote host. Domain names are resolved to IP addresses.
     */
    getRemoteHost(): string;
    /**
     * This property includes the address of the remote host. Domain names are resolved to IP addresses.
     */
    setRemoteHost(remoteHost: string): void;
    /**
     * This property includes the secure Telnet port in the remote host (default is 23).
     */
    getRemotePort(): number;
    /**
     * This property includes the secure Telnet port in the remote host (default is 23).
     */
    setRemotePort(remotePort: number): void;
    /**
     * Instructs the class to unconditionally accept the server certificate that matches the supplied certificate.
     */
    getSSLAcceptServerCert(): Certificate;
    /**
     * Instructs the class to unconditionally accept the server certificate that matches the supplied certificate.
     */
    setSSLAcceptServerCert(SSLAcceptServerCert: Certificate): void;
    /**
     * The certificate to be used during Secure Sockets Layer (SSL) negotiation.
     */
    getSSLCert(): Certificate;
    /**
     * The certificate to be used during Secure Sockets Layer (SSL) negotiation.
     */
    setSSLCert(SSLCert: Certificate): void;
    /**
     * This property indicates whether Transport Layer Security/Secure Sockets Layer (TLS/SSL) is enabled.
     */
    isSSLEnabled(): boolean;
    /**
     * This property indicates whether Transport Layer Security/Secure Sockets Layer (TLS/SSL) is enabled.
     */
    setSSLEnabled(SSLEnabled: boolean): void;
    /**
     * The Secure Sockets Layer/Transport Layer Security (SSL/TLS) implementation to use.
     */
    getSSLProvider(): TelnetSSLProviders;
    /**
     * The Secure Sockets Layer/Transport Layer Security (SSL/TLS) implementation to use.
     */
    setSSLProvider(SSLProvider: TelnetSSLProviders): void;
    /**
     * The server certificate for the last established connection.
     */
    getSSLServerCert(): Certificate;
    /**
     * This property determines how the class starts the Secure Sockets Layer (SSL) negotiation.
     */
    getSSLStartMode(): TelnetSSLStartModes;
    /**
     * This property determines how the class starts the Secure Sockets Layer (SSL) negotiation.
     */
    setSSLStartMode(SSLStartMode: TelnetSSLStartModes): void;
    /**
     * This property specifies the timeout for the class.
     */
    getTimeout(): number;
    /**
     * This property specifies the timeout for the class.
     */
    setTimeout(timeout: number): void;
    /**
     * When this property is True, Telnet command processing is disabled.
     */
    isTransparent(): boolean;
    /**
     * When this property is True, Telnet command processing is disabled.
     */
    setTransparent(transparent: boolean): void;
}
/************************************************** ENUMERATED TYPES **************************************************/
/**
 * The TFTPClient component is used to exchange files
with TFTP servers via the TFTP protocol defined in RFC 783.
 */
export declare class tftpclient extends events.EventEmitter {
    private obj;
    constructor();
    about(): string;




    on(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    on(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    on(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    once(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    once(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    once(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    addListener(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    addListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    addListener(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    prependListener(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependListener(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    prependOnceListener(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependOnceListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependOnceListener(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    /**
     * Sets or retrieves a configuration setting.
     */
    config(configurationString: string): Promise<string>;
    /**
     * This method processes events from the internal message queue.
     */
    doEvents(): Promise<void>;
    /**
     * This method downloads a RemoteFile from the TFTP server.
     */
    getFile(): Promise<void>;
    /**
     * This method interrupts the current method.
     */
    interrupt(): Promise<void>;
    /**
     * This method uploads a file specified by LocalFile to the TFTP server.
     */
    putFile(): Promise<void>;
    /**
     * This method resets the class.
     */
    reset(): Promise<void>;
    /**
     * The current status of the class.
     */
    isIdle(): boolean;
    /**
     * This property includes a file on the local host to transfer the data to or from.
     */
    getLocalFile(): string;
    /**
     * This property includes a file on the local host to transfer the data to or from.
     */
    setLocalFile(localFile: string): void;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    getLocalHost(): string;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    setLocalHost(localHost: string): void;
    /**
     * This property specifies the number of times to retry sending a failed packet before disconnecting.
     */
    getMaxRetransmits(): number;
    /**
     * This property specifies the number of times to retry sending a failed packet before disconnecting.
     */
    setMaxRetransmits(maxRetransmits: number): void;
    /**
     * This property includes the file on the remote host.
     */
    getRemoteFile(): string;
    /**
     * This property includes the file on the remote host.
     */
    setRemoteFile(remoteFile: string): void;
    /**
     * This property includes the maximum time in seconds to wait for a reply packet from the server before retransmitting the last packet.
     */
    getRetransmitTimeout(): number;
    /**
     * This property includes the maximum time in seconds to wait for a reply packet from the server before retransmitting the last packet.
     */
    setRetransmitTimeout(retransmitTimeout: number): void;
    /**
     * This property specifies the User Datagram Protocol (UDP) port where the remote TFTP server is listening.
     */
    getTFTPPort(): number;
    /**
     * This property specifies the User Datagram Protocol (UDP) port where the remote TFTP server is listening.
     */
    setTFTPPort(TFTPPort: number): void;
    /**
     * This property includes the address of the TFTP server to exchange files with.
     */
    getTFTPServer(): string;
    /**
     * This property includes the address of the TFTP server to exchange files with.
     */
    setTFTPServer(TFTPServer: string): void;
    /**
     * The timeout for the class.
     */
    getTimeout(): number;
    /**
     * The timeout for the class.
     */
    setTimeout(timeout: number): void;
}
/************************************************** ENUMERATED TYPES **************************************************/
/**
 * The TFTP Server Component is used to create a TFTP Server.
 */
export declare class tftpserver extends events.EventEmitter {
    private obj;
    constructor();
    about(): string;








    on(event: "Connected", listener: (e: {
        readonly connectionId: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "ConnectionRequest", listener: (e: {
        readonly remoteHost: string;
        readonly remotePort: number;
        readonly fileName: string;
        readonly transferMode: string;
        readonly operation: number;
        accept: boolean;
    }) => void): this;
    on(event: "Disconnected", listener: (e: {
        readonly connectionId: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "EndTransfer", listener: (e: {
        readonly connectionId: string;
        readonly direction: number;
    }) => void): this;
    on(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "Log", listener: (e: {
        readonly connectionId: string;
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    on(event: "StartTransfer", listener: (e: {
        readonly connectionId: string;
        readonly direction: number;
    }) => void): this;
    on(event: "Transfer", listener: (e: {
        readonly connectionId: string;
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    once(event: "Connected", listener: (e: {
        readonly connectionId: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "ConnectionRequest", listener: (e: {
        readonly remoteHost: string;
        readonly remotePort: number;
        readonly fileName: string;
        readonly transferMode: string;
        readonly operation: number;
        accept: boolean;
    }) => void): this;
    once(event: "Disconnected", listener: (e: {
        readonly connectionId: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "EndTransfer", listener: (e: {
        readonly connectionId: string;
        readonly direction: number;
    }) => void): this;
    once(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "Log", listener: (e: {
        readonly connectionId: string;
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    once(event: "StartTransfer", listener: (e: {
        readonly connectionId: string;
        readonly direction: number;
    }) => void): this;
    once(event: "Transfer", listener: (e: {
        readonly connectionId: string;
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    addListener(event: "Connected", listener: (e: {
        readonly connectionId: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "ConnectionRequest", listener: (e: {
        readonly remoteHost: string;
        readonly remotePort: number;
        readonly fileName: string;
        readonly transferMode: string;
        readonly operation: number;
        accept: boolean;
    }) => void): this;
    addListener(event: "Disconnected", listener: (e: {
        readonly connectionId: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "EndTransfer", listener: (e: {
        readonly connectionId: string;
        readonly direction: number;
    }) => void): this;
    addListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "Log", listener: (e: {
        readonly connectionId: string;
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    addListener(event: "StartTransfer", listener: (e: {
        readonly connectionId: string;
        readonly direction: number;
    }) => void): this;
    addListener(event: "Transfer", listener: (e: {
        readonly connectionId: string;
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    prependListener(event: "Connected", listener: (e: {
        readonly connectionId: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "ConnectionRequest", listener: (e: {
        readonly remoteHost: string;
        readonly remotePort: number;
        readonly fileName: string;
        readonly transferMode: string;
        readonly operation: number;
        accept: boolean;
    }) => void): this;
    prependListener(event: "Disconnected", listener: (e: {
        readonly connectionId: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "EndTransfer", listener: (e: {
        readonly connectionId: string;
        readonly direction: number;
    }) => void): this;
    prependListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "Log", listener: (e: {
        readonly connectionId: string;
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    prependListener(event: "StartTransfer", listener: (e: {
        readonly connectionId: string;
        readonly direction: number;
    }) => void): this;
    prependListener(event: "Transfer", listener: (e: {
        readonly connectionId: string;
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    prependOnceListener(event: "Connected", listener: (e: {
        readonly connectionId: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "ConnectionRequest", listener: (e: {
        readonly remoteHost: string;
        readonly remotePort: number;
        readonly fileName: string;
        readonly transferMode: string;
        readonly operation: number;
        accept: boolean;
    }) => void): this;
    prependOnceListener(event: "Disconnected", listener: (e: {
        readonly connectionId: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "EndTransfer", listener: (e: {
        readonly connectionId: string;
        readonly direction: number;
    }) => void): this;
    prependOnceListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "Log", listener: (e: {
        readonly connectionId: string;
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    prependOnceListener(event: "StartTransfer", listener: (e: {
        readonly connectionId: string;
        readonly direction: number;
    }) => void): this;
    prependOnceListener(event: "Transfer", listener: (e: {
        readonly connectionId: string;
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    /**
     * Sets or retrieves a configuration setting.
     */
    config(configurationString: string): Promise<string>;
    /**
     * This method processes events from the internal message queue.
     */
    doEvents(): Promise<void>;
    /**
     * This method starts listening for incoming connections.
     */
    startListening(): Promise<void>;
    /**
     * This method stops listening for new connections.
     */
    stopListening(): Promise<void>;
    getConnections(): TFTPConnectionMap;
    /**
     * This property indicates whether the class is listening for incoming connections on LocalPort.
     */
    isListening(): boolean;
    /**
     * This property defines the local file directory for the server.
     */
    getLocalDir(): string;
    /**
     * This property defines the local file directory for the server.
     */
    setLocalDir(localDir: string): void;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    getLocalHost(): string;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    setLocalHost(localHost: string): void;
    /**
     * This property includes the port that the server will listen on.
     */
    getLocalPort(): number;
    /**
     * This property includes the port that the server will listen on.
     */
    setLocalPort(localPort: number): void;
    /**
     * This property specifies the number of times to retry sending a failed packet before disconnecting.
     */
    getMaxRetransmits(): number;
    /**
     * This property specifies the number of times to retry sending a failed packet before disconnecting.
     */
    setMaxRetransmits(maxRetransmits: number): void;
    /**
     * This property includes the maximum time in seconds to wait for a reply packet from the server before retransmitting the last packet.
     */
    getRetransmitTimeout(): number;
    /**
     * This property includes the maximum time in seconds to wait for a reply packet from the server before retransmitting the last packet.
     */
    setRetransmitTimeout(retransmitTimeout: number): void;
}
/************************************************** ENUMERATED TYPES **************************************************/
/**
 * The User Datagram Protocol (UDP) component is used to facilitate UDP (datagram) communications.
It can act both as a client and a server and communicate with any number of hosts
simultaneously, as well as generate and receive broadcast packets.
 */
export declare class udp extends events.EventEmitter {
    private obj;
    constructor();
    about(): string;



    on(event: "DataIn", listener: (e: {
        readonly datagram: string;
        readonly datagramB: Uint8Array;
        readonly sourceAddress: string;
        readonly sourcePort: number;
    }) => void): this;
    on(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "ReadyToSend", listener: (e: {}) => void): this;
    once(event: "DataIn", listener: (e: {
        readonly datagram: string;
        readonly datagramB: Uint8Array;
        readonly sourceAddress: string;
        readonly sourcePort: number;
    }) => void): this;
    once(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "ReadyToSend", listener: (e: {}) => void): this;
    addListener(event: "DataIn", listener: (e: {
        readonly datagram: string;
        readonly datagramB: Uint8Array;
        readonly sourceAddress: string;
        readonly sourcePort: number;
    }) => void): this;
    addListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "ReadyToSend", listener: (e: {}) => void): this;
    prependListener(event: "DataIn", listener: (e: {
        readonly datagram: string;
        readonly datagramB: Uint8Array;
        readonly sourceAddress: string;
        readonly sourcePort: number;
    }) => void): this;
    prependListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "ReadyToSend", listener: (e: {}) => void): this;
    prependOnceListener(event: "DataIn", listener: (e: {
        readonly datagram: string;
        readonly datagramB: Uint8Array;
        readonly sourceAddress: string;
        readonly sourcePort: number;
    }) => void): this;
    prependOnceListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "ReadyToSend", listener: (e: {}) => void): this;
    /**
     * This method enables sending and receiving of data.
     */
    activate(): Promise<void>;
    /**
     * Sets or retrieves a configuration setting.
     */
    config(configurationString: string): Promise<string>;
    /**
     * This method disables sending and receive of data.
     */
    deactivate(): Promise<void>;
    /**
     * This method processes events from the internal message queue.
     */
    doEvents(): Promise<void>;
    /**
     * This method pauses data reception.
     */
    pauseData(): Promise<void>;
    /**
     * This method reenables data reception after a call to PauseData .
     */
    processData(): Promise<void>;
    /**
     * This method will reset the class.
     */
    reset(): Promise<void>;
    /**
     * This method resolves the hostname in RemoteHost to an IP address.
     */
    resolveRemoteHost(): Promise<void>;
    /**
     * This method sends binary data to the remote host.
     */
    send(text: Uint8Array): Promise<void>;
    /**
     * This method sends binary data to the remote host.
     */
    sendBytes(data: Uint8Array): Promise<void>;
    sendBytes(data: Uint8Array, offset: number, lenData: number): Promise<void>;
    /**
     * This method sends text to the remote host.
     */
    sendText(text: string): Promise<void>;
    /**
     * This property indicates whether data reception is currently enabled.
     */
    isAcceptData(): boolean;
    /**
     * This property indicates whether the class is active.
     */
    isActive(): boolean;
    /**
     * If this property is set to True, it forces the socket to send data directly to the interface (no routing).
     */
    isDontRoute(): boolean;
    /**
     * If this property is set to True, it forces the socket to send data directly to the interface (no routing).
     */
    setDontRoute(dontRoute: boolean): void;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    getLocalHost(): string;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    setLocalHost(localHost: string): void;
    /**
     * This property includes the User Datagram Protocol (UDP) port in the local host where UDP binds.
     */
    getLocalPort(): number;
    /**
     * This property includes the User Datagram Protocol (UDP) port in the local host where UDP binds.
     */
    setLocalPort(localPort: number): void;
    /**
     * This property includes the address of the remote host. Domain names are resolved to IP addresses.
     */
    getRemoteHost(): string;
    /**
     * This property includes the address of the remote host. Domain names are resolved to IP addresses.
     */
    setRemoteHost(remoteHost: string): void;
    /**
     * This property specifies the User Datagram Protocol (UDP) port in the remote host.
     */
    getRemotePort(): number;
    /**
     * This property specifies the User Datagram Protocol (UDP) port in the remote host.
     */
    setRemotePort(remotePort: number): void;
    /**
     * This property specifies the maximum number of subnets that a datagram can traverse.
     */
    getTimeToLive(): number;
    /**
     * This property specifies the maximum number of subnets that a datagram can traverse.
     */
    setTimeToLive(timeToLive: number): void;
}
/************************************************** ENUMERATED TYPES **************************************************/
export declare enum WebDAVAuthSchemes {
    authBasic = 0,
    authDigest = 1,
    authProprietary = 2,
    authNone = 3,
    authNtlm = 4,
    authNegotiate = 5,
    authOAuth = 6
}
export declare enum WebDAVDepths {
    dpUnspecified = 0,
    dpResourceOnly = 1,
    dpImmediateChildren = 2,
    dpInfinity = 3
}
export declare enum WebDAVFollowRedirects {
    frNever = 0,
    frAlways = 1,
    frSameScheme = 2
}
export declare enum WebDAVSSLProviders {
    sslpAutomatic = 0,
    sslpPlatform = 1,
    sslpInternal = 2
}
/**
 * The WebDAV Component implements an easy-to-use interface to the Web
Distributed Authoring and Versioning (WebDAV) protocol.
 */
export declare class webdav extends events.EventEmitter {
    private obj;
    constructor();
    about(): string;
















    on(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "DirList", listener: (e: {
        readonly resourceURI: string;
        readonly displayName: string;
        readonly contentLanguage: string;
        readonly contentLength: number;
        readonly contentType: string;
        readonly lastModified: string;
    }) => void): this;
    on(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    on(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    on(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    on(event: "Redirect", listener: (e: {
        readonly location: string;
        accept: boolean;
    }) => void): this;
    on(event: "ResourceProperties", listener: (e: {
        readonly resourceURI: string;
        readonly resourceProperties: string;
    }) => void): this;
    on(event: "SetCookie", listener: (e: {
        readonly name: string;
        readonly value: string;
        readonly expires: string;
        readonly domain: string;
        readonly path: string;
        readonly secure: boolean;
    }) => void): this;
    on(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    on(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    on(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    on(event: "Status", listener: (e: {
        readonly HTTPVersion: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    once(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "DirList", listener: (e: {
        readonly resourceURI: string;
        readonly displayName: string;
        readonly contentLanguage: string;
        readonly contentLength: number;
        readonly contentType: string;
        readonly lastModified: string;
    }) => void): this;
    once(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    once(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    once(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    once(event: "Redirect", listener: (e: {
        readonly location: string;
        accept: boolean;
    }) => void): this;
    once(event: "ResourceProperties", listener: (e: {
        readonly resourceURI: string;
        readonly resourceProperties: string;
    }) => void): this;
    once(event: "SetCookie", listener: (e: {
        readonly name: string;
        readonly value: string;
        readonly expires: string;
        readonly domain: string;
        readonly path: string;
        readonly secure: boolean;
    }) => void): this;
    once(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    once(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    once(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    once(event: "Status", listener: (e: {
        readonly HTTPVersion: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    addListener(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "DirList", listener: (e: {
        readonly resourceURI: string;
        readonly displayName: string;
        readonly contentLanguage: string;
        readonly contentLength: number;
        readonly contentType: string;
        readonly lastModified: string;
    }) => void): this;
    addListener(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    addListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    addListener(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    addListener(event: "Redirect", listener: (e: {
        readonly location: string;
        accept: boolean;
    }) => void): this;
    addListener(event: "ResourceProperties", listener: (e: {
        readonly resourceURI: string;
        readonly resourceProperties: string;
    }) => void): this;
    addListener(event: "SetCookie", listener: (e: {
        readonly name: string;
        readonly value: string;
        readonly expires: string;
        readonly domain: string;
        readonly path: string;
        readonly secure: boolean;
    }) => void): this;
    addListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    addListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    addListener(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    addListener(event: "Status", listener: (e: {
        readonly HTTPVersion: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    prependListener(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "DirList", listener: (e: {
        readonly resourceURI: string;
        readonly displayName: string;
        readonly contentLanguage: string;
        readonly contentLength: number;
        readonly contentType: string;
        readonly lastModified: string;
    }) => void): this;
    prependListener(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    prependListener(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    prependListener(event: "Redirect", listener: (e: {
        readonly location: string;
        accept: boolean;
    }) => void): this;
    prependListener(event: "ResourceProperties", listener: (e: {
        readonly resourceURI: string;
        readonly resourceProperties: string;
    }) => void): this;
    prependListener(event: "SetCookie", listener: (e: {
        readonly name: string;
        readonly value: string;
        readonly expires: string;
        readonly domain: string;
        readonly path: string;
        readonly secure: boolean;
    }) => void): this;
    prependListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    prependListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    prependListener(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependListener(event: "Status", listener: (e: {
        readonly HTTPVersion: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    prependOnceListener(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "DirList", listener: (e: {
        readonly resourceURI: string;
        readonly displayName: string;
        readonly contentLanguage: string;
        readonly contentLength: number;
        readonly contentType: string;
        readonly lastModified: string;
    }) => void): this;
    prependOnceListener(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependOnceListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    prependOnceListener(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    prependOnceListener(event: "Redirect", listener: (e: {
        readonly location: string;
        accept: boolean;
    }) => void): this;
    prependOnceListener(event: "ResourceProperties", listener: (e: {
        readonly resourceURI: string;
        readonly resourceProperties: string;
    }) => void): this;
    prependOnceListener(event: "SetCookie", listener: (e: {
        readonly name: string;
        readonly value: string;
        readonly expires: string;
        readonly domain: string;
        readonly path: string;
        readonly secure: boolean;
    }) => void): this;
    prependOnceListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    prependOnceListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    prependOnceListener(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependOnceListener(event: "Status", listener: (e: {
        readonly HTTPVersion: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    /**
     * Adds a cookie and the corresponding value to the outgoing request headers.
     */
    addCookie(cookieName: string, cookieValue: string): Promise<void>;
    /**
     * This method adds a namespace to the Namespaces properties.
     */
    addNamespace(prefix: string, namespaceURI: string): Promise<void>;
    /**
     * Checks if a file exists in the specified URI.
     */
    checkFileExists(resourceURI: string): Promise<boolean>;
    /**
     * Sets or retrieves a configuration setting.
     */
    config(configurationString: string): Promise<string>;
    /**
     * This method copies a resource to a new location.
     */
    copyResource(sourceResourceURI: string, destinationResourceURI: string): Promise<void>;
    /**
     * This method deletes a resource.
     */
    deleteResource(resourceURI: string): Promise<void>;
    /**
     * This method processes events from the internal message queue.
     */
    doEvents(): Promise<void>;
    /**
     * This method is used to get resource property values from the server.
     */
    findProperties(resourceURI: string): Promise<void>;
    /**
     * This method is used to get resource property names from the server.
     */
    findPropertyNames(resourceURI: string): Promise<void>;
    /**
     * This method is used to get the value for a particular property.
     */
    getProperty(propertyName: string): Promise<string>;
    /**
     * This method uses a WebDAV GET method to get a resource.
     */
    getResource(resourceURI: string): Promise<void>;
    /**
     * This method interrupts the current method.
     */
    interrupt(): Promise<void>;
    /**
     * This method lists the files and subdirectories of the ResourceURI .
     */
    listDirectory(resourceURI: string): Promise<void>;
    /**
     * This method is used to obtain a lock for a specified resource.
     */
    lockResource(resourceURI: string): Promise<void>;
    /**
     * This method can be used to make a new directory.
     */
    makeDirectory(resourceURI: string): Promise<void>;
    /**
     * This method moves one resource to a new location.
     */
    moveResource(sourceResourceURI: string, destinationResourceURI: string): Promise<void>;
    /**
     * This method updates the current set of properties on the server.
     */
    patchProperties(resourceURI: string): Promise<void>;
    /**
     * This method posts data to a resource using the WebDAV POST method.
     */
    postToResource(resourceURI: string): Promise<void>;
    /**
     * This method sends data to the server using the PUT method.
     */
    putResource(resourceURI: string): Promise<void>;
    /**
     * This method will reset the class.
     */
    reset(): Promise<void>;
    /**
     * This method sends a custom request to the WebDAV server.
     */
    sendCustomRequest(httpMethod: string, url: string, requestBody: string): Promise<void>;
    /**
     * This method sets the value of a property.
     */
    setProperty(propertyName: string, propertyValue: string): Promise<void>;
    /**
     * This method unlocks a resource.
     */
    unLockResource(resourceURI: string): Promise<void>;
    /**
     * This property includes a list of acceptable MIME types for the request.
     */
    getAccept(): string;
    /**
     * This property includes a list of acceptable MIME types for the request.
     */
    setAccept(accept: string): void;
    /**
     * This property includes the Authorization string to be sent to the server.
     */
    getAuthorization(): string;
    /**
     * This property includes the Authorization string to be sent to the server.
     */
    setAuthorization(authorization: string): void;
    /**
     * This property specifies the authentication scheme to use when server authentication is required.
     */
    getAuthScheme(): WebDAVAuthSchemes;
    /**
     * This property specifies the authentication scheme to use when server authentication is required.
     */
    setAuthScheme(authScheme: WebDAVAuthSchemes): void;
    /**
     * Whether the class is connected.
     */
    isConnected(): boolean;
    getCookies(): HTTPCookieList;
    /**
     * This property specifies the depth associated with the current operation.
     */
    getDepth(): WebDAVDepths;
    /**
     * This property specifies the depth associated with the current operation.
     */
    setDepth(depth: WebDAVDepths): void;
    /**
     * A set of properties related to firewall access.
     */
    getFirewall(): Firewall;
    /**
     * A set of properties related to firewall access.
     */
    setFirewall(firewall: Firewall): void;
    /**
     * Determines what happens when the server issues a redirect.
     */
    getFollowRedirects(): WebDAVFollowRedirects;
    /**
     * Determines what happens when the server issues a redirect.
     */
    setFollowRedirects(followRedirects: WebDAVFollowRedirects): void;
    /**
     * The current status of the class.
     */
    isIdle(): boolean;
    /**
     * This property includes the path to a local file used for DAV operations.
     */
    getLocalFile(): string;
    /**
     * This property includes the path to a local file used for DAV operations.
     */
    setLocalFile(localFile: string): void;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    getLocalHost(): string;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    setLocalHost(localHost: string): void;
    /**
     * This property specifies the principle that owns the current resource lock.
     */
    getLockOwner(): string;
    /**
     * This property specifies the principle that owns the current resource lock.
     */
    setLockOwner(lockOwner: string): void;
    /**
     * This property specifies the scope of the current resource lock.
     */
    getLockScope(): string;
    /**
     * This property specifies the scope of the current resource lock.
     */
    setLockScope(lockScope: string): void;
    /**
     * This property includes the time to live for the current resource lock.
     */
    getLockTimeout(): number;
    /**
     * This property includes the time to live for the current resource lock.
     */
    setLockTimeout(lockTimeout: number): void;
    /**
     * The lock string to be used when submitting operations on a locked resource.
     */
    getLockToken(): string;
    /**
     * The lock string to be used when submitting operations on a locked resource.
     */
    setLockToken(lockToken: string): void;
    /**
     * This property specifies the type of the current resource lock.
     */
    getLockType(): string;
    /**
     * This property specifies the type of the current resource lock.
     */
    setLockType(lockType: string): void;
    getNamespaces(): XMLNamespaceList;
    /**
     * Other headers as determined by the user (optional).
     */
    getOtherHeaders(): string;
    /**
     * Other headers as determined by the user (optional).
     */
    setOtherHeaders(otherHeaders: string): void;
    getParsedHeaders(): HeaderList;
    /**
     * This property includes a password if authentication is to be used.
     */
    getPassword(): string;
    /**
     * This property includes a password if authentication is to be used.
     */
    setPassword(password: string): void;
    getProperties(): DAVPropertyList;
    /**
     * A set of properties related to proxy access.
     */
    getProxy(): Proxy;
    /**
     * A set of properties related to proxy access.
     */
    setProxy(proxy: Proxy): void;
    /**
     * This property includes the referer URL/document (optional).
     */
    getReferer(): string;
    /**
     * This property includes the referer URL/document (optional).
     */
    setReferer(referer: string): void;
    /**
     * Specifies the data to be uploaded to the webDAV server.
     */
    getResourceData(): string;
    /**
     * Specifies the data to be uploaded to the webDAV server.
     */
    getResourceDataB(): Uint8Array;
    /**
     * Specifies the data to be uploaded to the webDAV server.
     */
    setResourceData(data: Uint8Array | string): void;
    setResourceData(data: Uint8Array, offset: number, length: number): void;
    getResources(): DAVResourceList;
    /**
     * Instructs the class to unconditionally accept the server certificate that matches the supplied certificate.
     */
    getSSLAcceptServerCert(): Certificate;
    /**
     * Instructs the class to unconditionally accept the server certificate that matches the supplied certificate.
     */
    setSSLAcceptServerCert(SSLAcceptServerCert: Certificate): void;
    /**
     * The certificate to be used during Secure Sockets Layer (SSL) negotiation.
     */
    getSSLCert(): Certificate;
    /**
     * The certificate to be used during Secure Sockets Layer (SSL) negotiation.
     */
    setSSLCert(SSLCert: Certificate): void;
    /**
     * The Secure Sockets Layer/Transport Layer Security (SSL/TLS) implementation to use.
     */
    getSSLProvider(): WebDAVSSLProviders;
    /**
     * The Secure Sockets Layer/Transport Layer Security (SSL/TLS) implementation to use.
     */
    setSSLProvider(SSLProvider: WebDAVSSLProviders): void;
    /**
     * The server certificate for the last established connection.
     */
    getSSLServerCert(): Certificate;
    /**
     * This property is the first line of the last server response.
     */
    getStatusLine(): string;
    /**
     * The timeout for the class.
     */
    getTimeout(): number;
    /**
     * The timeout for the class.
     */
    setTimeout(timeout: number): void;
    /**
     * This property includes the contents of the last response from the server.
     */
    getTransferredData(): string;
    /**
     * This property includes the contents of the last response from the server.
     */
    getTransferredDataB(): Uint8Array;
    /**
     * The full set of headers as received from the server.
     */
    getTransferredHeaders(): string;
    /**
     * This property includes a user name if authentication is to be used.
     */
    getUser(): string;
    /**
     * This property includes a user name if authentication is to be used.
     */
    setUser(user: string): void;
}
/************************************************** ENUMERATED TYPES **************************************************/
export declare enum WebFormAuthSchemes {
    authBasic = 0,
    authDigest = 1,
    authProprietary = 2,
    authNone = 3,
    authNtlm = 4,
    authNegotiate = 5,
    authOAuth = 6
}
export declare enum WebFormEncodings {
    encURLEncoding = 0,
    encMultipartFormData = 1,
    encQueryString = 2
}
export declare enum WebFormFollowRedirects {
    frNever = 0,
    frAlways = 1,
    frSameScheme = 2
}
export declare enum WebFormSSLProviders {
    sslpAutomatic = 0,
    sslpPlatform = 1,
    sslpInternal = 2
}
/**
 * The WebForm Component is used to POST data to interactive
web pages or scripts (e.g., CGI, ASP), similar to what HTML forms do.
 */
export declare class webform extends events.EventEmitter {
    private obj;
    constructor();
    about(): string;














    on(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    on(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    on(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    on(event: "Redirect", listener: (e: {
        readonly location: string;
        accept: boolean;
    }) => void): this;
    on(event: "SetCookie", listener: (e: {
        readonly name: string;
        readonly value: string;
        readonly expires: string;
        readonly domain: string;
        readonly path: string;
        readonly secure: boolean;
    }) => void): this;
    on(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    on(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    on(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    on(event: "Status", listener: (e: {
        readonly HTTPVersion: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    once(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    once(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    once(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    once(event: "Redirect", listener: (e: {
        readonly location: string;
        accept: boolean;
    }) => void): this;
    once(event: "SetCookie", listener: (e: {
        readonly name: string;
        readonly value: string;
        readonly expires: string;
        readonly domain: string;
        readonly path: string;
        readonly secure: boolean;
    }) => void): this;
    once(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    once(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    once(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    once(event: "Status", listener: (e: {
        readonly HTTPVersion: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    addListener(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    addListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    addListener(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    addListener(event: "Redirect", listener: (e: {
        readonly location: string;
        accept: boolean;
    }) => void): this;
    addListener(event: "SetCookie", listener: (e: {
        readonly name: string;
        readonly value: string;
        readonly expires: string;
        readonly domain: string;
        readonly path: string;
        readonly secure: boolean;
    }) => void): this;
    addListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    addListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    addListener(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    addListener(event: "Status", listener: (e: {
        readonly HTTPVersion: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    prependListener(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    prependListener(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    prependListener(event: "Redirect", listener: (e: {
        readonly location: string;
        accept: boolean;
    }) => void): this;
    prependListener(event: "SetCookie", listener: (e: {
        readonly name: string;
        readonly value: string;
        readonly expires: string;
        readonly domain: string;
        readonly path: string;
        readonly secure: boolean;
    }) => void): this;
    prependListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    prependListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    prependListener(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependListener(event: "Status", listener: (e: {
        readonly HTTPVersion: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    prependOnceListener(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependOnceListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    prependOnceListener(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    prependOnceListener(event: "Redirect", listener: (e: {
        readonly location: string;
        accept: boolean;
    }) => void): this;
    prependOnceListener(event: "SetCookie", listener: (e: {
        readonly name: string;
        readonly value: string;
        readonly expires: string;
        readonly domain: string;
        readonly path: string;
        readonly secure: boolean;
    }) => void): this;
    prependOnceListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    prependOnceListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    prependOnceListener(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependOnceListener(event: "Status", listener: (e: {
        readonly HTTPVersion: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    /**
     * Adds a cookie and the corresponding value to the outgoing request headers.
     */
    addCookie(cookieName: string, cookieValue: string): Promise<void>;
    /**
     * This method adds a form variable and the corresponding value.
     */
    addFormVar(varName: string, varValue: string): Promise<void>;
    /**
     * Sets or retrieves a configuration setting.
     */
    config(configurationString: string): Promise<string>;
    /**
     * This method processes events from the internal message queue.
     */
    doEvents(): Promise<void>;
    /**
     * This method interrupts the current method.
     */
    interrupt(): Promise<void>;
    /**
     * This method resets the class.
     */
    reset(): Promise<void>;
    /**
     * This method posts current data to the URL specified by the URL property.
     */
    submit(): Promise<void>;
    /**
     * This method posts current data to the URL specified by the URL parameter.
     */
    submitTo(URL: string): Promise<void>;
    /**
     * This property includes a list of acceptable MIME types for the request.
     */
    getAccept(): string;
    /**
     * This property includes a list of acceptable MIME types for the request.
     */
    setAccept(accept: string): void;
    /**
     * This property includes the Authorization string to be sent to the server.
     */
    getAuthorization(): string;
    /**
     * This property includes the Authorization string to be sent to the server.
     */
    setAuthorization(authorization: string): void;
    /**
     * This property specifies the authentication scheme to use when server authentication is required.
     */
    getAuthScheme(): WebFormAuthSchemes;
    /**
     * This property specifies the authentication scheme to use when server authentication is required.
     */
    setAuthScheme(authScheme: WebFormAuthSchemes): void;
    /**
     * Whether the class is connected.
     */
    isConnected(): boolean;
    /**
     * This property includes the content type for posts and puts.
     */
    getContentType(): string;
    /**
     * This property includes the content type for posts and puts.
     */
    setContentType(contentType: string): void;
    getCookies(): HTTPCookieList;
    /**
     * This property determines the encoding type for the form data.
     */
    getEncoding(): WebFormEncodings;
    /**
     * This property determines the encoding type for the form data.
     */
    setEncoding(encoding: WebFormEncodings): void;
    /**
     * A set of properties related to firewall access.
     */
    getFirewall(): Firewall;
    /**
     * A set of properties related to firewall access.
     */
    setFirewall(firewall: Firewall): void;
    /**
     * Determines what happens when the server issues a redirect.
     */
    getFollowRedirects(): WebFormFollowRedirects;
    /**
     * Determines what happens when the server issues a redirect.
     */
    setFollowRedirects(followRedirects: WebFormFollowRedirects): void;
    getFormVars(): FormVarList;
    /**
     * This property includes the email address of the HTTP agent (optional).
     */
    getFrom(): string;
    /**
     * This property includes the email address of the HTTP agent (optional).
     */
    setFrom(from: string): void;
    /**
     * The current status of the class.
     */
    isIdle(): boolean;
    /**
     * This property includes the path to a local file for downloading. If the file exists, it is overwritten.
     */
    getLocalFile(): string;
    /**
     * This property includes the path to a local file for downloading. If the file exists, it is overwritten.
     */
    setLocalFile(localFile: string): void;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    getLocalHost(): string;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    setLocalHost(localHost: string): void;
    /**
     * Other headers as determined by the user (optional).
     */
    getOtherHeaders(): string;
    /**
     * Other headers as determined by the user (optional).
     */
    setOtherHeaders(otherHeaders: string): void;
    getParsedHeaders(): HeaderList;
    /**
     * This property includes a password if authentication is to be used.
     */
    getPassword(): string;
    /**
     * This property includes a password if authentication is to be used.
     */
    setPassword(password: string): void;
    /**
     * A set of properties related to proxy access.
     */
    getProxy(): Proxy;
    /**
     * A set of properties related to proxy access.
     */
    setProxy(proxy: Proxy): void;
    /**
     * This property includes the referer URL/document (optional).
     */
    getReferer(): string;
    /**
     * This property includes the referer URL/document (optional).
     */
    setReferer(referer: string): void;
    /**
     * Instructs the class to unconditionally accept the server certificate that matches the supplied certificate.
     */
    getSSLAcceptServerCert(): Certificate;
    /**
     * Instructs the class to unconditionally accept the server certificate that matches the supplied certificate.
     */
    setSSLAcceptServerCert(SSLAcceptServerCert: Certificate): void;
    /**
     * The certificate to be used during Secure Sockets Layer (SSL) negotiation.
     */
    getSSLCert(): Certificate;
    /**
     * The certificate to be used during Secure Sockets Layer (SSL) negotiation.
     */
    setSSLCert(SSLCert: Certificate): void;
    /**
     * The Secure Sockets Layer/Transport Layer Security (SSL/TLS) implementation to use.
     */
    getSSLProvider(): WebFormSSLProviders;
    /**
     * The Secure Sockets Layer/Transport Layer Security (SSL/TLS) implementation to use.
     */
    setSSLProvider(SSLProvider: WebFormSSLProviders): void;
    /**
     * The server certificate for the last established connection.
     */
    getSSLServerCert(): Certificate;
    /**
     * This property is the first line of the last server response.
     */
    getStatusLine(): string;
    /**
     * The timeout for the class.
     */
    getTimeout(): number;
    /**
     * The timeout for the class.
     */
    setTimeout(timeout: number): void;
    /**
     * This property includes the contents of the last response from the server.
     */
    getTransferredData(): string;
    /**
     * This property includes the contents of the last response from the server.
     */
    getTransferredDataB(): Uint8Array;
    /**
     * This property specifies the maximum amount of data to be transferred.
     */
    getTransferredDataLimit(): number;
    /**
     * This property specifies the maximum amount of data to be transferred.
     */
    setTransferredDataLimit(transferredDataLimit: number): void;
    /**
     * The full set of headers as received from the server.
     */
    getTransferredHeaders(): string;
    /**
     * This property specifies the URL to post information to.
     */
    getURL(): string;
    /**
     * This property specifies the URL to post information to.
     */
    setURL(URL: string): void;
    /**
     * This property includes a user name if authentication is to be used.
     */
    getUser(): string;
    /**
     * This property includes a user name if authentication is to be used.
     */
    setUser(user: string): void;
}
/************************************************** ENUMERATED TYPES **************************************************/
export declare enum WebUploadAuthSchemes {
    authBasic = 0,
    authDigest = 1,
    authProprietary = 2,
    authNone = 3,
    authNtlm = 4,
    authNegotiate = 5,
    authOAuth = 6
}
export declare enum WebUploadFollowRedirects {
    frNever = 0,
    frAlways = 1,
    frSameScheme = 2
}
export declare enum WebUploadSSLProviders {
    sslpAutomatic = 0,
    sslpPlatform = 1,
    sslpInternal = 2
}
/**
 * The WebUpload Component is used to upload files
to RFC 1867-compliant web servers.
 */
export declare class webupload extends events.EventEmitter {
    private obj;
    constructor();
    about(): string;















    on(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    on(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    on(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    on(event: "Redirect", listener: (e: {
        readonly location: string;
        accept: boolean;
    }) => void): this;
    on(event: "SetCookie", listener: (e: {
        readonly name: string;
        readonly value: string;
        readonly expires: string;
        readonly domain: string;
        readonly path: string;
        readonly secure: boolean;
    }) => void): this;
    on(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    on(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    on(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    on(event: "Status", listener: (e: {
        readonly HTTPVersion: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    on(event: "UploadProgress", listener: (e: {
        readonly percentDone: number;
    }) => void): this;
    once(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    once(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    once(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    once(event: "Redirect", listener: (e: {
        readonly location: string;
        accept: boolean;
    }) => void): this;
    once(event: "SetCookie", listener: (e: {
        readonly name: string;
        readonly value: string;
        readonly expires: string;
        readonly domain: string;
        readonly path: string;
        readonly secure: boolean;
    }) => void): this;
    once(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    once(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    once(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    once(event: "Status", listener: (e: {
        readonly HTTPVersion: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    once(event: "UploadProgress", listener: (e: {
        readonly percentDone: number;
    }) => void): this;
    addListener(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    addListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    addListener(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    addListener(event: "Redirect", listener: (e: {
        readonly location: string;
        accept: boolean;
    }) => void): this;
    addListener(event: "SetCookie", listener: (e: {
        readonly name: string;
        readonly value: string;
        readonly expires: string;
        readonly domain: string;
        readonly path: string;
        readonly secure: boolean;
    }) => void): this;
    addListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    addListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    addListener(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    addListener(event: "Status", listener: (e: {
        readonly HTTPVersion: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    addListener(event: "UploadProgress", listener: (e: {
        readonly percentDone: number;
    }) => void): this;
    prependListener(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    prependListener(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    prependListener(event: "Redirect", listener: (e: {
        readonly location: string;
        accept: boolean;
    }) => void): this;
    prependListener(event: "SetCookie", listener: (e: {
        readonly name: string;
        readonly value: string;
        readonly expires: string;
        readonly domain: string;
        readonly path: string;
        readonly secure: boolean;
    }) => void): this;
    prependListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    prependListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    prependListener(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependListener(event: "Status", listener: (e: {
        readonly HTTPVersion: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    prependListener(event: "UploadProgress", listener: (e: {
        readonly percentDone: number;
    }) => void): this;
    prependOnceListener(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "EndTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependOnceListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    prependOnceListener(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    prependOnceListener(event: "Redirect", listener: (e: {
        readonly location: string;
        accept: boolean;
    }) => void): this;
    prependOnceListener(event: "SetCookie", listener: (e: {
        readonly name: string;
        readonly value: string;
        readonly expires: string;
        readonly domain: string;
        readonly path: string;
        readonly secure: boolean;
    }) => void): this;
    prependOnceListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    prependOnceListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    prependOnceListener(event: "StartTransfer", listener: (e: {
        readonly direction: number;
    }) => void): this;
    prependOnceListener(event: "Status", listener: (e: {
        readonly HTTPVersion: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
    }) => void): this;
    prependOnceListener(event: "UploadProgress", listener: (e: {
        readonly percentDone: number;
    }) => void): this;
    /**
     * Adds a cookie and the corresponding value to the outgoing request headers.
     */
    addCookie(cookieName: string, cookieValue: string): Promise<void>;
    /**
     * This method adds a file variable and the corresponding file name.
     */
    addFileVar(fileVar: string, fileName: string): Promise<void>;
    /**
     * This method adds a form variable and the corresponding value.
     */
    addFormVar(varName: string, varValue: string): Promise<void>;
    /**
     * Sets or retrieves a configuration setting.
     */
    config(configurationString: string): Promise<string>;
    /**
     * This method processes events from the internal message queue.
     */
    doEvents(): Promise<void>;
    /**
     * This method interrupts the current method.
     */
    interrupt(): Promise<void>;
    /**
     * This method resets the class.
     */
    reset(): Promise<void>;
    /**
     * This method posts data to the URL specified by URL .
     */
    upload(): Promise<void>;
    /**
     * This method posts data to the URL specified by the URL parameter.
     */
    uploadTo(URL: string): Promise<void>;
    /**
     * This property includes a list of acceptable MIME types for the request.
     */
    getAccept(): string;
    /**
     * This property includes a list of acceptable MIME types for the request.
     */
    setAccept(accept: string): void;
    /**
     * This property includes the Authorization string to be sent to the server.
     */
    getAuthorization(): string;
    /**
     * This property includes the Authorization string to be sent to the server.
     */
    setAuthorization(authorization: string): void;
    /**
     * This property specifies the authentication scheme to use when server authentication is required.
     */
    getAuthScheme(): WebUploadAuthSchemes;
    /**
     * This property specifies the authentication scheme to use when server authentication is required.
     */
    setAuthScheme(authScheme: WebUploadAuthSchemes): void;
    /**
     * Whether the class is connected.
     */
    isConnected(): boolean;
    /**
     * This property includes the content type for posts and puts.
     */
    getContentType(): string;
    /**
     * This property includes the content type for posts and puts.
     */
    setContentType(contentType: string): void;
    getCookies(): HTTPCookieList;
    getFileVars(): FileVarList;
    /**
     * A set of properties related to firewall access.
     */
    getFirewall(): Firewall;
    /**
     * A set of properties related to firewall access.
     */
    setFirewall(firewall: Firewall): void;
    /**
     * Determines what happens when the server issues a redirect.
     */
    getFollowRedirects(): WebUploadFollowRedirects;
    /**
     * Determines what happens when the server issues a redirect.
     */
    setFollowRedirects(followRedirects: WebUploadFollowRedirects): void;
    getFormVars(): FormVarList;
    /**
     * This property includes the email address of the HTTP agent (optional).
     */
    getFrom(): string;
    /**
     * This property includes the email address of the HTTP agent (optional).
     */
    setFrom(from: string): void;
    /**
     * The current status of the class.
     */
    isIdle(): boolean;
    /**
     * This property includes the path to a local file for downloading. If the file exists, it is overwritten.
     */
    getLocalFile(): string;
    /**
     * This property includes the path to a local file for downloading. If the file exists, it is overwritten.
     */
    setLocalFile(localFile: string): void;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    getLocalHost(): string;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    setLocalHost(localHost: string): void;
    /**
     * Other headers as determined by the user (optional).
     */
    getOtherHeaders(): string;
    /**
     * Other headers as determined by the user (optional).
     */
    setOtherHeaders(otherHeaders: string): void;
    getParsedHeaders(): HeaderList;
    /**
     * This property includes a password if authentication is to be used.
     */
    getPassword(): string;
    /**
     * This property includes a password if authentication is to be used.
     */
    setPassword(password: string): void;
    /**
     * A set of properties related to proxy access.
     */
    getProxy(): Proxy;
    /**
     * A set of properties related to proxy access.
     */
    setProxy(proxy: Proxy): void;
    /**
     * This property includes the referer URL/document (optional).
     */
    getReferer(): string;
    /**
     * This property includes the referer URL/document (optional).
     */
    setReferer(referer: string): void;
    /**
     * Instructs the class to unconditionally accept the server certificate that matches the supplied certificate.
     */
    getSSLAcceptServerCert(): Certificate;
    /**
     * Instructs the class to unconditionally accept the server certificate that matches the supplied certificate.
     */
    setSSLAcceptServerCert(SSLAcceptServerCert: Certificate): void;
    /**
     * The certificate to be used during Secure Sockets Layer (SSL) negotiation.
     */
    getSSLCert(): Certificate;
    /**
     * The certificate to be used during Secure Sockets Layer (SSL) negotiation.
     */
    setSSLCert(SSLCert: Certificate): void;
    /**
     * The Secure Sockets Layer/Transport Layer Security (SSL/TLS) implementation to use.
     */
    getSSLProvider(): WebUploadSSLProviders;
    /**
     * The Secure Sockets Layer/Transport Layer Security (SSL/TLS) implementation to use.
     */
    setSSLProvider(SSLProvider: WebUploadSSLProviders): void;
    /**
     * The server certificate for the last established connection.
     */
    getSSLServerCert(): Certificate;
    /**
     * This property is the first line of the last server response.
     */
    getStatusLine(): string;
    /**
     * The timeout for the class.
     */
    getTimeout(): number;
    /**
     * The timeout for the class.
     */
    setTimeout(timeout: number): void;
    /**
     * This property includes the contents of the last response from the server.
     */
    getTransferredData(): string;
    /**
     * This property includes the contents of the last response from the server.
     */
    getTransferredDataB(): Uint8Array;
    /**
     * This property specifies the maximum amount of data to be transferred.
     */
    getTransferredDataLimit(): number;
    /**
     * This property specifies the maximum amount of data to be transferred.
     */
    setTransferredDataLimit(transferredDataLimit: number): void;
    /**
     * The full set of headers as received from the server.
     */
    getTransferredHeaders(): string;
    /**
     * This property specifies the URL to post information to.
     */
    getURL(): string;
    /**
     * This property specifies the URL to post information to.
     */
    setURL(URL: string): void;
    /**
     * This property includes a user name if authentication is to be used.
     */
    getUser(): string;
    /**
     * This property includes a user name if authentication is to be used.
     */
    setUser(user: string): void;
}
/************************************************** ENUMERATED TYPES **************************************************/
export declare enum WSClientAuthSchemes {
    authBasic = 0,
    authDigest = 1,
    authProprietary = 2,
    authNone = 3,
    authNtlm = 4,
    authNegotiate = 5,
    authOAuth = 6
}
export declare enum WSClientCompressionMethods {
    cmtdNone = 0,
    cmtdDeflate = 1
}
export declare enum WSClientDataFormats {
    dfAutomatic = 0,
    dfText = 1,
    dfBinary = 2,
    dfPing = 9,
    dfPong = 10
}
export declare enum WSClientFollowRedirects {
    frNever = 0,
    frAlways = 1,
    frSameScheme = 2
}
export declare enum WSClientSSLProviders {
    sslpAutomatic = 0,
    sslpPlatform = 1,
    sslpInternal = 2
}
/**
 * The WSClient component is used to establish a WebSocket connection to a server.
 */
export declare class wsclient extends events.EventEmitter {
    private obj;
    constructor();
    about(): string;













    on(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "DataIn", listener: (e: {
        readonly dataFormat: number;
        readonly text: string;
        readonly textB: Uint8Array;
        readonly EOM: boolean;
        readonly EOL: boolean;
    }) => void): this;
    on(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    on(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    on(event: "Ping", listener: (e: {
        readonly payload: string;
        readonly payloadB: Uint8Array;
        readonly response: boolean;
    }) => void): this;
    on(event: "ReadyToSend", listener: (e: {}) => void): this;
    on(event: "Redirect", listener: (e: {
        readonly location: string;
        accept: boolean;
    }) => void): this;
    on(event: "SetCookie", listener: (e: {
        readonly name: string;
        readonly value: string;
        readonly expires: string;
        readonly domain: string;
        readonly path: string;
        readonly secure: boolean;
    }) => void): this;
    on(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    on(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    once(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "DataIn", listener: (e: {
        readonly dataFormat: number;
        readonly text: string;
        readonly textB: Uint8Array;
        readonly EOM: boolean;
        readonly EOL: boolean;
    }) => void): this;
    once(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    once(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    once(event: "Ping", listener: (e: {
        readonly payload: string;
        readonly payloadB: Uint8Array;
        readonly response: boolean;
    }) => void): this;
    once(event: "ReadyToSend", listener: (e: {}) => void): this;
    once(event: "Redirect", listener: (e: {
        readonly location: string;
        accept: boolean;
    }) => void): this;
    once(event: "SetCookie", listener: (e: {
        readonly name: string;
        readonly value: string;
        readonly expires: string;
        readonly domain: string;
        readonly path: string;
        readonly secure: boolean;
    }) => void): this;
    once(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    once(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    addListener(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "DataIn", listener: (e: {
        readonly dataFormat: number;
        readonly text: string;
        readonly textB: Uint8Array;
        readonly EOM: boolean;
        readonly EOL: boolean;
    }) => void): this;
    addListener(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    addListener(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    addListener(event: "Ping", listener: (e: {
        readonly payload: string;
        readonly payloadB: Uint8Array;
        readonly response: boolean;
    }) => void): this;
    addListener(event: "ReadyToSend", listener: (e: {}) => void): this;
    addListener(event: "Redirect", listener: (e: {
        readonly location: string;
        accept: boolean;
    }) => void): this;
    addListener(event: "SetCookie", listener: (e: {
        readonly name: string;
        readonly value: string;
        readonly expires: string;
        readonly domain: string;
        readonly path: string;
        readonly secure: boolean;
    }) => void): this;
    addListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    addListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    prependListener(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "DataIn", listener: (e: {
        readonly dataFormat: number;
        readonly text: string;
        readonly textB: Uint8Array;
        readonly EOM: boolean;
        readonly EOL: boolean;
    }) => void): this;
    prependListener(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    prependListener(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    prependListener(event: "Ping", listener: (e: {
        readonly payload: string;
        readonly payloadB: Uint8Array;
        readonly response: boolean;
    }) => void): this;
    prependListener(event: "ReadyToSend", listener: (e: {}) => void): this;
    prependListener(event: "Redirect", listener: (e: {
        readonly location: string;
        accept: boolean;
    }) => void): this;
    prependListener(event: "SetCookie", listener: (e: {
        readonly name: string;
        readonly value: string;
        readonly expires: string;
        readonly domain: string;
        readonly path: string;
        readonly secure: boolean;
    }) => void): this;
    prependListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    prependListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    prependOnceListener(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "DataIn", listener: (e: {
        readonly dataFormat: number;
        readonly text: string;
        readonly textB: Uint8Array;
        readonly EOM: boolean;
        readonly EOL: boolean;
    }) => void): this;
    prependOnceListener(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "Header", listener: (e: {
        readonly field: string;
        readonly value: string;
    }) => void): this;
    prependOnceListener(event: "Log", listener: (e: {
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    prependOnceListener(event: "Ping", listener: (e: {
        readonly payload: string;
        readonly payloadB: Uint8Array;
        readonly response: boolean;
    }) => void): this;
    prependOnceListener(event: "ReadyToSend", listener: (e: {}) => void): this;
    prependOnceListener(event: "Redirect", listener: (e: {
        readonly location: string;
        accept: boolean;
    }) => void): this;
    prependOnceListener(event: "SetCookie", listener: (e: {
        readonly name: string;
        readonly value: string;
        readonly expires: string;
        readonly domain: string;
        readonly path: string;
        readonly secure: boolean;
    }) => void): this;
    prependOnceListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    prependOnceListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    /**
     * Adds a cookie and the corresponding value to the outgoing request headers.
     */
    addCookie(cookieName: string, cookieValue: string): Promise<void>;
    /**
     * This method controls whether the class will fire DataIn for each line received.
     */
    changeLineMode(lineMode: boolean): Promise<void>;
    /**
     * Sets or retrieves a configuration setting.
     */
    config(configurationString: string): Promise<string>;
    /**
     * This method connects to the host specified by the URL property.
     */
    connect(): Promise<void>;
    /**
     * This method connects to the specified host.
     */
    connectTo(URL: string): Promise<void>;
    /**
     * This method disconnects from the remote host.
     */
    disconnect(): Promise<void>;
    /**
     * This method processes events from the internal message queue.
     */
    doEvents(): Promise<void>;
    /**
     * This method interrupts the current method.
     */
    interrupt(): Promise<void>;
    /**
     * This method sends a ping request to the remote host.
     */
    ping(): Promise<void>;
    /**
     * This method will reset the class.
     */
    reset(): Promise<void>;
    /**
     * This method resets all HTTP headers, cookies, LocalFile , and AttachedFile .
     */
    resetHeaders(): Promise<void>;
    /**
     * This method sends data to the remote host.
     */
    send(data: Uint8Array): Promise<void>;
    /**
     * This method sends data to the remote host.
     */
    sendBytes(data: Uint8Array): Promise<void>;
    sendBytes(data: Uint8Array, offset: number, lenData: number): Promise<void>;
    /**
     * This method sends a file to the remote host.
     */
    sendFile(fileName: string): Promise<void>;
    /**
     * This method sends text data to the server.
     */
    sendText(text: string): Promise<void>;
    /**
     * This property indicates whether data reception is currently enabled.
     */
    isAcceptData(): boolean;
    /**
     * This property includes the Authorization string to be sent to the server.
     */
    getAuthorization(): string;
    /**
     * This property includes the Authorization string to be sent to the server.
     */
    setAuthorization(authorization: string): void;
    /**
     * This property specifies the authentication scheme to use when server authentication is required.
     */
    getAuthScheme(): WSClientAuthSchemes;
    /**
     * This property specifies the authentication scheme to use when server authentication is required.
     */
    setAuthScheme(authScheme: WSClientAuthSchemes): void;
    /**
     * This property includes the number of bytes actually sent after a call to the SendBytes method.
     */
    getBytesSent(): number;
    /**
     * This property determines whether the class will request that data in the connection be compressed.
     */
    getCompressionMethod(): WSClientCompressionMethods;
    /**
     * This property determines whether the class will request that data in the connection be compressed.
     */
    setCompressionMethod(compressionMethod: WSClientCompressionMethods): void;
    /**
     * Whether the class is connected.
     */
    isConnected(): boolean;
    getCookies(): HTTPCookieList;
    /**
     * This property includes the format of the data being sent.
     */
    getDataFormat(): WSClientDataFormats;
    /**
     * This property includes the format of the data being sent.
     */
    setDataFormat(dataFormat: WSClientDataFormats): void;
    /**
     * A set of properties related to firewall access.
     */
    getFirewall(): Firewall;
    /**
     * A set of properties related to firewall access.
     */
    setFirewall(firewall: Firewall): void;
    /**
     * Determines what happens when the server issues a redirect.
     */
    getFollowRedirects(): WSClientFollowRedirects;
    /**
     * Determines what happens when the server issues a redirect.
     */
    setFollowRedirects(followRedirects: WSClientFollowRedirects): void;
    /**
     * This property indicates whether the class will fire DataIn for each line received.
     */
    isLineMode(): boolean;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    getLocalHost(): string;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    setLocalHost(localHost: string): void;
    /**
     * The TCP port in the local host where the class binds.
     */
    getLocalPort(): number;
    /**
     * The TCP port in the local host where the class binds.
     */
    setLocalPort(localPort: number): void;
    /**
     * This property includes the Origin header field value.
     */
    getOrigin(): string;
    /**
     * This property includes the Origin header field value.
     */
    setOrigin(origin: string): void;
    /**
     * Other headers as determined by the user (optional).
     */
    getOtherHeaders(): string;
    /**
     * Other headers as determined by the user (optional).
     */
    setOtherHeaders(otherHeaders: string): void;
    getParsedHeaders(): HeaderList;
    /**
     * This property includes a password if authentication is to be used.
     */
    getPassword(): string;
    /**
     * This property includes a password if authentication is to be used.
     */
    setPassword(password: string): void;
    /**
     * A set of properties related to proxy access.
     */
    getProxy(): Proxy;
    /**
     * A set of properties related to proxy access.
     */
    setProxy(proxy: Proxy): void;
    /**
     * This property indicates whether the class is ready to send data.
     */
    isReadyToSend(): boolean;
    /**
     * Instructs the class to unconditionally accept the server certificate that matches the supplied certificate.
     */
    getSSLAcceptServerCert(): Certificate;
    /**
     * Instructs the class to unconditionally accept the server certificate that matches the supplied certificate.
     */
    setSSLAcceptServerCert(SSLAcceptServerCert: Certificate): void;
    /**
     * The certificate to be used during Secure Sockets Layer (SSL) negotiation.
     */
    getSSLCert(): Certificate;
    /**
     * The certificate to be used during Secure Sockets Layer (SSL) negotiation.
     */
    setSSLCert(SSLCert: Certificate): void;
    /**
     * The Secure Sockets Layer/Transport Layer Security (SSL/TLS) implementation to use.
     */
    getSSLProvider(): WSClientSSLProviders;
    /**
     * The Secure Sockets Layer/Transport Layer Security (SSL/TLS) implementation to use.
     */
    setSSLProvider(SSLProvider: WSClientSSLProviders): void;
    /**
     * The server certificate for the last established connection.
     */
    getSSLServerCert(): Certificate;
    /**
     * This property includes optional subprotocols supported by the client.
     */
    getSubProtocols(): string;
    /**
     * This property includes optional subprotocols supported by the client.
     */
    setSubProtocols(subProtocols: string): void;
    /**
     * This property includes the timeout for the class.
     */
    getTimeout(): number;
    /**
     * This property includes the timeout for the class.
     */
    setTimeout(timeout: number): void;
    /**
     * The full set of headers as received from the server.
     */
    getTransferredHeaders(): string;
    /**
     * This property specifies the URL that the Connect method will connect to.
     */
    getURL(): string;
    /**
     * This property specifies the URL that the Connect method will connect to.
     */
    setURL(URL: string): void;
    /**
     * This property includes a user name if authentication is to be used.
     */
    getUser(): string;
    /**
     * This property includes a user name if authentication is to be used.
     */
    setUser(user: string): void;
}
/************************************************** ENUMERATED TYPES **************************************************/
export declare enum WSServerSSLProviders {
    sslpAutomatic = 0,
    sslpPlatform = 1,
    sslpInternal = 2
}
/**
 * The WSServer component is used to create a WebSocket server.
 */
export declare class wsserver extends events.EventEmitter {
    private obj;
    constructor();
    about(): string;












    on(event: "Connected", listener: (e: {
        readonly connectionId: string;
    }) => void): this;
    on(event: "ConnectionRequest", listener: (e: {
        readonly address: string;
        readonly port: number;
        accept: boolean;
    }) => void): this;
    on(event: "DataIn", listener: (e: {
        readonly connectionId: string;
        readonly dataFormat: number;
        readonly text: string;
        readonly textB: Uint8Array;
        readonly EOM: boolean;
        readonly EOL: boolean;
    }) => void): this;
    on(event: "Disconnected", listener: (e: {
        readonly connectionId: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "Error", listener: (e: {
        readonly connectionId: string;
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "Log", listener: (e: {
        readonly connectionId: string;
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    on(event: "Ping", listener: (e: {
        readonly connectionId: string;
        readonly payload: string;
        readonly payloadB: Uint8Array;
        readonly response: boolean;
    }) => void): this;
    on(event: "ReadyToSend", listener: (e: {
        readonly connectionId: string;
    }) => void): this;
    on(event: "SSLClientAuthentication", listener: (e: {
        readonly connectionId: string;
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    on(event: "SSLConnectionRequest", listener: (e: {
        readonly connectionId: string;
        readonly supportedCipherSuites: string;
        readonly supportedSignatureAlgs: string;
        certStoreType: number;
        certStore: string;
        certPassword: string;
        certSubject: string;
    }) => void): this;
    on(event: "SSLStatus", listener: (e: {
        readonly connectionId: string;
        readonly message: string;
    }) => void): this;
    on(event: "WebSocketOpenRequest", listener: (e: {
        readonly connectionId: string;
        readonly requestURI: string;
        readonly hostHeader: string;
        readonly originHeader: string;
        subProtocols: string;
        readonly extensions: string;
        readonly requestHeaders: string;
        statusCode: number;
        responseHeaders: string;
    }) => void): this;
    once(event: "Connected", listener: (e: {
        readonly connectionId: string;
    }) => void): this;
    once(event: "ConnectionRequest", listener: (e: {
        readonly address: string;
        readonly port: number;
        accept: boolean;
    }) => void): this;
    once(event: "DataIn", listener: (e: {
        readonly connectionId: string;
        readonly dataFormat: number;
        readonly text: string;
        readonly textB: Uint8Array;
        readonly EOM: boolean;
        readonly EOL: boolean;
    }) => void): this;
    once(event: "Disconnected", listener: (e: {
        readonly connectionId: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "Error", listener: (e: {
        readonly connectionId: string;
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "Log", listener: (e: {
        readonly connectionId: string;
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    once(event: "Ping", listener: (e: {
        readonly connectionId: string;
        readonly payload: string;
        readonly payloadB: Uint8Array;
        readonly response: boolean;
    }) => void): this;
    once(event: "ReadyToSend", listener: (e: {
        readonly connectionId: string;
    }) => void): this;
    once(event: "SSLClientAuthentication", listener: (e: {
        readonly connectionId: string;
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    once(event: "SSLConnectionRequest", listener: (e: {
        readonly connectionId: string;
        readonly supportedCipherSuites: string;
        readonly supportedSignatureAlgs: string;
        certStoreType: number;
        certStore: string;
        certPassword: string;
        certSubject: string;
    }) => void): this;
    once(event: "SSLStatus", listener: (e: {
        readonly connectionId: string;
        readonly message: string;
    }) => void): this;
    once(event: "WebSocketOpenRequest", listener: (e: {
        readonly connectionId: string;
        readonly requestURI: string;
        readonly hostHeader: string;
        readonly originHeader: string;
        subProtocols: string;
        readonly extensions: string;
        readonly requestHeaders: string;
        statusCode: number;
        responseHeaders: string;
    }) => void): this;
    addListener(event: "Connected", listener: (e: {
        readonly connectionId: string;
    }) => void): this;
    addListener(event: "ConnectionRequest", listener: (e: {
        readonly address: string;
        readonly port: number;
        accept: boolean;
    }) => void): this;
    addListener(event: "DataIn", listener: (e: {
        readonly connectionId: string;
        readonly dataFormat: number;
        readonly text: string;
        readonly textB: Uint8Array;
        readonly EOM: boolean;
        readonly EOL: boolean;
    }) => void): this;
    addListener(event: "Disconnected", listener: (e: {
        readonly connectionId: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "Error", listener: (e: {
        readonly connectionId: string;
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "Log", listener: (e: {
        readonly connectionId: string;
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    addListener(event: "Ping", listener: (e: {
        readonly connectionId: string;
        readonly payload: string;
        readonly payloadB: Uint8Array;
        readonly response: boolean;
    }) => void): this;
    addListener(event: "ReadyToSend", listener: (e: {
        readonly connectionId: string;
    }) => void): this;
    addListener(event: "SSLClientAuthentication", listener: (e: {
        readonly connectionId: string;
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    addListener(event: "SSLConnectionRequest", listener: (e: {
        readonly connectionId: string;
        readonly supportedCipherSuites: string;
        readonly supportedSignatureAlgs: string;
        certStoreType: number;
        certStore: string;
        certPassword: string;
        certSubject: string;
    }) => void): this;
    addListener(event: "SSLStatus", listener: (e: {
        readonly connectionId: string;
        readonly message: string;
    }) => void): this;
    addListener(event: "WebSocketOpenRequest", listener: (e: {
        readonly connectionId: string;
        readonly requestURI: string;
        readonly hostHeader: string;
        readonly originHeader: string;
        subProtocols: string;
        readonly extensions: string;
        readonly requestHeaders: string;
        statusCode: number;
        responseHeaders: string;
    }) => void): this;
    prependListener(event: "Connected", listener: (e: {
        readonly connectionId: string;
    }) => void): this;
    prependListener(event: "ConnectionRequest", listener: (e: {
        readonly address: string;
        readonly port: number;
        accept: boolean;
    }) => void): this;
    prependListener(event: "DataIn", listener: (e: {
        readonly connectionId: string;
        readonly dataFormat: number;
        readonly text: string;
        readonly textB: Uint8Array;
        readonly EOM: boolean;
        readonly EOL: boolean;
    }) => void): this;
    prependListener(event: "Disconnected", listener: (e: {
        readonly connectionId: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "Error", listener: (e: {
        readonly connectionId: string;
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "Log", listener: (e: {
        readonly connectionId: string;
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    prependListener(event: "Ping", listener: (e: {
        readonly connectionId: string;
        readonly payload: string;
        readonly payloadB: Uint8Array;
        readonly response: boolean;
    }) => void): this;
    prependListener(event: "ReadyToSend", listener: (e: {
        readonly connectionId: string;
    }) => void): this;
    prependListener(event: "SSLClientAuthentication", listener: (e: {
        readonly connectionId: string;
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    prependListener(event: "SSLConnectionRequest", listener: (e: {
        readonly connectionId: string;
        readonly supportedCipherSuites: string;
        readonly supportedSignatureAlgs: string;
        certStoreType: number;
        certStore: string;
        certPassword: string;
        certSubject: string;
    }) => void): this;
    prependListener(event: "SSLStatus", listener: (e: {
        readonly connectionId: string;
        readonly message: string;
    }) => void): this;
    prependListener(event: "WebSocketOpenRequest", listener: (e: {
        readonly connectionId: string;
        readonly requestURI: string;
        readonly hostHeader: string;
        readonly originHeader: string;
        subProtocols: string;
        readonly extensions: string;
        readonly requestHeaders: string;
        statusCode: number;
        responseHeaders: string;
    }) => void): this;
    prependOnceListener(event: "Connected", listener: (e: {
        readonly connectionId: string;
    }) => void): this;
    prependOnceListener(event: "ConnectionRequest", listener: (e: {
        readonly address: string;
        readonly port: number;
        accept: boolean;
    }) => void): this;
    prependOnceListener(event: "DataIn", listener: (e: {
        readonly connectionId: string;
        readonly dataFormat: number;
        readonly text: string;
        readonly textB: Uint8Array;
        readonly EOM: boolean;
        readonly EOL: boolean;
    }) => void): this;
    prependOnceListener(event: "Disconnected", listener: (e: {
        readonly connectionId: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "Error", listener: (e: {
        readonly connectionId: string;
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "Log", listener: (e: {
        readonly connectionId: string;
        readonly logLevel: number;
        readonly message: string;
        readonly logType: string;
    }) => void): this;
    prependOnceListener(event: "Ping", listener: (e: {
        readonly connectionId: string;
        readonly payload: string;
        readonly payloadB: Uint8Array;
        readonly response: boolean;
    }) => void): this;
    prependOnceListener(event: "ReadyToSend", listener: (e: {
        readonly connectionId: string;
    }) => void): this;
    prependOnceListener(event: "SSLClientAuthentication", listener: (e: {
        readonly connectionId: string;
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    prependOnceListener(event: "SSLConnectionRequest", listener: (e: {
        readonly connectionId: string;
        readonly supportedCipherSuites: string;
        readonly supportedSignatureAlgs: string;
        certStoreType: number;
        certStore: string;
        certPassword: string;
        certSubject: string;
    }) => void): this;
    prependOnceListener(event: "SSLStatus", listener: (e: {
        readonly connectionId: string;
        readonly message: string;
    }) => void): this;
    prependOnceListener(event: "WebSocketOpenRequest", listener: (e: {
        readonly connectionId: string;
        readonly requestURI: string;
        readonly hostHeader: string;
        readonly originHeader: string;
        subProtocols: string;
        readonly extensions: string;
        readonly requestHeaders: string;
        statusCode: number;
        responseHeaders: string;
    }) => void): this;
    /**
     * This method controls whether the class will fire DataIn when an EOL is received for the specified connection.
     */
    changeLineMode(connectionId: string, lineMode: boolean): Promise<void>;
    /**
     * Sets or retrieves a configuration setting.
     */
    config(configurationString: string): Promise<string>;
    /**
     * This method disconnects the specified client.
     */
    disconnect(connectionId: string): Promise<void>;
    /**
     * This method processes events from the internal message queue.
     */
    doEvents(): Promise<void>;
    /**
     * This method interrupts a synchronous send to the remote host.
     */
    interrupt(connectionId: string): Promise<void>;
    /**
     * This method sends a ping request to the remote host.
     */
    ping(connectionId: string): Promise<void>;
    /**
     * This method sends binary data to the client.
     */
    send(connectionId: string, data: Uint8Array): Promise<void>;
    /**
     * This method sends binary data to the specified client.
     */
    sendBytes(connectionId: string, data: Uint8Array): Promise<void>;
    sendBytes(connectionId: string, data: Uint8Array, offset: number, lenData: number): Promise<void>;
    /**
     * This method sends the file to the remote host.
     */
    sendFile(connectionId: string, fileName: string): Promise<void>;
    /**
     * This method sends text data to the client.
     */
    sendText(connectionId: string, text: string): Promise<void>;
    /**
     * This method shuts down the server.
     */
    shutdown(): Promise<void>;
    /**
     * This method starts listening for incoming connections.
     */
    startListening(): Promise<void>;
    /**
     * This method stops listening for new connections.
     */
    stopListening(): Promise<void>;
    /**
     * This property includes the maximum number of pending connections maintained by the Transmission Control Protocol (TCP)/IP subsystem.
     */
    getConnectionBacklog(): number;
    /**
     * This property includes the maximum number of pending connections maintained by the Transmission Control Protocol (TCP)/IP subsystem.
     */
    setConnectionBacklog(connectionBacklog: number): void;
    getConnections(): WSConnectionMap;
    /**
     * This property includes initial timeout value to be used by incoming connections.
     */
    getDefaultTimeout(): number;
    /**
     * This property includes initial timeout value to be used by incoming connections.
     */
    setDefaultTimeout(defaultTimeout: number): void;
    /**
     * This property indicates whether the class is listening for incoming connections on LocalPort.
     */
    isListening(): boolean;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    getLocalHost(): string;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    setLocalHost(localHost: string): void;
    /**
     * This property includes the Transmission Control Protocol (TCP) port in the local host where the class listens.
     */
    getLocalPort(): number;
    /**
     * This property includes the Transmission Control Protocol (TCP) port in the local host where the class listens.
     */
    setLocalPort(localPort: number): void;
    /**
     * If set to True, the server asks the client(s) for a certificate.
     */
    isSSLAuthenticateClients(): boolean;
    /**
     * If set to True, the server asks the client(s) for a certificate.
     */
    setSSLAuthenticateClients(SSLAuthenticateClients: boolean): void;
    /**
     * The certificate to be used during Secure Sockets Layer (SSL) negotiation.
     */
    getSSLCert(): Certificate;
    /**
     * The certificate to be used during Secure Sockets Layer (SSL) negotiation.
     */
    setSSLCert(SSLCert: Certificate): void;
    /**
     * The Secure Sockets Layer/Transport Layer Security (SSL/TLS) implementation to use.
     */
    getSSLProvider(): WSServerSSLProviders;
    /**
     * The Secure Sockets Layer/Transport Layer Security (SSL/TLS) implementation to use.
     */
    setSSLProvider(SSLProvider: WSServerSSLProviders): void;
    /**
     * This property determines if the Secure Sockets Layer (SSL) is negotiated with incoming connections.
     */
    isUseSSL(): boolean;
    /**
     * This property determines if the Secure Sockets Layer (SSL) is negotiated with incoming connections.
     */
    setUseSSL(useSSL: boolean): void;
}
/************************************************** ENUMERATED TYPES **************************************************/
/**
 * The XML component can be used to both parse and create XML documents.
 */
export declare class xml extends events.EventEmitter {
    private obj;
    constructor();
    about(): string;













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
    on(event: "PI", listener: (e: {
        readonly text: string;
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
    on(event: "XML", listener: (e: {
        readonly text: string;
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
    once(event: "PI", listener: (e: {
        readonly text: string;
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
    once(event: "XML", listener: (e: {
        readonly text: string;
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
    addListener(event: "PI", listener: (e: {
        readonly text: string;
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
    addListener(event: "XML", listener: (e: {
        readonly text: string;
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
    prependListener(event: "PI", listener: (e: {
        readonly text: string;
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
    prependListener(event: "XML", listener: (e: {
        readonly text: string;
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
    prependOnceListener(event: "PI", listener: (e: {
        readonly text: string;
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
    prependOnceListener(event: "XML", listener: (e: {
        readonly text: string;
    }) => void): this;
    /**
     * Sets or retrieves a configuration setting.
     */
    config(configurationString: string): Promise<string>;
    /**
     * This method writes the closing tag of an open XML element.
     */
    endElement(): Promise<void>;
    /**
     * This method flushes the parser and checks its end state.
     */
    flush(): Promise<void>;
    /**
     * This method returns the value of the specified attribute.
     */
    getAttr(attrName: string): Promise<string>;
    /**
     * This method determines whether a specific element exists in the document.
     */
    hasXPath(XPath: string): Promise<boolean>;
    /**
     * This method loads the document object model (DOM) from a file.
     */
    loadDOM(fileName: string): Promise<void>;
    /**
     * This method loads the XML schema.
     */
    loadSchema(schema: string): Promise<void>;
    /**
     * This method parses the specified XML data.
     */
    parse(): Promise<void>;
    /**
     * This method writes an XML attribute.
     */
    putAttr(name: string, namespaceURI: string, value: string): Promise<void>;
    /**
     * This method writes an XML CDATA block.
     */
    putCData(text: string): Promise<void>;
    /**
     * This method writes an XML comment block.
     */
    putComment(text: string): Promise<void>;
    /**
     * This method writes a simple XML element with a value.
     */
    putElement(name: string, namespaceURI: string, value: string): Promise<void>;
    /**
     * This method writes a raw XML fragment.
     */
    putRaw(text: string): Promise<void>;
    /**
     * This method writes text inside an XML element.
     */
    putString(text: string): Promise<void>;
    /**
     * This method removes an attribute.
     */
    removeAttr(attrName: string): Promise<void>;
    /**
     * This method removes the children of the element as the specified XPath.
     */
    removeChildren(): Promise<void>;
    /**
     * This method removes the element as the specified XPath.
     */
    removeElement(): Promise<void>;
    /**
     * This method resets the parser.
     */
    reset(): Promise<void>;
    /**
     * This method closes the class writing stream.
     */
    save(): Promise<void>;
    /**
     * This method saves the DOM to a file.
     */
    saveDOM(fileName: string): Promise<void>;
    /**
     * This method writes the opening tag of an XML element.
     */
    startElement(name: string, namespaceURI: string): Promise<void>;
    /**
     * This method navigates to the specified XPath if it exists.
     */
    tryXPath(xpath: string): Promise<boolean>;
    /**
     * When set to True, this property creates an internal object model of the XML document.
     */
    isBuildDOM(): boolean;
    /**
     * When set to True, this property creates an internal object model of the XML document.
     */
    setBuildDOM(buildDOM: boolean): void;
    /**
     * This property specifies the XML data to parse.
     */
    getInputData(): string;
    /**
     * This property specifies the XML data to parse.
     */
    setInputData(inputData: string): void;
    /**
     * This property specifies the file to process.
     */
    getInputFile(): string;
    /**
     * This property specifies the file to process.
     */
    setInputFile(inputFile: string): void;
    getNamespaces(): XMLNamespaceList;
    /**
     * The output XML after processing.
     */
    getOutputData(): string;
    /**
     * The output XML after processing.
     */
    setOutputData(outputData: string): void;
    /**
     * This property includes the path to a local file where the output will be written.
     */
    getOutputFile(): string;
    /**
     * This property includes the path to a local file where the output will be written.
     */
    setOutputFile(outputFile: string): void;
    /**
     * This property indicates whether or not the class should overwrite files.
     */
    isOverwrite(): boolean;
    /**
     * This property indicates whether or not the class should overwrite files.
     */
    setOverwrite(overwrite: boolean): void;
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
    getXComments(): XMLCommentList;
    /**
     * This property includes the name of the current element.
     */
    getXElement(): string;
    /**
     * This property includes the name of the current element.
     */
    setXElement(XElement: string): void;
    /**
     * This property specifies details of the XML declaration.
     */
    getXMLDeclaration(): XMLDeclaration;
    /**
     * This property specifies details of the XML declaration.
     */
    setXMLDeclaration(argXMLDeclaration: XMLDeclaration): void;
    /**
     * This property includes the namespace of the current element.
     */
    getXNamespace(): string;
    /**
     * This property includes the namespace of the current element.
     */
    setXNamespace(XNamespace: string): void;
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
     * This property includes the prefix of the current element.
     */
    getXPrefix(): string;
    /**
     * This property includes the prefix of the current element.
     */
    setXPrefix(XPrefix: string): void;
    /**
     * This property includes a snapshot of the current element in the document.
     */
    getXSubTree(): string;
    /**
     * This property includes the text of the current element.
     */
    getXText(): string;
    /**
     * This property includes the text of the current element.
     */
    setXText(XText: string): void;
}
/************************************************** ENUMERATED TYPES **************************************************/
export declare enum XMPPMessageTypes {
    jmtNormal = 0,
    jmtChat = 1,
    jmtGroupChat = 2,
    jmtHeadline = 3,
    jmtError = 4
}
export declare enum XMPPPresences {
    pcOffline = 0,
    pcChat = 1,
    pcAway = 2,
    pcXA = 3,
    pcDND = 4
}
export declare enum XMPPSSLProviders {
    sslpAutomatic = 0,
    sslpPlatform = 1,
    sslpInternal = 2
}
export declare enum XMPPSSLStartModes {
    sslAutomatic = 0,
    sslImplicit = 1,
    sslExplicit = 2,
    sslNone = 3
}
/**
 * The XMPP Component is used to create a lightweight messaging client
using the XMPP (Jabber) protocol.
 */
export declare class xmpp extends events.EventEmitter {
    private obj;
    constructor();
    about(): string;

















    on(event: "BuddyUpdate", listener: (e: {
        readonly buddyIdx: number;
    }) => void): this;
    on(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "EndTransfer", listener: (e: {
        readonly direction: number;
        readonly fileId: string;
        readonly fileName: string;
        readonly success: boolean;
    }) => void): this;
    on(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    on(event: "IQ", listener: (e: {
        readonly iq: string;
        readonly id: string;
        readonly from: string;
        readonly iqType: string;
        ignore: boolean;
    }) => void): this;
    on(event: "MessageIn", listener: (e: {
        readonly messageId: string;
        readonly from: string;
        readonly domain: string;
        readonly resource: string;
        readonly messageType: number;
        readonly subject: string;
        readonly messageThread: string;
        readonly messageText: string;
        readonly messageHTML: string;
        readonly other: string;
    }) => void): this;
    on(event: "PITrail", listener: (e: {
        readonly direction: number;
        readonly pi: string;
    }) => void): this;
    on(event: "Presence", listener: (e: {
        readonly user: string;
        readonly domain: string;
        readonly resource: string;
        readonly availability: number;
        readonly status: string;
    }) => void): this;
    on(event: "ReadyToSend", listener: (e: {}) => void): this;
    on(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    on(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    on(event: "StartTransfer", listener: (e: {
        readonly direction: number;
        readonly fileId: string;
        readonly user: string;
        readonly domain: string;
        readonly resource: string;
        fileName: string;
        readonly datetime: string;
        readonly size: number;
        accept: boolean;
    }) => void): this;
    on(event: "SubscriptionRequest", listener: (e: {
        readonly from: string;
        readonly domain: string;
        accept: boolean;
    }) => void): this;
    on(event: "Sync", listener: (e: {}) => void): this;
    on(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly fileId: string;
        readonly fileName: string;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
        cancel: boolean;
    }) => void): this;
    once(event: "BuddyUpdate", listener: (e: {
        readonly buddyIdx: number;
    }) => void): this;
    once(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "EndTransfer", listener: (e: {
        readonly direction: number;
        readonly fileId: string;
        readonly fileName: string;
        readonly success: boolean;
    }) => void): this;
    once(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    once(event: "IQ", listener: (e: {
        readonly iq: string;
        readonly id: string;
        readonly from: string;
        readonly iqType: string;
        ignore: boolean;
    }) => void): this;
    once(event: "MessageIn", listener: (e: {
        readonly messageId: string;
        readonly from: string;
        readonly domain: string;
        readonly resource: string;
        readonly messageType: number;
        readonly subject: string;
        readonly messageThread: string;
        readonly messageText: string;
        readonly messageHTML: string;
        readonly other: string;
    }) => void): this;
    once(event: "PITrail", listener: (e: {
        readonly direction: number;
        readonly pi: string;
    }) => void): this;
    once(event: "Presence", listener: (e: {
        readonly user: string;
        readonly domain: string;
        readonly resource: string;
        readonly availability: number;
        readonly status: string;
    }) => void): this;
    once(event: "ReadyToSend", listener: (e: {}) => void): this;
    once(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    once(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    once(event: "StartTransfer", listener: (e: {
        readonly direction: number;
        readonly fileId: string;
        readonly user: string;
        readonly domain: string;
        readonly resource: string;
        fileName: string;
        readonly datetime: string;
        readonly size: number;
        accept: boolean;
    }) => void): this;
    once(event: "SubscriptionRequest", listener: (e: {
        readonly from: string;
        readonly domain: string;
        accept: boolean;
    }) => void): this;
    once(event: "Sync", listener: (e: {}) => void): this;
    once(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly fileId: string;
        readonly fileName: string;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
        cancel: boolean;
    }) => void): this;
    addListener(event: "BuddyUpdate", listener: (e: {
        readonly buddyIdx: number;
    }) => void): this;
    addListener(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "EndTransfer", listener: (e: {
        readonly direction: number;
        readonly fileId: string;
        readonly fileName: string;
        readonly success: boolean;
    }) => void): this;
    addListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    addListener(event: "IQ", listener: (e: {
        readonly iq: string;
        readonly id: string;
        readonly from: string;
        readonly iqType: string;
        ignore: boolean;
    }) => void): this;
    addListener(event: "MessageIn", listener: (e: {
        readonly messageId: string;
        readonly from: string;
        readonly domain: string;
        readonly resource: string;
        readonly messageType: number;
        readonly subject: string;
        readonly messageThread: string;
        readonly messageText: string;
        readonly messageHTML: string;
        readonly other: string;
    }) => void): this;
    addListener(event: "PITrail", listener: (e: {
        readonly direction: number;
        readonly pi: string;
    }) => void): this;
    addListener(event: "Presence", listener: (e: {
        readonly user: string;
        readonly domain: string;
        readonly resource: string;
        readonly availability: number;
        readonly status: string;
    }) => void): this;
    addListener(event: "ReadyToSend", listener: (e: {}) => void): this;
    addListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    addListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    addListener(event: "StartTransfer", listener: (e: {
        readonly direction: number;
        readonly fileId: string;
        readonly user: string;
        readonly domain: string;
        readonly resource: string;
        fileName: string;
        readonly datetime: string;
        readonly size: number;
        accept: boolean;
    }) => void): this;
    addListener(event: "SubscriptionRequest", listener: (e: {
        readonly from: string;
        readonly domain: string;
        accept: boolean;
    }) => void): this;
    addListener(event: "Sync", listener: (e: {}) => void): this;
    addListener(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly fileId: string;
        readonly fileName: string;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
        cancel: boolean;
    }) => void): this;
    prependListener(event: "BuddyUpdate", listener: (e: {
        readonly buddyIdx: number;
    }) => void): this;
    prependListener(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "EndTransfer", listener: (e: {
        readonly direction: number;
        readonly fileId: string;
        readonly fileName: string;
        readonly success: boolean;
    }) => void): this;
    prependListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependListener(event: "IQ", listener: (e: {
        readonly iq: string;
        readonly id: string;
        readonly from: string;
        readonly iqType: string;
        ignore: boolean;
    }) => void): this;
    prependListener(event: "MessageIn", listener: (e: {
        readonly messageId: string;
        readonly from: string;
        readonly domain: string;
        readonly resource: string;
        readonly messageType: number;
        readonly subject: string;
        readonly messageThread: string;
        readonly messageText: string;
        readonly messageHTML: string;
        readonly other: string;
    }) => void): this;
    prependListener(event: "PITrail", listener: (e: {
        readonly direction: number;
        readonly pi: string;
    }) => void): this;
    prependListener(event: "Presence", listener: (e: {
        readonly user: string;
        readonly domain: string;
        readonly resource: string;
        readonly availability: number;
        readonly status: string;
    }) => void): this;
    prependListener(event: "ReadyToSend", listener: (e: {}) => void): this;
    prependListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    prependListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    prependListener(event: "StartTransfer", listener: (e: {
        readonly direction: number;
        readonly fileId: string;
        readonly user: string;
        readonly domain: string;
        readonly resource: string;
        fileName: string;
        readonly datetime: string;
        readonly size: number;
        accept: boolean;
    }) => void): this;
    prependListener(event: "SubscriptionRequest", listener: (e: {
        readonly from: string;
        readonly domain: string;
        accept: boolean;
    }) => void): this;
    prependListener(event: "Sync", listener: (e: {}) => void): this;
    prependListener(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly fileId: string;
        readonly fileName: string;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
        cancel: boolean;
    }) => void): this;
    prependOnceListener(event: "BuddyUpdate", listener: (e: {
        readonly buddyIdx: number;
    }) => void): this;
    prependOnceListener(event: "Connected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "ConnectionStatus", listener: (e: {
        readonly connectionEvent: string;
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "Disconnected", listener: (e: {
        readonly statusCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "EndTransfer", listener: (e: {
        readonly direction: number;
        readonly fileId: string;
        readonly fileName: string;
        readonly success: boolean;
    }) => void): this;
    prependOnceListener(event: "Error", listener: (e: {
        readonly errorCode: number;
        readonly description: string;
    }) => void): this;
    prependOnceListener(event: "IQ", listener: (e: {
        readonly iq: string;
        readonly id: string;
        readonly from: string;
        readonly iqType: string;
        ignore: boolean;
    }) => void): this;
    prependOnceListener(event: "MessageIn", listener: (e: {
        readonly messageId: string;
        readonly from: string;
        readonly domain: string;
        readonly resource: string;
        readonly messageType: number;
        readonly subject: string;
        readonly messageThread: string;
        readonly messageText: string;
        readonly messageHTML: string;
        readonly other: string;
    }) => void): this;
    prependOnceListener(event: "PITrail", listener: (e: {
        readonly direction: number;
        readonly pi: string;
    }) => void): this;
    prependOnceListener(event: "Presence", listener: (e: {
        readonly user: string;
        readonly domain: string;
        readonly resource: string;
        readonly availability: number;
        readonly status: string;
    }) => void): this;
    prependOnceListener(event: "ReadyToSend", listener: (e: {}) => void): this;
    prependOnceListener(event: "SSLServerAuthentication", listener: (e: {
        readonly certEncoded: string;
        readonly certEncodedB: Uint8Array;
        readonly certSubject: string;
        readonly certIssuer: string;
        readonly status: string;
        accept: boolean;
    }) => void): this;
    prependOnceListener(event: "SSLStatus", listener: (e: {
        readonly message: string;
    }) => void): this;
    prependOnceListener(event: "StartTransfer", listener: (e: {
        readonly direction: number;
        readonly fileId: string;
        readonly user: string;
        readonly domain: string;
        readonly resource: string;
        fileName: string;
        readonly datetime: string;
        readonly size: number;
        accept: boolean;
    }) => void): this;
    prependOnceListener(event: "SubscriptionRequest", listener: (e: {
        readonly from: string;
        readonly domain: string;
        accept: boolean;
    }) => void): this;
    prependOnceListener(event: "Sync", listener: (e: {}) => void): this;
    prependOnceListener(event: "Transfer", listener: (e: {
        readonly direction: number;
        readonly fileId: string;
        readonly fileName: string;
        readonly bytesTransferred: number;
        readonly percentDone: number;
        readonly text: string;
        readonly textB: Uint8Array;
        cancel: boolean;
    }) => void): this;
    /**
     * This method will add an entity to this entity's roster.
     */
    add(jabberId: string, name: string, groups: string): Promise<void>;
    /**
     * This method will cancel another entity's subscription to this entity's presence.
     */
    cancel(jabberId: string): Promise<void>;
    /**
     * This method will change the current user's password.
     */
    changePassword(password: string): Promise<void>;
    /**
     * This method will set the availability and status of this entity.
     */
    changePresence(presenceCode: number, status: string): Promise<void>;
    /**
     * Sets or retrieves a configuration setting.
     */
    config(configurationString: string): Promise<string>;
    /**
     * This method will connect the class to the server.
     */
    connect(): Promise<void>;
    /**
     * This method will connect the class to the server.
     */
    connectTo(user: string, password: string): Promise<void>;
    /**
     * This method disconnects the class from the server.
     */
    disconnect(): Promise<void>;
    /**
     * This method processes events from the internal message queue.
     */
    doEvents(): Promise<void>;
    /**
     * This method interrupts the current method.
     */
    interrupt(): Promise<void>;
    /**
     * Use this method to probe for another entity's presence.
     */
    probePresence(jabberId: string): Promise<void>;
    /**
     * This method queries a server for the necessary registration fields.
     */
    queryRegister(XMPPServer: string): Promise<void>;
    /**
     * This method registers an account with a server.
     */
    register(XMPPServer: string): Promise<void>;
    /**
     * This method will remove an entity from this entity's roster.
     */
    remove(jabberId: string, name: string, group: string): Promise<void>;
    /**
     * This method will reset the class.
     */
    reset(): Promise<void>;
    /**
     * This method will retrieve this entity's roster from the server.
     */
    retrieveRoster(): Promise<void>;
    /**
     * This method sends a command to the server.
     */
    sendCommand(command: string): Promise<void>;
    /**
     * This method sends a file to the specified user.
     */
    sendFile(jabberId: string): Promise<void>;
    /**
     * This method will send a message to the specified user.
     */
    sendMessage(jabberId: string): Promise<string>;
    /**
     * This method will add a user information field for registration.
     */
    setUserInfoField(field: string, value: string): Promise<void>;
    /**
     * Use this method to subscribe to another entity's presence.
     */
    subscribeTo(jabberId: string): Promise<void>;
    /**
     * This method cancels an account with the host.
     */
    unregister(): Promise<void>;
    /**
     * This method will cancel a subscription to another entity's presence.
     */
    unsubscribeTo(jabberId: string): Promise<void>;
    /**
     * This method updates the buddy's associated groups.
     */
    updateBuddyGroup(buddyIndex: number, group: string): Promise<void>;
    /**
     * This property includes the domain under which the user will be authenticated.
     */
    getAuthDomain(): string;
    /**
     * This property includes the domain under which the user will be authenticated.
     */
    setAuthDomain(authDomain: string): void;
    /**
     * This property controls how the class authenticates itself with the XMPP server.
     */
    getAuthMethods(): string;
    /**
     * This property controls how the class authenticates itself with the XMPP server.
     */
    setAuthMethods(authMethods: string): void;
    getBuddies(): XMPPBuddyList;
    /**
     * This property indicates whether the class is connected and logged in.
     */
    isConnected(): boolean;
    /**
     * A set of properties related to firewall access.
     */
    getFirewall(): Firewall;
    /**
     * A set of properties related to firewall access.
     */
    setFirewall(firewall: Firewall): void;
    /**
     * This property includes the server port for XMPP (default 5222).
     */
    getIMPort(): number;
    /**
     * This property includes the server port for XMPP (default 5222).
     */
    setIMPort(IMPort: number): void;
    /**
     * This property is the instant messaging server.
     */
    getIMServer(): string;
    /**
     * This property is the instant messaging server.
     */
    setIMServer(IMServer: string): void;
    /**
     * This property includes the directory to which received files are saved.
     */
    getLocalDirectory(): string;
    /**
     * This property includes the directory to which received files are saved.
     */
    setLocalDirectory(localDirectory: string): void;
    /**
     * This property includes the path to the file that will be sent.
     */
    getLocalFile(): string;
    /**
     * This property includes the path to the file that will be sent.
     */
    setLocalFile(localFile: string): void;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    getLocalHost(): string;
    /**
     * The name of the local host or user-assigned IP interface through which connections are initiated or accepted.
     */
    setLocalHost(localHost: string): void;
    /**
     * This property includes the HTML version of the current message.
     */
    getMessageHTML(): string;
    /**
     * This property includes the HTML version of the current message.
     */
    setMessageHTML(messageHTML: string): void;
    /**
     * This property contains extra data elements for the current message.
     */
    getMessageOtherData(): string;
    /**
     * This property contains extra data elements for the current message.
     */
    setMessageOtherData(messageOtherData: string): void;
    /**
     * This property is the subject of the current message.
     */
    getMessageSubject(): string;
    /**
     * This property is the subject of the current message.
     */
    setMessageSubject(messageSubject: string): void;
    /**
     * This property is the plaintext version of the current message.
     */
    getMessageText(): string;
    /**
     * This property is the plaintext version of the current message.
     */
    setMessageText(messageText: string): void;
    /**
     * This property is the thread name of the current message.
     */
    getMessageThread(): string;
    /**
     * This property is the thread name of the current message.
     */
    setMessageThread(messageThread: string): void;
    /**
     * This property is the type of the current message.
     */
    getMessageType(): XMPPMessageTypes;
    /**
     * This property is the type of the current message.
     */
    setMessageType(messageType: XMPPMessageTypes): void;
    /**
     * This property is the user's password.
     */
    getPassword(): string;
    /**
     * This property is the user's password.
     */
    setPassword(password: string): void;
    /**
     * This property indicates the availability of the entity.
     */
    getPresence(): XMPPPresences;
    /**
     * This property is the resource for the current session.
     */
    getResource(): string;
    /**
     * This property is the resource for the current session.
     */
    setResource(resource: string): void;
    /**
     * This property includes the XMPP server's domain.
     */
    getServerDomain(): string;
    /**
     * This property includes the XMPP server's domain.
     */
    setServerDomain(serverDomain: string): void;
    /**
     * Instructs the class to unconditionally accept the server certificate that matches the supplied certificate.
     */
    getSSLAcceptServerCert(): Certificate;
    /**
     * Instructs the class to unconditionally accept the server certificate that matches the supplied certificate.
     */
    setSSLAcceptServerCert(SSLAcceptServerCert: Certificate): void;
    /**
     * The certificate to be used during Secure Sockets Layer (SSL) negotiation.
     */
    getSSLCert(): Certificate;
    /**
     * The certificate to be used during Secure Sockets Layer (SSL) negotiation.
     */
    setSSLCert(SSLCert: Certificate): void;
    /**
     * This property indicates whether Transport Layer Security/Secure Sockets Layer (TLS/SSL) is enabled.
     */
    isSSLEnabled(): boolean;
    /**
     * This property indicates whether Transport Layer Security/Secure Sockets Layer (TLS/SSL) is enabled.
     */
    setSSLEnabled(SSLEnabled: boolean): void;
    /**
     * The Secure Sockets Layer/Transport Layer Security (SSL/TLS) implementation to use.
     */
    getSSLProvider(): XMPPSSLProviders;
    /**
     * The Secure Sockets Layer/Transport Layer Security (SSL/TLS) implementation to use.
     */
    setSSLProvider(SSLProvider: XMPPSSLProviders): void;
    /**
     * The server certificate for the last established connection.
     */
    getSSLServerCert(): Certificate;
    /**
     * This property determines how the class starts the Secure Sockets Layer (SSL) negotiation.
     */
    getSSLStartMode(): XMPPSSLStartModes;
    /**
     * This property determines how the class starts the Secure Sockets Layer (SSL) negotiation.
     */
    setSSLStartMode(SSLStartMode: XMPPSSLStartModes): void;
    /**
     * This property holds the description of the availability of this entity.
     */
    getStatus(): string;
    /**
     * The timeout for the class.
     */
    getTimeout(): number;
    /**
     * The timeout for the class.
     */
    setTimeout(timeout: number): void;
    /**
     * This property includes the user portion of this entity's Jabber Id.
     */
    getUser(): string;
    /**
     * This property includes the user portion of this entity's Jabber Id.
     */
    setUser(user: string): void;
    /**
     * This property gets or sets the domain value used for Jabber Ids.
     */
    getUserDomain(): string;
    /**
     * This property gets or sets the domain value used for Jabber Ids.
     */
    setUserDomain(userDomain: string): void;
    getUserInfo(): XMPPUserInfoMap;
}
