import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/shared/ui/breadcrumb";

interface Prop {
    path: string,
    faqItemText: string,
}

export function FaqBreadcrum({path, faqItemText}: Prop) {
    const separatePath = path.split("/");
    const actualPath = separatePath[3].replaceAll("-"," ");
    const itemSlug = faqItemText.replaceAll(" ","-").toLowerCase();

    return (
        <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                <BreadcrumbLink href="/faq">FAQ</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                <BreadcrumbLink href={`/faq/${itemSlug}`} >{faqItemText}</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                <BreadcrumbPage>{actualPath}?</BreadcrumbPage>
                    </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}