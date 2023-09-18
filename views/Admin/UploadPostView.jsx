import { useRef, useState } from "react";
import slugify from "slugify";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useRouter } from "next/router";
import app from "@/libs/firebase/init";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const storage = getStorage(app);
const UploadPostView = () => {
  const { push } = useRouter();
  const quillRef = useRef(null);
  const [errors, setErrors] = useState("");
  const [quillContent, setQuillContent] = useState("");
  const [previewImage, setPreviewImage] = useState(null);
  const [thumbnai, setThumbnai] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    title: "",
    slug: "",
    category: "",
    content: "",
    thumbnailUrl: "",
    imageUrls: [],
  });

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["bold", "italic", "underline", "strike"],
      ["blockquote", "code-block"],
      [{ align: [] }],
      [{ color: [] }, { background: [] }],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color",
    "background",
    "align",
    "code-block",
    "font",
  ];

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    const updateData = { ...data };

    if (name === "title") {
      const slug = slugify(value, {
        lower: true,
        remove: /[*+~.()'"!:@]/g,
      });
      updateData[name] = value;
      updateData["slug"] = slug;
    } else if (type === "file" && name === "thumbnail") {
      setThumbnai(files[0]);
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(files[0]);
    } else {
      updateData[name] = value;
    }

    setData(updateData);
  };

  const handleQuillChange = (content) => {
    setQuillContent(content);
    setData({ ...data, content });
  };

  const uploadThumbnail = async () => {
    try {
      const fileExtension = thumbnai.name.split(".").pop();
      const uniqueFileName = `${Date.now()}-${Math.random()
        .toString(36)
        .substring(7)}.${fileExtension}`;

      // Simpan gambar ke Firebase Storage
      const storageRef = ref(storage, `images/${uniqueFileName}`);
      await uploadBytes(storageRef, thumbnai);
      // Mendapatkan URL gambar yang diunggah
      const imageUrl = await getDownloadURL(storageRef);
      return imageUrl;
    } catch (error) {
      setLoading(false);
      console.error("Error uploading image to Firebase:", error);
      throw error;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(!loading);
    
    const updateData = { ...data };
    const res = await uploadThumbnail();
    updateData["thumbnailUrl"] = res;

    const imageUrls = quillContent.match(/<img src="(.*?)"/g)?.map((img) => {
      return img.match(/src=["'](.*?)["']/)[1];
    });

    data.imageUrls = imageUrls;

    try {
      const result = await axios.post("/api/artikel/upload-artikel", updateData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (result.data.status === true) {
        setLoading(false);
        event.target.reset();
        setQuillContent("");
        setThumbnai(null);
        setData({
          title: "",
          slug: "",
          category: "",
          content: "",
          thumbnailUrl: "",
          imageUrls: [],
        });
        push(`/artikel`);
      } else {
        setLoading(false);
        setErrors(result.data.message);
      }
    } catch (error) {
      setLoading(false);
      setErrors(error);
      console.log(error);
    }
  };


  return (
    <main className="min-h-screen flex">
      <div className="p-5 rounded-lg bg-bianca-100 w-full">
        <section className="py-10 sm:py-16 lg:py-24">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
              <div className="mt-6 overflow-hidden bg-white rounded-xl">
                <div className="px-6 py-12 sm:p-12">
                  <h3 className="text-3xl font-semibold text-center text-gray-900">
                    Buat Artikel Baru
                  </h3>

                  <form className="mt-14" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                      <div>
                        <label
                          htmlFor="title"
                          className="text-base font-medium text-gray-900"
                        >
                          Judul Post
                        </label>
                        <div className="mt-2.5 relative">
                          <input
                            type="text"
                            name="title"
                            id="title"
                            required
                            value={data.title}
                            onChange={handleChange}
                            placeholder="Masukan judul artikel"
                            className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="slug"
                          className="text-base font-medium text-gray-900"
                        >
                          Slug
                        </label>
                        <div className="mt-2.5 relative">
                          <input
                            type="text"
                            name="slug"
                            id="slug"
                            value={data.slug}
                            onChange={handleChange}
                            disabled={true}
                            className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="category"
                          className="text-base font-medium text-gray-900"
                        >
                          Category
                        </label>
                        <div className="mt-2.5 relative">
                          <select
                            className="select select-bordered"
                            name="category"
                            id="category"
                            required
                            value={data.category}
                            onChange={handleChange}
                          >
                            <option></option>
                            <option value={"php"}>Php</option>
                            <option value={"javascript"}>JavaScript</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <div className="form-control w-full max-w-xs">
                          <label className="label text-base font-medium text-gray-900">
                            Pilih thumbnail
                          </label>
                          <input
                            type="file"
                            name="thumbnail"
                            id="thumbnail"
                            onChange={handleChange}
                            className="file-input file-input-bordered w-full max-w-xs"
                          />
                        </div>
                        {previewImage && (
                          <img
                            src={previewImage}
                            className="max-w-sm rounded-lg shadow-2xl mt-5"
                          />
                        )}
                      </div>

                      <div className="sm:col-span-2">
                        <label
                          htmlFor="content"
                          className="text-base font-medium text-gray-900"
                        >
                          Content
                        </label>
                        <div className="mt-2.5 relative">
                          <ReactQuill
                            ref={quillRef}
                            name="content"
                            id="content"
                            modules={modules}
                            formats={formats}
                            theme="snow"
                            value={quillContent}
                            onChange={handleQuillChange}
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <button
                          type="submit"
                          disabled={loading}
                          className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                        >
                          {loading ? "Loading..." : "Submit"}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default UploadPostView;
