package mindustrytool.mindustry.schematic;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("SchematicInfo")
public class SchematicInfo {

    @Id
    private String id;

    private String authorId;
    private List<String> tags;
    private String data;
    private String likeId;
    private String dislikeId;
    private long likes;
    private long dislikes;

    public SchematicInfo(String id, String name, String authorId, List<String> tags, String data, String likeId,
            String dislikeId, long likes, long dislikes) {
        this.id = id;
        this.name = name;
        this.authorId = authorId;
        this.tags = tags;
        this.data = data;
        this.likeId = likeId;
        this.dislikeId = dislikeId;
        this.likes = likes;
        this.dislikes = dislikes;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAuthorId() {
        return authorId;
    }

    public void setAuthorId(String authorId) {
        this.authorId = authorId;
    }

    public List<String> getTags() {
        return tags;
    }

    public void setTags(List<String> tags) {
        this.tags = tags;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    public String getLikeId() {
        return likeId;
    }

    public void setLikeId(String likeId) {
        this.likeId = likeId;
    }

    public String getDislikeId() {
        return dislikeId;
    }

    public void setDislikeId(String dislikeId) {
        this.dislikeId = dislikeId;
    }

    public long getLikes() {
        return likes;
    }

    public void setLikes(long likes) {
        this.likes = likes;
    }

    public long getDislikes() {
        return dislikes;
    }

    public void setDislikes(long dislikes) {
        this.dislikes = dislikes;
    }
}
