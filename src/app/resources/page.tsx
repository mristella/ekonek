import SearchBar from "@/components/resources-page/searchbar";
import FileTypeFilter from "@/components/resources-page/file-type-filter";
import ResourceGrid from "@/components/resources-page/resource-grid";
import UploadResource from "@/components/resources-page/upload-resource";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function ResourcesPage() {
  return (
    <>
    <Header />
    <main className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Resources</h1>
      <SearchBar />
      <FileTypeFilter />

      {/* Categories & Featured can be inline for now */}
      <section className="py-6">
        <h2 className="text-xl font-semibold mb-3">Categories</h2>
        <ul className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          <li className="p-4 bg-white border rounded-lg">Technology & Digital Literacy</li>
          <li className="p-4 bg-white border rounded-lg">Social & Human Rights</li>
          <li className="p-4 bg-white border rounded-lg">Environment & Sustainability</li>
          <li className="p-4 bg-white border rounded-lg">Health, Education & Community Development</li>
        </ul>
      </section>

      <UploadResource />
      <ResourceGrid />
    </main>
    <Footer />
    </>
  );
}
